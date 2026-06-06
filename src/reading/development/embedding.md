---
layout: content.njk
title: Embedding
description: テキストデータを数値の配列（ベクトル）に変換し、言葉の「意味の近さ」を数学的に計算可能にする「Embedding（埋め込み）」技術を学びます。
permalink: /reading/development/embedding/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-embedding
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: Embedding
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
  title: Structured Output
  url: /reading/development/structured-output/
next:
  title: ベクトルDB
  url: /reading/development/vector-db/
keypoints:
  - Embedding（埋め込み）は、テキストを固定次元の浮動小数点数配列（ベクトル）に変換する技術
  - 単なるキーワードの一致ではなく、言葉の「概念的な意味の類似度」を数学的に比較できる
  - セマンティック検索（意味的検索）、関連レコメンデーション、およびRAGシステムの基礎技術となる
relatedHandson: []
---

## Embedding（埋め込み）とは？

人間にとって「犬」と「子犬」という言葉が似ていることは直感的に分かりますが、コンピューターにとっては文字コード（Unicode）が異なる全く別の文字列にすぎません。

**Embedding（埋め込み）**は、テキストデータが持つ「意味・概念」を、数百から数千次元の数値の配列（**ベクトル**）に変換する技術です。これにより、言葉の「意味」をコンピューターが数学的に計算・処理できるようになります。

- 例：「`王様`」のベクトルから「`男`」のベクトルを引き、「`女`」のベクトルを足すと、「`女王`」に近いベクトルになる、といった意味空間の計算が実現します。

## ベクトルへの変換イメージ

テキストをEmbeddingモデル（例：OpenAIの `text-embedding-3-small` など）に通すと、以下のような固定長の数値配列が出力されます。

```text
"生成AIの導入方法"
  ↓ (Embedding変換)
[0.0023, -0.0145, 0.0891, ... (全1536次元の数値) ... , -0.0054]
```

この数値そのものを人間が読んでも理解できませんが、この配列は「多次元空間内の座標」を指しています。意味が似ているテキスト同士は、この多次元空間上で「近くの座標」に配置されます。

## 意味の類似度の計算（コサイン類似度）

2つのテキストがどれだけ似ているかを判定するには、それぞれのEmbeddingベクトルの「角度（向き）」の近さを計算します。この計算手法を**コサイン類似度（Cosine Similarity）**と呼びます。

- コサイン類似度が `1.0` に近いほど、意味が極めて近いテキスト。
- `0` またはマイナスに近いほど、意味が関連していないテキスト。

例えば、以下の2つの文は文字の重なりが少ないですが、コサイン類似度を測ると非常に高い数値が出ます。
- 文A：「お腹が空いたので何か食べたい」
- 文B：「空腹だからランチに行こう」

> [!NOTE]
> 従来の「キーワードマッチ検索」では、上記の文Aと文Bは「お腹」や「空腹」といった文字が一致しないためヒットしません。Embeddingを用いた「**セマンティック検索（意味検索）**」であれば、表記の揺れを超えて高い精度でマッチさせることができます。

## 主な活用ユースケース

- **RAG (検索拡張生成)**:
  - ユーザーの質問ベクトルに最も近い意味を持つ社内ドキュメントを検索し、プロンプトのコンテキストとしてLLMに渡す。
- **レコメンデーションシステム**:
  - ユーザーが読んだ記事のベクトルと類似度の高い他の記事を抽出しておすすめする。
- **重複データの検知**:
  - 社内のQ&Aデータベース内で、表現は違うが同じ意味の質問（重複）を検知して整理する。
