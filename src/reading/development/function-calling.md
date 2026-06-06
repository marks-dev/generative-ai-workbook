---
layout: content.njk
title: Function Calling
description: AIモデルが自分でプログラムの関数（Function）を呼び出す必要性を判断し、必要な引数を構造化データとして生成する「Function Calling」の仕組みを解説します。
permalink: /reading/development/function-calling/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-function-calling
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: Function Calling
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
  title: プロンプトエンジニアリング
  url: /reading/development/prompt-engineering/
next:
  title: Structured Output
  url: /reading/development/structured-output/
keypoints:
  - Function Callingは、AIモデル自体が外部ツールや自社APIを呼び出すためのパラメータを生成する機能
  - AI自体がプログラムコードを動かすのではなく、呼び出すべき「関数名」と「引数（JSON形式）」を決定してプログラム側に返す
  - これにより、天気予報の取得、データベース検索、社内ツールの実行などをAI経由で自動化できる
relatedHandson: []
---

## Function Callingとは？

LLMは「2025年6月の最新の当社の売上は？」といったリアルタイムな質問や、「データベースに顧客を追加して」といったアクションを自ら行うことはできません。

**Function Calling（ファンクションコーリング / ツール利用）**は、開発者がプログラムであらかじめ定義した関数（データベース登録、外部API連携など）を、AIが「必要に応じて呼び出す判断をする」ための仕組みです。

## 動作の流れ（4つのステップ）

AI自身がデータベースを直接操作するわけではありません。AIとアプリケーションプログラムの間で、以下のようなバトンの受け渡しが行われます。

1. **関数の定義をAIに渡す**:
   - 開発者は「`get_weather(location, date)` という関数があり、これは場所と日付を渡すと天気を返す」という仕様書（JSONスキーマ形式）をプロンプトと一緒にAPIに送信します。
2. **AIが関数の実行を決定する**:
   - ユーザーが「明日の東京の天気を教えて」と質問すると、AIは「自分では天気がわからないが、提供された `get_weather` を使えば解決できる」と判断します。
   - AIは通常の文章を返答する代わりに、**「関数名：`get_weather`、引数：`{"location": "Tokyo", "date": "tomorrow"}`」**という構造化データを生成して呼び出し元（アプリケーション）に返します。
3. **アプリケーションが関数を実効する**:
   - アプリケーションプログラムはAIから渡された関数名と引数を受け取り、実際のWebAPIやデータベースから結果を取得します（例：晴れ、25度）。
4. **結果をAIに戻して文章化させる**:
   - アプリケーションは取得した結果をAIに送信します。AIはその結果（晴れ、25度）を踏まえて、「明日の東京の天気は晴れで、最高気温は25度の予定です」という自然な日本語を作成してユーザーに返します。

> [!NOTE]
> この機能により、AIは単なる「おしゃべりボット」から、システムを操作するための「インテリジェントなハブ」へと進化します。

## 主要なユースケース

- **データベースや検索システムとの連携**:
  - 「山田さんの連絡先を調べて」 -> データベース検索関数を呼び出し、結果を表示。
- **外部タスクの自動化（アクション）**:
  - 「Slackでチームに『会議は14時からです』と伝えて」 -> Slack送信関数を呼び出し、自動送信。
- **計算や高度なロジック処理**:
  - 複雑な数学の問題 -> 電卓関数（またはPythonコード実行関数）を呼び出して計算させ、誤計算を防ぐ。
