---
layout: content.njk
title: 推論モデル
description: OpenAIのo1/o3やDeepSeek-R1など、回答を出力する前に「内部での思考時間（Reasoning）」を取り入れ、難解な数学やコーディング、論理思考タスクで圧倒的な性能を発揮する「推論モデル」の仕組みを学びます。
permalink: /reading/advanced/reasoning-models/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-reasoning-models
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: 推論モデル
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
  title: GGUF
  url: /reading/advanced/gguf/
next:
  title: OSSモデル
  url: /reading/advanced/oss-models/
keypoints:
  - 推論モデルは、ユーザーに回答を表示する前に「内部的に時間をかけて熟考（思考プロセスの実行）」を行うLLM
  - 強化学習（RL）によって「自分で計画を立て、間違いに気づいたらやり直す」という人間の思考ステップをモデルレベルで獲得している
  - 数学オリンピック、競技プログラミング、複雑なバグの特定などの「システム2（熟考）」が必要なタスクで高い威力を発揮する
relatedHandson: []
---

## 推論モデル（Reasoning Models）とは？

これまでのLLMは、プロンプトを入力すると「直観的」に最初の単語から順番に出力する方式（人間でいう反射的な思考：システム1）でした。

それに対して、OpenAIの「o1」「o3-mini」や、オープンソースの「DeepSeek-R1」に代表される**推論モデル**は、回答を出力する前に、内部的に論理的な思考プロセスを何度もループさせ、自分で間違いを発見したら修正するステップ（人間でいう熟考：システム2）を取り入れた新しいクラスのAIモデルです。

## 推論モデルが動作する仕組み

ユーザーが複雑なパズルやコーディングのバグ修正を依頼すると、推論モデルは数秒から数十秒、回答の生成を保留します。この「保留された思考時間（Thinking Time）」の中で、以下の強化学習に基づく自律処理が行われています。

1. **思考ステップの書き出し (Chain-of-Thought)**:
   - 内部のプライベートな思考スペースで、「まずこの可能性を検証し、次にこれを仮定して計算してみよう」と論理ツリーを展開します。
2. **自己エラー訂正（Self-Correction）**:
   - 途中で計算ミスや論理的な矛盾を発見すると、AIはそれを自分で認識し、「いや、この方針は間違っていたので、アプローチBに変更しよう」と内部的に書き換えて修正を行います。
3. **最終回答のみを出力**:
   - 思考が完了し、最も最適化された論理ステップと結果がまとまると、それを整理された日本語の回答テキストとしてユーザーに出力します。

> [!NOTE]
> チャット画面の出力で、「〜秒間思考しました」というドロップダウンを開くことで、AIがどのように論理を組み立て、悩んでいたかを示す思考のログ（Thought Process）の一部を可視化できます。

## 推論モデルが圧倒的に得意なこと

推論モデルは、一般的な日常会話や簡単な文章の要約には過剰（オーバーキル）であり、料金も高く時間もかかります。しかし、以下のようなタスクでは従来のLLMを大きく凌駕します。

- **難解なプログラミングのバグ特定とアルゴリズム設計**:
  - 複雑なコードベース全体における、スレッドセーフ（マルチスレッド処理）のデッドロック問題の修正など。
- **数学、物理、化学などの学術問題の解決**:
  - 大学レベルの数学証明や、化学式の平衡状態の算出。
- **論理思考パズルや複雑な前提整理**:
  - 多くの例外ルールが交錯するビジネスの契約書や、インフラ構成図の論理的な脆弱性チェック。
