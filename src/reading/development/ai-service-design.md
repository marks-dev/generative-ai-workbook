---
layout: content.njk
title: AIサービス設計
description: AIを活用したサービス立ち上げにおける、コストの見積もり、レートリミット対策、モデルの選択基準（API vs ローカル）、および利用規約策定のポイントを解説します。
permalink: /reading/development/ai-service-design/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-ai-service-design
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: AIサービス設計
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
  title: AIアプリ設計
  url: /reading/development/ai-app-design/
next:
  title: 評価基盤
  url: /reading/development/evaluation-infrastructure/
keypoints:
  - API利用による従量課金コスト（インプット/アウトプットトークン数）のシミュレーションと予算制限の設定が重要
  - API制限（レートリミット：1分あたりのリクエスト数やトークン数）を回避するためのキャッシュやプロキシ設計を検討する
  - ビジネスモデルに応じたモデル選定を行い、状況に応じてプロプライエタリ（商用API）とオープンソース（OSS）モデルを組み合わせる
relatedHandson: []
---

## ビジネスとしてのAIサービス設計

生成AIを組み込んだWebサービスや社内システムを「ビジネスとして持続可能」にするためには、技術的な要件だけでなく、運用コスト（FinOps）、インフラ制限、および法的なリスクを踏まえた全体設計が必須です。

## 1. コスト見積もりとFinOps（財務管理）

AIのAPIは「入力＋出力」のトークン数に応じて費用が発生するため、ユーザー数が増えるほどコストが急増します。

- **トークン数の見積もり**:
  - 1回のやり取り（インプットプロンプト＋システム指示＋RAGの検索結果 ＋ アウトプット回答）で消費されるトークン数をシミュレーションします。
  - 特にRAGを使用する場合、検索でヒットした大量の参考文書をプロンプトに詰め込むため、インプットコストが想定以上に膨らみやすい傾向があります。
- **コストの抑え方（最適化）**:
  - **プロンプトキャッシュ（Prompt Caching）**: 多くのAPIでは、システムプロンプトやRAGの共通資料など「毎回送信される固定テキスト」をキャッシュすることで、キャッシュ部分の料金を半額以下に抑えることができます。これを設計に必ず組み込みましょう。
  - **軽量モデルの組み合わせ**: 複雑な推論が必要ない簡単なタスク（分類や一時フィルタリングなど）には、安価な軽量モデル（GPT-4o mini, Claude 3.5 Haikuなど）を使い、最終的なレポート生成などのコア処理にのみフラグシップモデル（GPT-4o, Claude 3.5 Sonnet）を使うという「ルーティング設計」を行います。

## 2. レートリミット（API制限）対策

すべてのAPIには、**RPM（1分あたりのリクエスト数制限）**や**TPM（1分あたりのトークン数制限）**といった上限値がアカウントのランクに応じて設定されています。
急激にアクセスが増加すると、APIから一時的にエラー（HTTP 429 Too Many Requests）が返されます。

- **リクエストのバッファリングとキュー**:
  - バッチ処理など大量のデータを一度に処理する場合は、レートリミットを考慮して一定時間ごとにリクエストを間引く（スロットリング）コードを設計します。
- **キャッシュサーバーの構築**:
  - よくある質問に対するAIの回答や、Embeddingの計算結果を Redis などのキャッシュサーバーに一定時間保存し、同じリクエストにはAPIを呼ばずにキャッシュから高速返答することで、APIリクエスト数そのものを削減します。

## 3. モデルの選択基準（API vs OSS）

サービスの要件やセキュリティ要件、予算によって、どのモデルを使うかの意思決定を行います。

- **プロプライエタリモデル (商用API型)**:
  - GPT-4o, Claude 3.5 Sonnet 等。
  - メリット：圧倒的な知能、開発の速さ。
  - デメリット：ベンダーロックインのリスク、従量課金コスト、外部ネットワーク送信。
- **オープンソースモデル (自社ホスト型)**:
  - Llama 3, Gemma 2, Qwen 等。
  - メリット：サーバー費用固定、データプライバシー、モデルの完全な制御。
  - デメリット：GPUサーバーの初期投資・運用保守の手間、モデル自体の最高性能は商用フラグシップに劣る場合がある。

> [!IMPORTANT]
> **規約と法的リスクの設計**
> AIが生成した回答によってユーザーが不利益を被った際、サービスの責任範囲をどこまでとするかを「利用規約」で明確に定めておく必要があります。また、生成された回答が他者の権利を侵害していないかを監査できる仕組みや、ハルシネーションが含まれる可能性がある旨の免責事項をUI/UX上に見えやすく配置することが重要です。
