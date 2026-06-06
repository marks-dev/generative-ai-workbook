---
layout: content.njk
title: シングルエージェント
description: 単一のAIモデルが目標達成に向けて自律的に思考し、ツールの実行、結果の評価、次のステップの決定を行う「シングルエージェント」の構造を学びます。
permalink: /reading/advanced/single-agent/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-advanced-single-agent
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: シングルエージェント
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
  title: エージェント
  url: /reading/advanced/agents/
next:
  title: マルチエージェント
  url: /reading/advanced/multi-agent/
keypoints:
  - シングルエージェントは、1つのLLMプロセスが目標に対して「思考」と「ツール実行」を自律的に繰り返すシステム
  - ReAct（Reason-Act）やPlan-and-Solveといった単一のループ構成で動作する
  - 設計がシンプルでデバッグしやすいが、長期的かつ複雑な多段階タスクでは記憶や指示の喪失（コンテキスト崩壊）が起きやすい
relatedHandson: []
---

## シングルエージェントとは？

AIエージェントの基本形態である**シングルエージェント**は、単一のLLM（大規模言語モデル）のインスタンスを中心に構築された自律システムです。

ユーザーから与えられた目標（ゴール）に対し、AIが単独で「計画を立て、ツールを使い、結果を確認し、必要に応じて軌道修正する」というサイクル（自律ループ）を回します。

## 基本的な動作ループ（ReActパターン）

シングルエージェントの代表的な設計パターンが **ReAct (Reasoning and Acting)** です。エージェントは以下の3つのステップを繰り返します。

```text
[ユーザーの目標] 
   ↓
[思考 (Thought)]: ゴール達成のために、次に何をすべきかをモデル自身に考えさせる。
   ↓
[行動 (Action)]: 用意されたツール（検索、データベース書き込み等）を呼び出す。
   ↓
[観察 (Observation)]: ツールの実行結果を受け取り、現在の状況を整理する。
   ↓
[思考 (Thought)] へ戻る（目標が達成されるまで繰り返す）
```

- **例**:「当社サイトのアクセス解析を行い、先月比で最も下がっている原因を調査して報告して」
  - 1. **思考**: まずアクセス解析データを取得する必要がある。ツール `get_traffic_data` を呼び出そう。
  - 2. **行動**: `get_traffic_data(month="last")` の呼び出し。
  - 3. **観察**: 「モバイルユーザーのセッション数が昨月比で30%低下している」という結果を確認。
  - 4. **思考**: モバイルユーザーのページ遷移に問題があるかもしれない。デバイス別のロード時間データを取得しよう...（ループ継続）

## シングルエージェントのメリットと強み

- **シンプルな設計と実装**:
  - LangChainやLlamaIndexなどのフレームワークを使うことで、十数行のコードで実装可能です。
- **低いAPIコストとレイテンシ**:
  - 1つのモデルだけで完結するため、複数のAI同士が裏側で延々と雑談を交わすような無駄なトークン消費が発生せず、比較的早く処理が終わります。
- **デバッグの容易さ**:
  - 1つのチャットコンテキスト（ログ）を追跡するだけで、なぜAIがその判断を下したかを容易に追跡できます。

## シングルエージェントの限界と課題

- **タスクの複雑化に伴う能力低下**:
  - 1つのチャットセッション内に、長時間の履歴（ログやツールの返答）が溜まりすぎると、AIモデルの記憶（コンテキストウィンドウ）が溢れ、最初のゴール（指示）を忘れて迷走しやすくなります。
- **役割のトレードオフ**:
  - 「コードを書く」「結果を客観的にレビューする」「全体を進行する」といった異なる役割を1つのモデルに同時にこなさせると、自分自身の書いたコードのミスに気づけないなどのバイアス（客観性の欠如）が生じやすくなります。
