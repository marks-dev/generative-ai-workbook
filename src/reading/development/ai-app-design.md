---
layout: content.njk
title: AIアプリ設計
description: AIの持つ不確実性（確率的出力）や遅延（レイテンシ）を考慮した、ユーザー体験（UX）とシステム構成の基本設計方針を学びます。
permalink: /reading/development/ai-app-design/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-ai-app-design
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: AIアプリ設計
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
  title: RAG
  url: /reading/development/rag/
next:
  title: AIサービス設計
  url: /reading/development/ai-service-design/
keypoints:
  - AIアプリケーションの設計では、AI特有の「出力の不確実性」と「高いレイテンシ（遅延）」を前提としたUX設計が必要
  - ストリーミング出力（流れるような表示）や、非同期キュー処理を活用してユーザーの体感待ち時間を削減する
  - 不適切な入力（プロンプトインジェクションや有害性）を遮断する入力フィルター（ガードレール）を実装する
relatedHandson: []
---

## AIアプリケーション設計の前提条件

従来のWebアプリケーション設計では、「入力が同じなら、出力は常に100%同じ（決定論的動作）」という前提がありました。
しかし、LLMを用いたAIアプリケーションは「**確率的（出力を予測しきれない不確実性）**」に動作します。

また、APIの応答速度（レイテンシ）も通常のWebAPI（数十ミリ秒）に比べて非常に遅く、長いと数秒〜数十秒かかります。
これらの特性を前提とした、特別なシステム設計とUX設計のアプローチが必要です。

## 不確実性と遅延を克服する設計パターン

### 1. ストリーミング（Streaming）表示の採用
LLM APIは、回答のテキスト全体が生成されるのを待ってから一括で受け取ると、ユーザーは数秒間白い画面を見つめて待つことになります。

APIの `stream: true` オプションを有効にし、**サーバー送信イベント（Server-Sent Events: SSE）**などを利用して、AIが生成したテキストを1トークンずつリアルタイムにブラウザへ送り、チャット画面上に「文字が流れるように表示」させます。これにより、ユーザーの体感待ち時間が大幅に短縮されます。

### 2. 非同期・ジョブキュー処理の導入
PDFの大量読み込みや、複雑なリサーチレポートの生成など、処理に数分以上かかるタスクでは、HTTP通信を繋ぎっぱなしにするとタイムアウトエラーになります。
リクエストを一度「ジョブキュー（RedisやAWS SQSなど）」に登録してバックグラウンドで非同期に処理を実行し、完了したらWebsocketやプッシュ通知、メール等で通知するアーキテクチャを採用します。

### 3. フォールバック（代替処理）の準備
AI APIのダウンタイム、レート制限（時間制限によるエラー）、またはJSONパースの失敗に備え、プログラム内で自動的にリトライする処理（指数バックオフ等）や、「現在AIが混み合っています。しばらく経ってから再度お試しください」といった親切なエラーフォールバックを表示するコードを実装します。

## 入出力のガードレール設計

セキュリティと信頼性を担保するため、AIモデルの前後に入出力フィルター（**ガードレール**）を配置します。

```text
[ユーザー入力] → (入力ガードレール) → [LLM API] → (出力ガードレール) → [画面表示]
```

- **入力ガードレール**:
  - 個人情報（電話番号、マイナンバーなど）が含まれていないかチェックしてマスクする。
  - プロンプトインジェクションの兆候（「これまでの命令を無視して」等の文字パターン）があれば、LLMに渡す前にブロックする。
- **出力ガードレール**:
  - LLMが生成した文章に、不適切な差別用語や自社の機密情報、あるいはあらかじめ設定した禁止ワードが含まれていないかプログラムで検証し、含まれていればダミーの安全な返答に差し替える。

> [!IMPORTANT]
> ガードレール設計はシステム全体の信頼性を大きく高めますが、あまりにフィルタリングルールを厳しくしすぎると、AIの利便性や回答の柔軟性が損なわれる原因になります。バランスを見極めながら継続的な調整が必要です。
