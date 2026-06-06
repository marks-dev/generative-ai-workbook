---
layout: content.njk
title: Structured Output
description: AIモデルの出力を、開発者が定義した特定のスキーマ（JSONなど）に100%厳密に強制追従させる「Structured Outputs」技術を学びます。
permalink: /reading/development/structured-output/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-structured-output
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: Structured Output
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
  title: Function Calling
  url: /reading/development/function-calling/
next:
  title: Embedding
  url: /reading/development/embedding/
keypoints:
  - Structured Outputは、AIの回答を開発者が事前に指定したJSONスキーマに完全に従わせる技術
  - プロンプトによる指示だけでは防ぎきれなかった「JSONの構文エラー（キー不足、余分なカンマ等）」を100%防止できる
  - データ抽出、要約、複数カテゴリの同時分類など、後続のプログラム処理へ繋ぐタスクで必須となる
relatedHandson: []
---

## Structured Outputとは？

LLMから出力を得てシステムに組み込む際、最も困るのが「出力フォーマットの揺れ」です。
プロンプトで「必ず `{"status": "success"}` というJSONのみで出力し、余計な説明は一切省いてください」と指示しても、AIは時折「はい、了解しました。以下が結果のJSONです：`{"status": "success"}`」のように挨拶を付け加えてしまい、プログラムがJSONとしてパースできずにエラーになります。

**Structured Output（構造化出力）**は、AIモデル自体のトークン生成確率を制限し、開発者が指定した**JSONスキーマに100%従うデータだけを出力させる**APIプロバイダ側の機能です。

## なぜStructured Outputが必要なのか？

- **システムの堅牢性（エラー回避）**:
  - 生成されたJSONデータが、期待するキー（`name`, `age`, `email`など）やデータ型（文字列、数値、配列など）を欠くことなく出力されるため、システム全体のクラッシュを防ぎます。
- **バリデーション（検証）コストの削減**:
  - AIの出力が事前に保証されるため、プログラム側で「JSON形式が正しいか」「必要なキーが存在するか」といったパースエラー処理を過剰に実装する必要がなくなります。

## Structured Outputの代表的な指定方法

APIリクエスト時に、出力形式を制限するパラメータ（例：OpenAIの `response_format` で `type: "json_schema"` を指定し、好みのJSON Schemaを渡す）を設定します。

### 指定するJSON Schema（仕様）の例
```json
{
  "name": "steps_response",
  "schema": {
    "type": "object",
    "properties": {
      "steps": {
        "type": "array",
        "items": { "type": "string" }
      },
      "final_answer": { "type": "string" }
    },
    "required": ["steps", "final_answer"],
    "additionalProperties": false
  },
  "strict": true
}
```

> [!IMPORTANT]
> 上記のように `strict: true`（厳格モード）を設定すると、AIは指定されたスキーマ以外の出力を物理的に生成できなくなります。これにより、出力のパースエラーは実質的にゼロになります。

## 主な活用シーン

- **テキストからの情報抽出**:
  - メールの本文から「注文者名」「住所」「電話番号」「注文アイテムリスト」を抽出し、データベースへ直接インサート可能な形で出力させる。
- **センチメント分析と分類**:
  - レビューテキストに対して `{"sentiment": "positive", "score": 0.95, "tags": ["使いやすい", "軽量"]}` のようなフォーマットで出力させ、分析システムに自動投入する。
