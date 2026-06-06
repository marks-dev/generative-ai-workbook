---
layout: content.njk
title: Codex入門
description: プロジェクト管理・実装をAI主体で進行する「Codex」を用いた開発を体験します。
permalink: /hands-on/building-with-ai/codex-intro/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - Codex
completionId: hands-on-building-with-ai-codex-intro
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: Codex入門
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
  title: AIコーディング
  url: /hands-on/building-with-ai/ai-coding/
next:
  title: MCP入門
  url: /hands-on/building-with-ai/mcp-intro/
keypoints:
  - Codexツールやマルチファイル編集（Composer等）を使い、AIにゴールとリポジトリマップから実装計画を立案させる
  - 計画合意後、複数のファイルを横断したコードの自動生成・適用をAIに実行させる
  - AIが自律的にコンパイルやビルドチェックなどのコマンド実行を行う開発スタイルを理解する
relatedHandson:
  - title: Codex
    url: /reading/advanced/codex/
---

## 準備するもの

- 自律型開発をサポートする環境（例：AIエージェント、Codexツール、Cursor Composerのマルチファイル編集機能など）

## ステップ 1: ゴールと設計書を提示する

AIエージェントにプロジェクト全体に関する大きな指示（大目標）を提示します。

```text
現在開いているプロジェクトの中に、新たに「TODO管理機能」を組み込みたいです。
docs/repository-map.md から影響範囲を特定した上で、まずは実装計画書を implementation_plan.md として作成してください。
```

AIエージェントが、あなたのコードベースの他のファイルやドキュメントを自ら探索して調査するのを確認します。

## ステップ 2: 自律的なコード生成と適用を見守る

実装計画の合意後、複数のファイルにまたがるコードの生成と修正を実行させます。

```text
実装計画に基づいて、src/todo.js を新規作成し、さらに src/index.js にこのTODO機能をインポートして初期化するコードを追記してください。追記したら、一度ビルド（npm run build等）を自動で走らせて、構文エラーがないか確認してください。
```

AIが自動でファイルを作成し、別のファイルを書き換え、コンパイルコマンドまで実行して成功を報告するのを確認します。
