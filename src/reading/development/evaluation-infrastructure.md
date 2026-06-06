---
layout: content.njk
title: 評価基盤
description: AIシステムのアップデートやプロンプト変更に伴う品質変化を自動で継続的に測定する「評価基盤（Evaluation Infrastructure）」の構築アプローチを学びます。
permalink: /reading/development/evaluation-infrastructure/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-evaluation-infrastructure
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: 評価基盤
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
  title: AIサービス設計
  url: /reading/development/ai-service-design/
next:
  title: 運用監視
  url: /reading/development/operation-monitoring/
keypoints:
  - AI評価基盤は、プロンプト変更やモデル移行時に回答品質の「退行（デグレード）」を検知するためのCI/CDパイプライン
  - 評価指標として、単純な文字列比較ではなく、コサイン類似度、ROUGE/BLEUスコア、LLMによる自動採点（LLM-as-a-Judge）を用いる
  - LangSmithやPromptflowなどの専門評価ツール、あるいはRagas（RAG評価フレームワーク）を活用して効率化する
relatedHandson: []
---

## AI開発における評価基盤の役割

従来のソフトウェアでは、ユニットテスト（単体テスト）をパスすれば基本動作が保証されました。
しかし、AIアプリケーションでは、**システムプロンプトの記述を1行変えただけで、他の関係ない質問に対する回答の品質が大きく落ちる（退行 / デグレード）**ことがあります。

**評価基盤（Evaluation Infrastructure）**は、プロンプトの調整やAIモデルの切り替え、RAGパラメータの変更などを行った際に、全体の回答品質に悪影響が出ていないかを自動かつ継続的に検証するための「テスト実行システム」です。

## 評価基盤の主要なアプローチ

評価は一般的に以下の構成で行われます。

```text
[プロンプト/コードの変更] → (CI/CD実行) → [評価用テストデータの流し込み] → [自動採点(メトリクス/LLM)] → [結果のダッシュボード表示]
```

### 1. 評価用データセットの整備
実際のユーザーから送信された代表的な質問パターンや、開発者が作成した「エッジケース（意図的に難しくした質問）」を100〜500件程度集め、テスト用データセットとして固定します。

### 2. 多層的な評価指標（メトリクス）
回答の成否を複数の角度から自動判定します。

- **正確性の指標**:
  - **ROUGE / BLEU スコア**: 模範解答とAIの出力の文字列パターンがどれだけ重なっているかを測る。
  - **ベクトル類似度**: 模範解答とAI出力のベクトル類似度を計算し、表現が異なっていても意味が合っているかを判定する。
- **RAGに特化した指標 (Ragas等を利用)**:
  - **忠実性 (Faithfulness)**: 生成された回答が、RAGで検索してきた参考資料（コンテキスト）の情報のみに基づいて作られているか（ハルシネーションの検知）。
  - **回答の関連性 (Answer Relevance)**: ユーザーの質問に対して、直接的かつ簡潔に答えているか。
- **LLM-as-a-Judge（AIによる自動評価）**:
  - 最も強力なLLM（GPT-4など）を「採点官」として使い、プロンプトで「採点基準」を与えた上で、生成された回答を1〜5段階で採点・理由を出力させます。

## 代表的な評価・開発ツール

- **LangSmith (OpenAI/LangChain製)**:
  - AIアプリケーションのログ収集、デバッグ、およびデータセットを用いたテスト実行・バージョン比較をWebブラウザ上でトータルに行えるプラットフォーム。
- **Promptflow (Microsoft製)**:
  - プロンプトとコードを視覚的なフローとして繋ぎ、ローカル環境やクラウド環境で自動テストを並列実行できるツール。
- **Ragas**:
  - RAGシステムの品質（検索精度と生成精度）を測定することに特化した、Python向けのオープンソース評価フレームワーク。

> [!IMPORTANT]
> 評価基盤を構築することは、開発スピードの維持に大きく貢献します。「変更を加えるのが怖い」という属人的な不安を無くし、テストの数値を元に「自信を持って本番環境へプロンプトやモデルをデプロイできる」開発文化を作ることが、中長期的なAI製品開発では最も重要です。
