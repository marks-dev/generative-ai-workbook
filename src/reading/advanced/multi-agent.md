---
layout: content.njk
title: マルチエージェント
description: 異なる役割（ペルソナ）を与えられた複数のAIエージェントが、相互に対話・分業しながら複雑な共同目標を達成する「マルチエージェント」システムの仕組みを学びます。
permalink: /reading/advanced/multi-agent/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-advanced-multi-agent
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: マルチエージェント
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
  title: シングルエージェント
  url: /reading/advanced/single-agent/
next:
  title: エージェント設計
  url: /reading/advanced/agent-design/
keypoints:
  - マルチエージェントは、個別の「役割（ペルソナ）」と「利用可能なツール」を持つ複数のAIが連携するシステム
  - プログラマーエージェントが書いたコードを、レビュアーエージェントが検証して修正を求める、といった「分業と協調」が可能
  - 長大な開発プロジェクトや複雑な調査レポートなど、シングルエージェントの処理限界を超える複雑なタスクに適する
relatedHandson: []
---

## マルチエージェントとは？

シングルエージェントでは、1つのAIがすべての作業（計画、開発、テスト、調整など）をこなすため、タスクが複雑になると処理能力が限界に達しやすくなります。

**マルチエージェント**は、人間社会の「チーム組織」のように、それぞれ異なる役割（ペルソナ）とツールを持たせた独立した複数のAIエージェントをメッセージ通信で連携させ、1つの大きな目標を達成させる仕組みです。

## 代表的なチームの役割設計（例：ソフトウェア開発チーム）

マルチエージェントを構築する際、開発者は以下のようにエージェントを役割分担させます。

- **PM（プロジェクトマネージャー）エージェント**:
  - ユーザーの要求を分析し、タスクを小さなチケットに分割して開発者へ指示する。
- **デベロッパー（開発）エージェント**:
  - PMからの指示に基づき、プログラムのコードを書く。
- **レビュアー（テスト）エージェント**:
  - デベロッパーが書いたコードを実行・検証し、バグや規約違反があれば修正案とともにデベロッパーへ差し戻す。

このようにAI同士が相互にレビュー（フィードバック）し合うループを作ることで、人間が途中でチェックしなくても、極めて完成度の高い最終成果物を出力させることができます。

## マルチエージェントのアーキテクチャパターン

マルチエージェントにおけるエージェント間の「会話のルール」には、いくつかの代表的な構造パターンがあります。

### 1. 順次実行（Sequential / パイプライン型）
エージェントAの出力をエージェントBに渡し、さらにエージェントCへと、リレーのように一方向に処理を流すシンプルな構造。
- 例：`企画草案作成` -> `翻訳` -> `校正`

### 2. 階層型（Hierarchical / 上下関係型）
1つの「マネージャー（監督）エージェント」が全体を統率し、各タスクを「スペシャリスト（専門部下）エージェント」たちに割り振る構造。部下同士は直接会話せず、必ずマネージャーを介します。

### 3. グループ対話型（Group Chat / 全体会議型）
複数のエージェントが共通の会話スペース（スレッド）に入り、順番または挙手制で自由に発言し合って合意を形成する構造。

## 代表的な開発フレームワーク

- **AutoGen (Microsoft製)**:
  - 会話可能なエージェントをPythonで定義し、自由度の高いマルチエージェントチャットを構築できる強力なライブラリ。
- **CrewAI**:
  - 「エージェント（役割）」「タスク（やること）」「ツール（使う手段）」をすっきりと定義し、実務的なビジネスワークフローに落とし込みやすいフレームワーク。

> [!CAUTION]
> **無限ループとコストへの配慮**
> マルチエージェントでは、エージェント同士のやり取り（例：Aが書いてBがレビューし、Aが書き直してBが再レビューする）が無限ループに陥ることがあります。このループが長く続くと、数分間で数万トークンを消費し、高額なAPI利用料金が発生してしまうリスクがあります。実装する際は、最大ループ回数（例：最大5往復まで）をハードコードして強制終了させるなどの制御設計が不可欠です。
