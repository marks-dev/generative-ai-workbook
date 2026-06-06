---
layout: content.njk
title: エージェント
description: 自律的に思考・行動するAIエージェントの概念や、シングル・マルチ構成を学びます。
permalink: /reading/advanced/agents/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Claude
completionId: reading-advanced-agents
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: エージェント
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
  title: MCP Client
  url: /reading/advanced/mcp-client/
next:
  title: シングルエージェント
  url: /reading/advanced/single-agent/
---

## 概要

一回きりのチャットのやり取りを超え、AI自身が計画を立て、ツールを使い、エラーを自己修復しながら目的を達成する仕組みを「AIエージェント」と呼びます。この教材では、エージェントの基本構造と動作パターンを学びます。

## 学習目標

- 「AIエージェント」とは何か、従来のチャットAIとの違いを説明できる
- エージェントを構成する主要な要素（プランニング、メモリー、ツール）を理解する

## AIエージェントとは？

ユーザーからの「Webサイトを作成して」といった抽象的な大目標に対し、AI自身が「1. 設計する」「2. コードを書く」「3. テストする」「4. エラーが出たら修正する」といった具体的な行動ステップを自分で組み立て、実行を繰り返すシステムです。

### 構成要素

- プランニング（計画能力）
  - 目標をサブタスクに分解し、どのような順番で行動するか自律的に決定します。
- メモリー（記憶能力）
  - 短期記憶（チャットの文脈）や長期記憶（過去の試行錯誤や外部ナレッジ）を使い、一貫性のある作業を行います。
- ツール（実行能力）
  - Web検索、ファイル操作、電卓、プログラミング環境などを呼び出して実作業を行います。

## シングルとマルチエージェント

- **シングルエージェント**: 1つのAIがすべての計画・実行を担当します。シンプルですが、タスクが複雑になると混乱しやすくなります。
- **マルチエージェント**: 「設計担当」「コーディング担当」「レビュー担当」など、異なる役割を持つ複数のエージェントが対話し協力しながらタスクを達成します。

## まとめ

AIエージェントの発展により、私たちは「AIに作業を手伝ってもらう」段階から「AIに作業を丸ごと任せる」段階へと進化しつつあります。
次のステップでは、セキュリティやプライベートなデータを守るために、自身のPCやローカル環境でAIを安全に動作させる「ローカルLLM」について学びましょう。
