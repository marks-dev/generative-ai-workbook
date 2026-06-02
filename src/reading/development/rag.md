---
layout: content.njk
title: RAG
description: 外部データ（社内文書など）をAIに読み込ませて回答させるRAGの仕組みを学びます。
permalink: /reading/development/rag/
pageType: content
difficulty: 中級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-rag
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: RAG
sidebar:
  title: 開発
  items:
    - title: AI開発とは
      url: /reading/development/what-is-ai-dev/
      status: 未実施
    - title: API利用の基本
      url: /reading/development/api-basics/
      status: 未実施
    - title: RAG
      url: /reading/development/rag/
      completionId: reading-development-rag
      status: 未実施
previous:
  title: API利用の基本
  url: /reading/development/api-basics/
---

## 概要

LLM（大規模言語モデル）は、自分が学習していない社内規則や最新ニュースといった外部知識をそのままでは知りません。これを解決する最も有力な技術である「RAG」について学びます。

## 学習目標

- 「RAG（検索拡張生成）」の基本的な定義と重要性を説明できる
- RAGを構築する際の、情報のインデックス化と検索・生成のフローを理解する

## RAGとは？

RAGは「Retrieval-Augmented Generation」の略で、日本語では「検索拡張生成」と訳されます。

AIが質問に答える前に、**「質問に関連する社内ドキュメントなどのテキストを外部データベースから自動で検索し、そのテキストを質問文と一緒にAIへ渡して回答を生成させる」**技術です。

### なぜRAGが必要なのか？

- **最新・独自データへの対応**: 再学習（ファインチューニング）を行わずに、社内マニュアルや顧客データに基づいた回答が可能になります。
- **ハルシネーションの抑制**: 「データベースから見つかったドキュメントに基づいて回答しなさい」と指示するため、AIの嘘（ハルシネーション）を大幅に減らせます。

## RAGの基本フロー

1. **インデックス化（蓄積）**: 文書データを細かく区切り、ベクトルデータに変換してベクトルデータベースに保存します。
2. **検索（Retrieval）**: ユーザーからの質問に関連する文書を、データベースから検索して取り出します。
3. **生成（Generation）**: 取り出した文書を「コンテキスト（背景知識）」としてプロンプトに加え、LLMに回答を作らせます。

## まとめ

RAGは、現在のエンタープライズ（企業向け）AIシステム開発におけるデファクトスタンダード（業界標準）となっています。
