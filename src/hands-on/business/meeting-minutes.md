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
---

## 概要

このハンズオンでは、会議の文字起こしテキスト（またはメモ）をAIに整理させ、見やすく構造化された「議事録」へ変換するテクニックを実践します。

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）
- 会議のメモ書き（以下のサンプルを使用します）

## 実践ステップ

### ステップ 1: 構造化テンプレートを指定して要約させる

以下の指示文（プロンプト）と会議メモをAIに入力して送信します。

> 入力例:
> 以下の会議メモを整理し、以下のフォーマットに沿って構造化された議事録を作成してください。
>
> # フォーマット
> 1. 会議の決定事項（簡潔に）
> 2. 各発言者の主な主張
> 3. 次回までの宿題（担当者と期限）
>
> # 会議メモ
> 参加者：佐藤、鈴木、田中
> 佐藤「新規ウェブサイトのデザインについて。トップページは青を基調にした柔らかいデザインがいいと思います。親しみやすさを重視したいので。」
> 鈴木「私はもう少しプロっぽさを出すために、ダークモードのような濃いグレーもかっこいいと思いますけどね。」
> 田中「ターゲット層が一般の社員向けなので、佐藤さんの提案する柔らかい青のほうが親しみやすくて良さそうです。これで進めましょう。」
> 佐藤「ありがとうございます。では、デザイン案のモックアップを私が来週の木曜日までに作成して共有します。」
> 鈴木「わかりました。私は開発環境のサーバー準備をしておきます。これは再来週の月曜までに終わらせますね。」

AIが出力した議事録の読みやすさを確認します。

### ステップ 2: ToDoリストを抽出する

議事録から、タスク管理ツールにそのまま貼り付けられるようなタスク一覧を抽出させます。

> 入力例:
> 今の内容から、佐藤さんと鈴木さんの「アクションアイテム（ToDo）」を、期限付きのチェックボックス形式のリストで出力してください。

## まとめ

文字起こしデータやメモをAIに整理させることで、会議後のまとめにかかる時間を大幅に短縮できます。出力形式を厳密にテンプレート指定するのがポイントです。
次のステップでは、AIを使った「プロの市場調査・リサーチ手法」について学びましょう。
