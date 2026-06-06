---
layout: content.njk
title: MCP Server
description: Model Context Protocol (MCP)における「サーバー」の責務、リソース・ツール・プロンプトの提供仕様、および主要な公開サーバー例を学びます。
permalink: /reading/advanced/mcp-server/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-advanced-mcp-server
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: MCP Server
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
  title: MCP
  url: /reading/advanced/mcp/
next:
  title: MCP Client
  url: /reading/advanced/mcp-client/
keypoints:
  - MCP Serverは、特定のデータソースや外部ツールへのアクセスを標準化して公開する側プログラム
  - サーバーは「リソース」「ツール」「プロンプト」の3つの機能をAPIで公開する
  - GitHub、Git、Filesystem、Slack、PostgreSQLなど様々なデータ用のサーバーがオープンソースで提供されている
relatedHandson: []
---

## MCP Server（MCPサーバー）とは？

**Model Context Protocol (MCP)** において、**MCP Server（MCPサーバー）**は、特定のローカルツール、ファイルシステム、データベース、またはWebサービスと接続するためのAPIを提供する「軽量なバックエンドプログラム」です。

各サーバーは、AIモデル（クライアント経由）が利用できる「データ（リソース）」や「機能（ツール）」をMCPの共通規格に従って公開します。

## MCP Serverが提供する3つの基本機能

MCPサーバーは、接続されたAIに対して、主に以下の3つの情報を公開するようにプログラムされます。

### 1. リソース (Resources)
AIが読み取ることができる「静的または動的なテキスト・データ」です。
- 例：ローカルファイルの内容、データベースのテーブルデータ、APIの実行ログなど。
- クライアントは `resources/list` を呼び出して利用可能なリソース一覧を取得し、`resources/read` で中身を読み取ります。

### 2. ツール (Tools)
AIが呼び出して「実行させることができる関数（アクション）」です。
- 例：ファイルを書き換える、Slackメッセージを送信する、GitHubのPull Requestを作成する、コードを実行するなど。
- ツールには名前、説明、および引数のスキーマ（JSON Schema）が定義されており、クライアント（AI）はこれに基づいてツールを呼び出します。

### 3. プロンプトテンプレート (Prompts)
特定のタスクを実行するためにあらかじめ設計された「プロンプトのひな形」です。
- 例：「コードのバグを監査するための前提プロンプト」など、定型的な役割や設定をサーバー側からクライアントに提供できます。

## 主要な公開MCPサーバー例

Anthropicやオープンソースコミュニティにより、以下のような公式・非公式のMCPサーバーがすぐに使える状態で公開されています。

- **Filesystem**: 指定したフォルダ内のファイルを読み書きするための安全なファイルアクセスツール。
- **GitHub**: リポジトリの検索、Issueの作成、PRの作成、ファイルの編集をGitHub API経由でAIに行わせる。
- **Slack**: Slackチャンネルへの書き込みや、メッセージ履歴の読み込みを行う。
- **PostgreSQL / SQLite**: データベースに接続し、SQLの実行やスキーマ情報の読み込みを行う。

> [!IMPORTANT]
> **ローカル実行セキュリティの確保**
> MCPサーバーは基本的に、ローカルPC上の独立したプロセスとして実行されます。ファイルシステムサーバーなどを接続する際は、AIが誤ってシステム全体を削除してしまわないよう、AIからアクセス可能なフォルダ（作業スペース）を引数で限定（サンドボックス化）して起動する設定が極めて重要です。
