---
layout: content.njk
title: MCP Client
description: Model Context Protocol (MCP)における「クライアント」の役割、サーバーとの接続方法、およびClaude Desktop等の既存クライアントの構成を学びます。
permalink: /reading/advanced/mcp-client/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-advanced-mcp-client
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: MCP Client
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
  title: MCP Server
  url: /reading/advanced/mcp-server/
next:
  title: エージェント
  url: /reading/advanced/agents/
keypoints:
  - MCP Clientは、AIモデル（LLM）と通信しつつ、複数のMCP Serverと接続を仲介するフロントエンド・ホストアプリケーション
  - クライアントは、サーバーが公開するツールやリソースの定義を取得し、AIモデルがそれらを利用できるように橋渡しする
  - 代表的なクライアントとして、Claude Desktopアプリ、Cline（VS Code拡張）、Cursor、およびカスタム開発用SDKがある
relatedHandson: []
---

## MCP Client（MCPクライアント）とは？

**Model Context Protocol (MCP)** において、**MCP Client（MCPクライアント）**は、ユーザーインターフェース（UI）やAIモデル（LLM）を保持し、背後で動作する複数のMCP Serverを統合的に管理・接続する「ハブ」の役割を果たすアプリケーションです。

```text
[ユーザー] ⇄ [MCP Client (Claude Desktop等)] ⇄ [LLM (モデル)]
                     ↓ (標準化されたMCP通信プロトコル)
          ┌──────────┼──────────┐
          ↓          ↓          ↓
     [Filesystem] [GitHub]  [Database] (MCP Servers)
```

## クライアントの責務

MCPクライアントは、以下の重要な役割を担います。

### 1. サーバーの起動とプロセス管理
設定ファイルに記述されたパラメータに基づいて、各種MCPサーバー（Node.js、Pythonなどの実行プロセス）を起動し、バックグラウンドでの接続を維持します。通信方法には、標準入出力（stdio）やWebソケット（SSE）が用いられます。

### 2. ツール定義のLLMへの提供
接続されたすべてのMCPサーバーから「利用可能なツール一覧（JSON Schema）」を集約し、それをLLM（API）へ渡します。これにより、LLMはどの機能が現在使える状態にあるかを認識できます。

### 3. 関数の実行と仲介（ガードレール）
LLMから「このツールを実行して」というリクエスト（関数呼び出し）が返ってきた際、該当するMCPサーバーに引数を渡して実行させ、その結果を再びLLMへ返送します。
- この際、クライアントはユーザーに対して「実行を許可しますか？」という承認確認（ダイアログ）を挟むなどの安全策を講じることができます。

## 代表的なMCPクライアント

### 1. Claude Desktop (Anthropic社製デスクトップアプリ)
最も代表的なMCPクライアントです。設定ファイル `claude_desktop_config.json` を編集することで、複数のMCPサーバーを追加してチャット上でファイルアクセスやコマンド実行を行えるようになります。

### 2. エディタ拡張機能 (Cline, Cursor, Roo Code等)
VS Codeなどの開発環境内に統合されたAIアシスタント拡張機能です。MCPを通じてローカルPC内のファイルシステムや、コマンド実行（ターミナル操作）サーバーと連携し、AI自律コーディングを実現します。

### 3. カスタムクライアント (SDKを用いた自社開発)
Python、TypeScript、Javaなどの「MCP SDK」を用いることで、自社の既存WebアプリケーションをMCPクライアント化し、世界中の公開MCPサーバーと容易に接続させることができます。

> [!NOTE]
> MCPクライアントがあることで、AIモデル側は「個別のデータベースや外部APIの仕様」を意識することなく、単一の標準規格（MCP）だけを相手にしてツール利用を行うことができます。
