---
layout: content.njk
title: エージェント設計
description: 安定して動作する実用的なAIエージェントを設計・構築するための「状態管理」「エラーハンドリング」「人間による承認（Human-in-the-loop）」の設計パターンを学びます。
permalink: /reading/advanced/agent-design/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-advanced-agent-design
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: エージェント設計
sidebar:
  title: 高度
  items:
    - title: MCP
      url: /reading/advanced/mcp/
    - title: MCP Server
      url: /reading/advanced/mcp-server/
    - title: MCP Client
      url: /reading/advanced/mcp-client/
    - title: エージェント
      url: /reading/advanced/agents/
    - title: シングルエージェント
      url: /reading/advanced/single-agent/
    - title: マルチエージェント
      url: /reading/advanced/multi-agent/
    - title: エージェント設計
      url: /reading/advanced/agent-design/
    - title: ワークフロー自動化
      url: /reading/advanced/workflow-automation/
    - title: AIコーディング
      url: /reading/advanced/ai-coding/
    - title: Claude Code
      url: /reading/advanced/claude-code/
    - title: Codex
      url: /reading/advanced/codex/
    - title: GitHub Copilot
      url: /reading/advanced/github-copilot/
    - title: Cursor
      url: /reading/advanced/cursor/
    - title: ローカルLLM
      url: /reading/advanced/local-llm/
    - title: Ollama
      url: /reading/advanced/ollama/
    - title: LM Studio
      url: /reading/advanced/lm-studio/
    - title: GGUF
      url: /reading/advanced/gguf/
    - title: 推論モデル
      url: /reading/advanced/reasoning-models/
    - title: OSSモデル
      url: /reading/advanced/oss-models/
    - title: ファインチューニング
      url: /reading/advanced/fine-tuning/
    - title: 蒸留
      url: /reading/advanced/distillation/
    - title: 最新トレンド
      url: /reading/advanced/latest-trends/
previous:
  title: マルチエージェント
  url: /reading/advanced/multi-agent/
next:
  title: ワークフロー自動化
  url: /reading/advanced/workflow-automation/
keypoints:
  - 自律的なAIエージェントの構築には、進行中の状態（State）を正しく管理・永続化する設計が不可欠
  - 破壊的な操作（メール送信、本番デプロイなど）を実行する前に、人間の承認を挟む「Human-in-the-loop」設計が必須
  - LangGraphやSemantic Kernelなど、エージェントをグラフ構造やステートマシンとして表現する設計手法が主流である
relatedHandson: []
---

## 実用的なAIエージェントに必要な要素

お試しで動かすAIエージェントを作るのは簡単ですが、本番環境で「エラーを起こさず、コストが予測可能で、安全に動作する」実用的なエージェントを設計するのは非常に困難です。

AIエージェントのプロダクション設計で必ず考慮すべき主要な設計パターンについて学びます。

## 1. 状態管理（State Management）

エージェントがステップ・バイ・ステップでタスクを実行する際、「今どのタスクを完了し、何を保留にしているか」「途中でどんなデータを収集したか」といった**状態（State）**をシステム側で管理する必要があります。

- **メモリの永続化**:
  - 万が一途中でネットワークエラーが発生したり、APIがダウンしたりしても、それまでの進捗を失わないよう、データベース（Redis、PostgreSQLなど）に状態を随時保存（永続化）します。これにより、エラー解消後に「前回のステップから再開（レジューム）」することが可能になります。

## 2. Human-in-the-loop (人間による承認・介入)

AIエージェントにすべてを自律的に実行させるのは極めて危険です。例えば、「返金処理を実行する」「顧客にメールを送信する」「インフラにコードを本番デプロイする」といった破壊的な操作には、必ず人間の合意（ゲート）を設けます。

- **タイムアウトと承認インターフェース**:
  - エージェントはアクションを起こす手前で処理を「一時停止（ポーズ）」し、管理者の画面に「この操作を実行してよろしいですか？ [承認] / [却下]」という確認を求めます。人間が「承認」ボタンを押して初めて、エージェントは次の行動へ進みます。

## 3. エラーハンドリングとリトライ

AIの出力は不確実です。ツールを呼び出すための引数（JSON）が壊れている、あるいはツールの実行自体が失敗する（例：サーバータイムアウト）ことは日常茶飯事です。

- **自己修復（Self-Correction）**:
  - ツール実行でエラーが発生した場合、エージェントはそのエラーログをコンテキストに含めてAIモデルへ再送信します。「ツール A の実行でこのようなエラーが出ました。原因を考えて引数を修正し、再度呼び出してください」とAI自身にエラーをデバッグさせ、自動的にリトライさせる設計（リトラインループ）を組み込みます。

## グラフ構造によるエージェント設計 (LangGraph)

近年、複雑なエージェントの設計には、処理のステップを「ノード（状態・処理）」と「エッジ（遷移ルール）」として定義する**有向グラフ（Directed Graph）**モデルが採用されています。

LangChainプロジェクトの **LangGraph** などは、この設計に基づいています。

```text
[開始] ──> [ノード A: 調査] ──> [ノード B: レビュー] ──(合格?)
                                   │                   │
                                   ↓ (不合格)          ↓ (合格)
                               [ノード C: 修正]     [終了]
```

> [!NOTE]
> グラフ構造を用いることで、エージェントが無限ループに陥るのを防ぎ、いつどの状態で停止・分岐させるかをプログラム側で正確に制御できるようになります。
