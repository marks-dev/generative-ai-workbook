---
layout: content.njk
title: MCP入門
description: MCPサーバーを実際に構築・接続して、AIが自由に使える独自のツールを作成します。
permalink: /hands-on/building-with-ai/mcp-intro/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - Claude
  - Cursor
completionId: hands-on-building-with-ai-mcp-intro
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: MCP入門
sidebar:
  title: AIと仕組みを作る
  items:
    - title: AIコーディング
      url: /hands-on/building-with-ai/ai-coding/
    - title: Codex入門
      url: /hands-on/building-with-ai/codex-intro/
    - title: MCP入門
      url: /hands-on/building-with-ai/mcp-intro/
    - title: エージェント設計
      url: /hands-on/building-with-ai/agent-design/
    - title: ワークフロー自動化
      url: /hands-on/building-with-ai/workflow-automation/
    - title: AIアプリ開発
      url: /hands-on/building-with-ai/app-development/
previous:
  title: Codex入門
  url: /hands-on/building-with-ai/codex-intro/
next:
  title: エージェント設計
  url: /hands-on/building-with-ai/agent-design/
---

## 概要

このハンズオンでは、オープン規格である「MCP（Model Context Protocol）」を使い、ローカルファイルや外部サービスをAIのツールとして登録し、AIから直接そのシステムを呼び出せる強力な連携環境を実際に構築します。

## 準備するもの

- [Claude Desktopアプリケーション](https://claude.ai/download)（またはMCP連携が可能なCursorエディタなど）
- Node.js 環境（Node.jsがインストールされている前提になります）

## 実践ステップ

### ステップ 1: 代表的な公開MCPサーバーを導入してみる

最もシンプルで強力な連携として、ローカルファイルをAIが安全に探索できるようにする「Filesystem MCP Server」を導入します。

Claude Desktopの構成ファイル（通常は以下のパスにあります）を開きます。
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

構成ファイルに以下のJSON設定を追加（マージ）します。

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/MyDocuments"
      ]
    }
  }
}
```
*(※ `/Users/YOUR_USERNAME/MyDocuments` 部分は、AIに探索を許可したい実在のフォルダパスに変更してください。)*

### ステップ 2: 動作確認を行う

1. Claude Desktop アプリケーションを完全に終了し、再起動します。
2. チャットの入力欄の右下に「丸いコンセント型（プラグ）」のアイコンが表示され、接続が成功していることを確認します。
3. AIに対して以下の質問をしてみましょう。

> プロンプト例:
> 私が指定したドキュメントフォルダ（MyDocuments）の中には、どのようなファイルやフォルダが入っていますか？一覧を教えてください。

AIが実際にローカルのOSコマンド（MCP経由のAPI）を呼び出し、フォルダ一覧を回答してくれる体験を確認します。

## まとめ

MCPを導入することで、AIはWebブラウザ内の閉じた世界から脱出し、ファイルシステムやデータベースを直接操作できる「実用的なエージェント」へと進化します。
これで「AIと仕組みを作る」カテゴリ、およびすべてのハンズオン教材は完了です！
