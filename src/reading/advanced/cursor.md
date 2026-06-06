---
layout: content.njk
title: Cursor
description: VS Codeをフォークして開発され、AIとの対話や自律コーディング機能をエディタのコアレベルで統合した次世代AIコードエディタ「Cursor」の機能と魅力を解説します。
permalink: /reading/advanced/cursor/
pageType: content
difficulty: 上級
plan: Free
service:
  - Claude
  - ChatGPT
completionId: reading-advanced-cursor
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: Cursor
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
  title: GitHub Copilot
  url: /reading/advanced/github-copilot/
next:
  title: ローカルLLM
  url: /reading/advanced/local-llm/
keypoints:
  - Cursorは、VS Codeをベースに開発され、AIツールとの統合が最初からエディタ自体に組み込まれている次世代エディタ
  - 「Composer（マルチファイル編集機能）」を使うことで、AIが複数のファイルにまたがるコード修正を自律的に実行できる
  - codebase全体をインデックス化し、「@codebase」などの参照タグを使うことで、プロジェクト全体を網羅的に理解した上でAIが回答する
relatedHandson: []
---

## Cursor（カーソル）とは？

**Cursor**は、Microsoftのオープンソースエディタ「VS Code」をフォーク（分岐・拡張）して開発された、AIの活用に特化した新世代のコードエディタ（IDE）です。

従来のプラグイン形式のAI拡張とは異なり、エディタ自体のコアエンジンにAIモデルが統合されているため、開発プロジェクト全体の把握能力や、複数ファイルにまたがるコード書き換え能力が飛躍的に高いことが特徴です。

## Cursorを象徴する3つの強力な機能

### 1. Composer (マルチファイル編集・エージェント機能)
Cursorで最も強力な機能です。`Ctrl + I` (または `Cmd + I`) でComposer画面を開き、「ナビゲーションに新しい設定画面を追加して」といった指示を出すと、AIは複数のソースコード（HTML、JavaScript、CSS、設定ファイルなど）を同時に編集し、差分を提案します。
エージェントモードを選択すると、AI自身がビルドコマンドを叩いてエラーを確認しながら、自律的にコーディングを完了させます。

### 2. @シンボルによるコンテキスト指定
チャットやインライン編集の際、プロンプト内に `@` と打ち込むことで、AIに参照させたいリソースをピンポイントで指定できます。
- `@Files`: 特定のファイルを渡す。
- `@Folders`: フォルダ全体を読み込ませる。
- `@Web`: 最新のネット上のAPIドキュメントを検索して参照させる。
- `@Codebase`: プロジェクト全体のソースコードを背景情報として渡す。

### 3. Cursor Tab (次世代のコード補完)
GitHub Copilotよりもさらに高度な機械学習モデル（Copilotよりも強力なCursor専用モデル）をバックグラウンドで動かしています。
コードを入力するだけでなく、次に「エディタのどこにカーソルを移動させ、どの行を編集するか（カーソルジャンプ）」までをAIが予測してサジェストします。

## VS Codeユーザーの移行のしやすさ

CursorはVS Codeをベースに作られているため、VS Codeの拡張機能（プラグイン）、カラーテーマ、キーバインド（ショートカット設定）がそのままワンクリックで引き継がれます。移行コストがほぼゼロで使い始めることができるのも人気の理由です。

> [!TIP]
> Cursorは独自のクラウドで動作するAIモデル（Claude 3.5 SonnetやGPT-4oなど）を利用しますが、設定画面から自分自身の「OpenAI APIキー」や「Anthropic APIキー」を登録して、従量課金コストのみで利用することも可能です。
