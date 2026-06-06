---
layout: content.njk
title: ベクトルDB
description: 高次元のベクトルデータを高速に格納・検索することに特化した「ベクトルデータベース（Vector Database）」の役割と代表的な製品を解説します。
permalink: /reading/development/vector-db/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-vector-db
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: ベクトルDB
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
  title: Embedding
  url: /reading/development/embedding/
next:
  title: RAG
  url: /reading/development/rag/
keypoints:
  - ベクトルデータベース（Vector DB）は、Embeddingによって生成された高次元ベクトルデータを格納し、高速に類似度検索を行う専用DB
  - 通常のSQLデータベースのインデックス（B-Tree等）とは異なり、ANN（近似最近傍探索）アルゴリズムを用いてミリ秒単位の超高速検索を行う
  - 代表的なベクトルDBには、Pinecone、Chroma、Milvus、Qdrant、PGVector（PostgreSQL拡張）などがある
relatedHandson: []
---

## ベクトルデータベース（Vector DB）とは？

Embeddingによって生成されるベクトル（数値配列）は、1536次元や3072次元といった非常に「高次元のデータ」です。

通常のRDBMS（MySQLやPostgreSQLなど）で何百万件ものベクトルデータを対象に「コサイン類似度」を毎回まともに計算すると、CPUの負荷が大きすぎて検索に数秒〜数分かかってしまいます。

**ベクトルデータベース（Vector DB）**は、この膨大な高次元ベクトルデータを効率的にインデックス化してハードディスクやメモリに格納し、「最も近いベクトル（類似するデータ）」をミリ秒単位で高速に見つけ出すことに特化したデータベースシステムです。

## 高速検索を実現する技術（ANN）

ベクトルDBの多くは、厳密な計算（すべてのデータとの総当たり計算）を避けるため、**ANN（Approximate Nearest Neighbor：近似最近傍探索）**というアルゴリズムを使用しています。

これは、空間をあらかじめグループ（クラスタ）に分割しておき、検索クエリが属する近いグループの中だけで探索を行うことで、精度を95〜99%程度に保ったまま、検索スピードを劇的に（100倍〜1万倍以上）高速化する技術です。代表的なインデックス方式には **HNSW (Hierarchical Navigable Small World)** や **IVF (Inverted File Index)** があります。

## 代表的なベクトルデータベース製品

用途やインフラ構成に合わせて、さまざまな種類のベクトルDBを選択できます。

### 1. ホスト型・クラウド専用 (SaaS)
- **Pinecone (パインコーン)**: 完全にマネージドされたベクトルDB。自社でのサーバー管理が不要で、高可用性とスケーラビリティに優れるためエンタープライズの第一選択肢となることが多い。

### 2. ローカル・軽量インメモリ (オープンソース)
- **Chroma (クロマ)**: PythonやNode.js環境で非常にシンプルに動作する。特別なサーバーを立てずにメモリ内やローカルファイルにデータを保存できるため、プロトタイプ開発や個人開発に広く使われる。

### 3. 本格的なオープンソース (分散型)
- **Qdrant (クアドラント) / Milvus (ミルバス)**: 大規模なプロダクション環境向けの高性能なベクトルDB。コンテナ化して自社のAWSやGCP、オンプレミス環境で運用できる。

### 4. 既存DBのベクトル拡張
- **pgvector**: リレーショナルデータベースである「PostgreSQL」の拡張機能。通常の顧客データやトランザクションテーブルと同じDB内で、ベクトル類似度検索をSQLを使って同時に実行できるため、開発・運用コストを大幅に下げられる。

> [!IMPORTANT]
> ベクトルDBを選定する際は、「データの更新頻度（リアルタイムでベクトルを追加・修正する必要があるか）」「総データ量（メモリに載る範囲か）」「既存のインフラとの統合コスト」を考慮する必要があります。特に小規模なプロジェクトであれば、PostgreSQLの `pgvector` や、サーバーレスのSaaS（Pinecone等）から始めるのが推奨されます。
