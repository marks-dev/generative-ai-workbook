---
layout: content.njk
title: 議事録作成
description: 会議の録音データやメモから、構造化された正確な議事録を素早く作成する実践を行います。
permalink: /hands-on/business/meeting-minutes/
pageType: content
difficulty: 初級から中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-meeting-minutes
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: 議事録作成
sidebar:
  title: 仕事で活用する
  items:
    - title: 議事録作成
      url: /hands-on/business/meeting-minutes/
    - title: 調査・リサーチ
      url: /hands-on/business/research/
    - title: 企画書作成
      url: /hands-on/business/proposal/
    - title: スライド作成
      url: /hands-on/business/slides/
    - title: Excel活用
      url: /hands-on/business/excel/
    - title: 業務効率化
      url: /hands-on/business/efficiency/
    - title: 複数AI比較
      url: /hands-on/business/comparison/
next:
  title: 調査・リサーチ
  url: /hands-on/business/research/
keypoints:
  - 構造化されたテンプレートを指示することで、AIに正確で見やすい議事録を作成させる
  - 会議メモからアクションアイテム（ToDo）と担当者、期限を自動で抽出・整理させる
  - 目的のフォーマットを明確にプロンプトで定義することが品質向上のポイントとなる
relatedHandson:
  - title: 業務活用
    url: /reading/chat-level/business-use/
---

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）
- 会議のメモ書き（以下のサンプルを使用します）

## ステップ 1: 構造化テンプレートを指定して要約させる

以下の指示文（プロンプト）と会議メモをAIに入力して送信します。

```text
以下の会議メモを整理し、以下のフォーマットに沿って構造化された議事録を作成してください。

# フォーマット
1. 会議の決定事項（簡潔に）
2. 各発言者の主な主張
3. 次回までの宿題（担当者と期限）

# 会議メモ
参加者：佐藤、鈴木、田中
佐藤「新規ウェブサイトのデザインについて。トップページは青を基調にした柔らかいデザインがいいと思います。親しみやすさを重視したいので。」
鈴木「私はもう少しプロっぽさを出すために、ダークモードのような濃いグレーもかっこいいと思いますけどね。」
田中「ターゲット層が一般の社員向けなので、佐藤さんの提案する柔らかい青のほうが親しみやすくて良さそうです。これで進めましょう。」
佐藤「ありがとうございます。では、デザイン案のモックアップを私が来週の木曜日までに作成して共有します。」
鈴木「わかりました。私は開発環境のサーバー準備をしておきます。これは再来週の月曜までに終わらせますね。」
```

AIが出力した議事録の読みやすさを確認します。

## ステップ 2: ToDoリストを抽出する

議事録から、タスク管理ツールにそのまま貼り付けられるようなタスク一覧を抽出させます。

```text
今の内容から、佐藤さんと鈴木さんの「アクションアイテム（ToDo）」を、期限付きのチェックボックス形式のリストで出力してください。
```
