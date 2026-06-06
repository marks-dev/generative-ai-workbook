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
    - title: APIとは
      url: /reading/development/what-is-api/
    - title: API利用の基本
      url: /reading/development/api-basics/
    - title: プロンプトエンジニアリング
      url: /reading/development/prompt-engineering/
    - title: Function Calling
      url: /reading/development/function-calling/
    - title: Structured Output
      url: /reading/development/structured-output/
    - title: Embedding
      url: /reading/development/embedding/
    - title: ベクトルDB
      url: /reading/development/vector-db/
    - title: RAG
      url: /reading/development/rag/
    - title: AIアプリ設計
      url: /reading/development/ai-app-design/
    - title: AIサービス設計
      url: /reading/development/ai-service-design/
    - title: 評価基盤
      url: /reading/development/evaluation-infrastructure/
    - title: 運用監視
      url: /reading/development/operation-monitoring/
previous: null
next:
  title: APIとは
  url: /reading/development/what-is-api/
keypoints:
  - 従来のシステム開発は入力に対する出力が一意に決まる「決定論的」な設計に基づいていた
  - AI開発は出力が確率によって変化する「確率論的」な特性を持つため、不確実性を前提とした設計が必要となる
  - プログラミング言語でのロジック記述に加え、自然言語のプロンプトによる指示制御が開発の重要な役割を担う
relatedHandson:
  - title: AIアプリ開発
    url: /hands-on/building-with-ai/app-development/
---

## 決定的な違い：決定論から確率論へ

従来のシステム開発は決定論的（デターミニスティック）です。「入力Aに対しては、常に処理Bを行って結果Cを出力する」という厳密なルールをコードで記述します。

一方、AI開発は確率的（プロバビリスティック）です。AIは同じ入力を与えても、その都度異なる出力を生成することがあります。

### 設計方針のシフト

- **不確実性への対応**: 出力にブレがあることを前提に、入力チェック（ガードレール）や出力の検証ロジックをシステム側に組み込みます。
- **プロンプトのコード化**: プログラミング言語でロジックをすべて書くのではなく、自然言語のプロンプトを使ってAIの振る舞いを「プログラム」します。
