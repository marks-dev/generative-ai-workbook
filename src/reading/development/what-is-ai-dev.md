---
layout: content.njk
title: AI開発とは
description: 従来の開発とAIを取り入れた開発の違いや、基本的なアーキテクチャを学びます。
permalink: /reading/development/what-is-ai-dev/
pageType: content
difficulty: 中級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-what-is-ai-dev
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: AI開発とは
sidebar:
  title: 開発
  items:
    - title: AI開発とは
      url: /reading/development/what-is-ai-dev/
      completionId: reading-development-what-is-ai-dev
      status: 未実施
    - title: API利用の基本
      url: /reading/development/api-basics/
      status: 未実施
    - title: RAG
      url: /reading/development/rag/
      status: 未実施
next:
  title: API利用の基本
  url: /reading/development/api-basics/
---

## 概要

生成AIの登場によって、システム開発のあり方が大きく変わりつつあります。この教材では、プログラムの中にAIを組み込む「AIアプリケーション開発」の全体像と、従来型の開発との決定的な違いを学びます。

## 学習目標

- 「従来のシステム開発」と「AI開発」の違いを説明できる
- AI開発における「確率的（プロバビリスティック）」な特性と設計方針を理解する

## 決定的な違い：決定論から確率論へ

従来のシステム開発は**決定論的（デターミニスティック）**です。「入力Aに対しては、常に処理Bを行って結果Cを出力する」という厳密なルールをコードで記述します。

一方、AI開発は**確率的（プロバビリスティック）**です。AIは同じ入力を与えても、その都度異なる出力を生成することがあります。

### 設計方針のシフト

- **不確実性への対応**: 出力にブレがあることを前提に、入力チェック（ガードレール）や出力の検証ロジックをシステム側に組み込みます。
- **プロンプトのコード化**: プログラミング言語でロジックをすべて書くのではなく、自然言語のプロンプトを使ってAIの振る舞いを「プログラム」します。

## まとめ

AI開発では、プログラムによる厳密な制御と、AIによる柔軟なコンテンツ生成のバランスをとるシステム設計が必要になります。
次のステップでは、このAIをシステムに組み込むための最も基本的な窓口である「API」の利用方法について学びましょう。
