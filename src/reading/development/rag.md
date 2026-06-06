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
previous:
  title: ベクトルDB
  url: /reading/development/vector-db/
next:
  title: AIアプリ設計
  url: /reading/development/ai-app-design/
keypoints:
  - RAG（Retrieval-Augmented Generation）は、質問に関連する外部文書を検索し、それを元にAIが回答する技術である
  - ファインチューニング（追加学習）を行わずに、最新情報や社内のプライベートデータをAIに安全に取り扱わせることができる
  - 外部データベースに立脚して回答を生成させるため、AIのハルシネーション（嘘）を強力に抑制できる
relatedHandson:
  - title: AIアプリ開発
    url: /hands-on/building-with-ai/app-development/
---

## RAGとは？

RAGは「**Retrieval-Augmented Generation**」の略で、日本語では「**検索拡張生成**」と訳されます。

AIが質問に答える前に、**「質問に関連する社内ドキュメントなどのテキストを外部データベースから自動で検索し、そのテキストを質問文と一緒にAIへ渡して回答を生成させる」**技術です。

### なぜRAGが必要なのか？

- **最新・独自データへの対応**: 再学習（ファインチューニング）を行わずに、社内マニュアルや顧客データに基づいた回答が可能になります。
- **ハルシネーションの抑制**: 「データベースから見つかったドキュメントに基づいて回答しなさい」と指示するため、AIの嘘（ハルシネーション）を大幅に減らせます。

## RAGの基本フロー

1. **インデックス化（蓄積）**: 文書データを細かく区切り、ベクトルデータに変換してベクトルデータベースに保存します。
2. **検索（Retrieval）**: ユーザーからの質問に関連する文書を、データベースから検索して取り出します。
3. **生成（Generation）**: 取り出した文書を「コンテキスト（背景知識）」としてプロンプトに加え、LLMに回答を作らせます。
