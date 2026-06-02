---
layout: content.njk
title: API利用の基本
description: 生成AIのAPIをシステムから呼び出すための基本原則と設定方法を学びます。
permalink: /reading/development/api-basics/
pageType: content
difficulty: 中級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-development-api-basics
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 開発
    url: /reading/development/
  - label: API利用の基本
sidebar:
  title: 開発
  items:
    - title: AI開発とは
      url: /reading/development/what-is-ai-dev/
      status: 未実施
    - title: API利用の基本
      url: /reading/development/api-basics/
      completionId: reading-development-api-basics
      status: 未実施
    - title: RAG
      url: /reading/development/rag/
      status: 未実施
previous:
  title: AI開発とは
  url: /reading/development/what-is-ai-dev/
next:
  title: RAG
  url: /reading/development/rag/
---

## 概要

独自のシステムやウェブサイトから生成AIの機能を利用するには、API（Application Programming Interface）を利用します。この教材では、APIの仕組みと、開発の際に欠かせない設定値（パラメーター）について学びます。

## 学習目標

- 生成AI APIの基本的なリクエストとレスポンスの構造を理解する
- `temperature` や `max_tokens` などの主要なパラメーターの役割を説明できる

## API呼び出しの基本パラメーター

APIを通じてモデルに指示を送信する際、以下のような設定値を調整することでAIの挙動をコントロールできます。

1. **Model（利用モデル）**
   - `gpt-4o`, `claude-3-5-sonnet` など、応答速度や機能、料金の異なるモデルを指定します。
2. **Temperature（温度）**
   - 0.0から2.0の範囲で指定し、出力の「多様性・ランダム性」を調整します。
   - 値を低く（`0.0`に近く）すると、常に論理的で一貫した同じ回答を返しやすくなり、コード生成やデータ抽出に適します。
   - 値を高く（`1.0`以上に）すると、創造的でユニークな回答を生成しやすくなります。
3. **Max Tokens（最大トークン数）**
   - 生成されるレスポンスの最大文字数（トークン数）を制限し、API利用料金の超過を防ぎます。

## まとめ

APIを利用することで、プログラムから自律的にAIを動かせるようになります。
次のステップでは、AIに社内文書などの独自データを読み込ませて回答させる「RAG」と呼ばれる高度なアプローチを学びましょう。
