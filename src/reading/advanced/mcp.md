---
layout: content.njk
title: MCP
description: Model Context Protocol (MCP) の概要と、AIツールと外部データソースの統合を学びます。
permalink: /reading/advanced/mcp/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Claude
completionId: reading-advanced-mcp
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: MCP
sidebar:
  title: 高度
  items:
    - title: MCP
      url: /reading/advanced/mcp/
      completionId: reading-advanced-mcp
      status: 未実施
    - title: エージェント
      url: /reading/advanced/agents/
      status: 未実施
    - title: ローカルLLM
      url: /reading/advanced/local-llm/
      status: 未実施
next:
  title: エージェント
  url: /reading/advanced/agents/
---

## 概要

AIとさまざまなデータソースや外部ツール（データベース、Git、APIなど）を連携させる際、個別に接続コードを書くのは大変です。この課題を解決するために Anthropic が提唱したオープンな規格「MCP」について学びます。

## 学習目標

- 「MCP（Model Context Protocol）」の基本的な役割を説明できる
- MCPのアーキテクチャ（クライアント、サーバー、データソース）の関係性を理解する

## MCPとは？

MCPは「Model Context Protocol」の略です。

AIモデルが安全にローカルファイル、社内データベース、開発ツール、Web API などの外部リソースと対話するための、**「標準化されたオープンな通信プロトコル（接続方式の共通ルール）」**です。

### なぜMCPが必要なのか？

これまでは、新しいツールやデータソースをAI（例：Claude DesktopやCursorなど）に繋ぐたびに、それぞれ専用の統合コードを書く必要がありました。MCPに対応することで、**「一度MCPサーバーを作れば、あらゆる互換AIアプリから共通の方法で即座にそのツールを呼び出せる」**ようになります。

## MCPの3つのコア要素

1. **MCP Client（クライアント）**
   - AIモデルを搭載したアプリケーションのこと。（例：Claude Desktop, Cursor）
2. **MCP Server（サーバー）**
   - 外部ツールやデータの読み書きを制御し、クライアントに標準化されたインターフェース（API）を提供する軽量プログラム。
3. **Data Source / Tools（リソースとツール）**
   - 実際に読み書きされるファイル、データベース、APIなど。

## まとめ

MCPは、AIが外部世界と繋がり、ツールを自在に操るための強力な技術基盤です。
次のステップでは、このMCPなどのツールを駆使して自律的に目的を達成する「AIエージェント」の概念を学びましょう。
