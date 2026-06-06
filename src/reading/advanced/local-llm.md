---
layout: content.njk
title: ローカルLLM
description: 自身のローカル環境でLLMを動作させる方法や、Ollamaなどのツールの特徴を学びます。
permalink: /reading/advanced/local-llm/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - Ollama
  - LM Studio
completionId: reading-advanced-local-llm
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: ローカルLLM
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
  title: Cursor
  url: /reading/advanced/cursor/
next:
  title: Ollama
  url: /reading/advanced/ollama/
---

## 概要

クラウド上のAPI（ChatGPTなど）を使わず、自分のパソコン（ローカルPC）のハードウェア上でモデルをダウンロードして動かすことを「ローカルLLM」と呼びます。この教材では、その特徴と代表的な実行手段について学びます。

## 学習目標

- 「ローカルLLM」のメリットとデメリットをクラウドLLMと比較して説明できる
- ローカルLLMを簡単に動かすための主要なソフトウェア（Ollamaなど）の名前と役割を挙げる

## ローカルLLMのメリットとデメリット

### メリット

- **究極のプライバシー**: データがインターネットを経由して外部に送信されないため、社外秘の情報や個人情報を安全に扱えます。
- **通信コストがゼロ**: 従量課金（API利用料）がかからず、どれだけ利用しても電気代以外の費用が発生しません。
- **オフライン動作**: インターネットに繋がっていない完全な隔離環境でもAIを利用できます。

### デメリット

- **高いPCスペック要件**: 快適に動作させるためには、高性能なGPU（グラフィックスカード）や十分なメモリ容量（RAM）が必要です。
- **モデルの性能限界**: 一般的なローカルPCで動かせるモデルは、クラウド上の超巨大モデル（GPT-4など）に比べると、知識量や推論能力で劣る場合があります。

## 代表的なツール

- **Ollama（オラマ）**
  - MacやWindows、Linuxのターミナル（コマンドライン）から、コマンド一つでさまざまなオープンソースモデルをダウンロードして実行・管理できる非常に人気のあるツールです。
- **LM Studio（エルエムスタジオ）**
  - 直感的で分かりやすいGUI（画面操作）で、チャット形式で簡単にローカルモデルを動作させ、APIサーバー化も行えるソフトウェアです。

## まとめ

ローカルLLMは、セキュリティの厳格なビジネスシーンやオフライン開発において、非常に重要な選択肢となっています。
