---
layout: content.njk
title: LM Studio
description: GUI（グラフィカルユーザーインターフェース）を使って、Hugging Face上の様々なローカルLLMを簡単に検索・ダウンロード・実行できるデスクトップアプリケーション「LM Studio」の機能を学びます。
permalink: /reading/advanced/lm-studio/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-lm-studio
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: LM Studio
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
  title: Ollama
  url: /reading/advanced/ollama/
next:
  title: GGUF
  url: /reading/advanced/gguf/
keypoints:
  - LM Studioは、コマンドライン（CUI）ではなく直観的な画面（GUI）でローカルLLMを動かせるデスクトップアプリ
  - 世界最大のAIコミュニティ「Hugging Face」と直接接続し、数クリックでモデルを検索・DLできる
  - メモリ使用量やGPUオフロードの設定などを、スライダー操作で直観的に調整できる
relatedHandson: []
---

## LM Studio（エルエム・スタジオ）とは？

ローカル環境でLLMを動かすツールとしてOllamaと人気を二分するのが、**LM Studio**です。

Ollamaがターミナル操作（CUI）を基本とするのに対し、LM Studioは完全にグラフィカルな画面（GUI）を備えた、美しいデスクトップアプリケーション（Mac/Windows/Linux対応）です。コードを書かないビジネスパーソンや、直感的に各種パラメータをテストしたい開発者に広く愛用されています。

## LM Studioの主要な機能と特徴

### 1. Hugging Face との直接連携
アプリ内の検索窓にモデル名（例：「`gemma-2`」）を入力するだけで、AIコミュニティ「**Hugging Face**」上の公開リポジトリを検索し、PCに適合するモデル（主にGGUF形式）を自動で見つけ出し、ダウンロードボタンを押すだけで取得できます。

### 2. グラフィカルな対話（プレイグラウンド）
ChatGPT風の使いやすいチャット画面が標準搭載されています。
- **システムプロンプトの編集**: 画面右側のテキストエリアから、AIの前提キャラクター設定を瞬時に書き換えて反応を見ることができます。
- **パラメータのリアルタイム調整**: 応答温度（Temperature）や、生成トークン上限などのスライダーを動かしながら対話の挙動をテストできます。

### 3. ハードウェア設定（GPUオフロード）
ローカルLLMを動かす際、PCのメインメモリ（RAM）とビデオカードのメモリ（VRAM）のどちらにモデルをどれくらいロードさせるか（**GPU Offload**）の設定が、応答速度に直結します。
LM Studioでは、GPUへの処理割り振りを簡単なチェックボックスとスライダー操作で行うことができ、ハードウェアの性能を最大限に引き出せます。

### 4. ローカルAPIサーバー機能
Ollamaと同様、OpenAI互換のローカルAPIサーバーをワンクリックで起動できます。

> [!NOTE]
> LM Studioは完全にクローズドなオフライン環境で動作するため、アップロードしたテキストやデータが開発元のサーバーに送信されることはなく、安全な検証環境として活用できます。
