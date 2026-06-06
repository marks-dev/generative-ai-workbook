---
layout: content.njk
title: 運用監視
description: 本番環境でのAIアプリケーションのヘルスチェック、コストトラッキング、プロンプトインジェクション検知、および回答の品質ログ収集（オブザーバビリティ）の設計手法を学びます。
permalink: /reading/development/operation-monitoring/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-operation-monitoring
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: 運用監視
sidebar:
  title: 開発
  items:
    - title: AI開発とは
      url: /reading/development/what-is-ai-dev/
    - title: APIとは
      url: /reading/development/what-is-api/
    - title: API利用の基本
      url: /reading/development/api-basics/
    - title: プロンプトエンジニアリング
      url: /reading/development/prompt-engineering/
    - title: Function Calling
      url: /reading/development/function-calling/
    - title: Structured Output
      url: /reading/development/structured-output/
    - title: Embedding
      url: /reading/development/embedding/
    - title: ベクトルDB
      url: /reading/development/vector-db/
    - title: RAG
      url: /reading/development/rag/
    - title: AIアプリ設計
      url: /reading/development/ai-app-design/
    - title: AIサービス設計
      url: /reading/development/ai-service-design/
    - title: 評価基盤
      url: /reading/development/evaluation-infrastructure/
    - title: 運用監視
      url: /reading/development/operation-monitoring/
previous:
  title: 評価基盤
  url: /reading/development/evaluation-infrastructure/
keypoints:
  - LLM運用の監視（LLMOps）には、コスト、トークン消費量、レイテンシ、エラーレートの追跡が必須
  - ユーザーの入力（プロンプト）とAIの出力をペアでログに記録し、ハルシネーションやセキュリティ攻撃（インジェクション）を可視化する
  - 本番運用ツールとして、LangfuseやArize Phoenix、あるいはDatadog/OpenTelemetryの拡張などを活用する
relatedHandson: []
---

## 本番環境におけるAI運用監視の必要性

AIアプリケーションを本番環境（プロダクション）でリリースした後、システムが正常に動いているかを常に監視する仕組み（**LLMOps**の一環）が必要です。

従来のサーバー死活監視だけでは、以下のような「AI特有のサイレント障害・問題」を検知できません。

- 特定のユーザーのプロンプトによって、APIコストが異常に急増している。
- AIの回答のレイテンシ（応答速度）が急激に悪化し、タイムアウトが多発している。
- AIの回答内に、ハルシネーション（嘘）や攻撃的な内容が紛れ込んでいる。

## 監視すべき主要な指標（メトリクス）

運用監視は、主に以下の4つの切り口で設計します。

### 1. コストとトークン数監視
- **日次・月次コスト**: アカウント全体やテナント（組織・ユーザー）ごとのAPI料金。
- **インプット/アウトプットトークン比率**: ユーザーが長いテキストを送りすぎたり、AIが無限ループで長いテキストを生成し続けたりしていないか。

### 2. システムの健全性とパフォーマンス
- **エラーレート (HTTP 429 / 5xx)**: APIプロバイダ側の上限制限（レートリミット）にかかっていないか、あるいはプロバイダのサーバー自体がダウンしていないか。
- **TTFT (Time to First Token)**: ストリーミング出力において、最初の1文字が画面に表示されるまでの時間。ユーザーの離脱率に直結します。

### 3. セキュリティと入力チェック
- **攻撃検知（プロンプトインジェクション）**: システムプロンプトを改ざんしようとするキーワード入力ログ。
- **個人情報の検知（PIIリーク）**: クレジットカード番号やパスワードなど、機密データがAPI側へ送信されてしまっていないか。

### 4. 品質とオブザーバビリティ（トレース）
- **入力と出力のセットログ（トレース）**:
  AIがどう回答したかだけでなく、「RAGがどのようなコンテキストをデータベースから拾ってきて」「それをシステムプロンプトとどう結合してLLMに渡し」「LLMがどう最終的に出力したか」という**一連の実行パス全体をトレース（追跡）可能な形でログ保存**します。これにより、ユーザーから「回答がおかしい」というクレームが来た際に、どのステップでバグが起きたか（RAGの検索失敗か、プロンプトの誤解か）を即座に特定できます。

## 代表的な監視・トレースツール

- **Langfuse (オープンソース)**:
  - LLMアプリケーションに特化したオープンソースのトレース・監視ツール。APIの呼び出しコスト、遅延、入出力をステップごとに可視化し、ユーザーからのグッド/バッド評価ボタンとも紐付けて分析できます。
- **Arize Phoenix / OpenLLMetry**:
  - OpenTelemetry標準に準拠したLLM用オブザーバビリティライブラリ。既存のDatadogやDynatraceといった企業の統合監視システムへAIのメトリクスを容易に送信できます。

> [!WARNING]
> 本番環境での入力・出力ログの収集はデバッグに不可欠ですが、ログデータベースにユーザーの個人情報や機密データがそのままプレーンテキストで永続保存されてしまうリスクがあります。法令やプライバシーポリシーに従い、ログの一定期間での自動消去（リテンション）や、マスク処理（個人情報のマスキング）を事前にシステムとして設計しておくことが不可欠です。
