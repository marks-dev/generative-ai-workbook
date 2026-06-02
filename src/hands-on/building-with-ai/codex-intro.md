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
      status: 未実施
    - title: Codex入門
      url: /hands-on/building-with-ai/codex-intro/
      completionId: hands-on-building-with-ai-codex-intro
      status: 未実施
    - title: MCP入門
      url: /hands-on/building-with-ai/mcp-intro/
      status: 未実施
previous:
  title: AIコーディング
  url: /hands-on/building-with-ai/ai-coding/
next:
  title: MCP入門
  url: /hands-on/building-with-ai/mcp-intro/
---

## 概要

このハンズオンでは、人間がコードを一行ずつ書くのをAIが補助するのではなく、AI自身が自律的にプロジェクトの目標を解釈し、設計書を確認し、複数のソースファイルを適切に書き換えながら開発を進める「Codex（自律型開発支援）」の進め方を体験します。

## 準備するもの

- 自律型開発をサポートする環境（例：AIエージェント、Codexツール、Cursor Composerのマルチファイル編集機能など）

## 実践ステップ

### ステップ 1: ゴールと設計書を提示する

AIエージェントにプロジェクト全体に関する大きな指示（大目標）を提示します。

> プロンプト例:
> 現在開いているプロジェクトの中に、新たに「TODO管理機能」を組み込みたいです。
> `docs/ROADMAP.md` の現在のステップを確認し、影響範囲を特定した上で、まずは実装計画書を `implementation_plan.md` として作成してください。

AIエージェントが、あなたのコードベースの他のファイルやドキュメントを自ら探索して調査するのを確認します。

### ステップ 2: 自律的なコード生成と適用を見守る

実装計画の合意後、複数のファイルにまたがるコードの生成と修正を実行させます。

> プロンプト例:
> 実装計画に基づいて、`src/todo.js` を新規作成し、さらに `src/index.js` にこのTODO機能をインポートして初期化するコードを追記してください。追記したら、一度ビルド（`npm run build`等）を自動で走らせて、構文エラーがないか確認してください。

AIが自動でファイルを作成し、別のファイルを書き換え、コンパイルコマンドまで実行して成功を報告するのを確認します。

## まとめ

自律型AI（Codex）を用いることで、開発者は「コードを書く作業員」から、AIが書いた設計や実装をレビューし「方針を決定する監督者（指揮官）」へと役割をシフトさせることができます。
次のステップでは、AIが自ら外部世界（ローカルPCのファイルや外部API）に接続してデータを操作できるようにする「MCP」の接続ハンズオンに挑戦しましょう。
