---
layout: content.njk
title: 表を作ってみよう
description: 雑多な情報から、AIを使って整理された見やすい表（テーブルデータ）を自動生成させます。
permalink: /hands-on/getting-started/table/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-table
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: はじめての生成AI
    url: /hands-on/getting-started/
  - label: 表を作ってみよう
sidebar:
  title: はじめての生成AI
  items:
    - title: AIと会話してみよう
      url: /hands-on/getting-started/chat/
      completionId: hands-on-getting-started-chat
      status: 未実施
    - title: 要約してみよう
      url: /hands-on/getting-started/summarize/
      completionId: hands-on-getting-started-summarize
      status: 未実施
    - title: メールを書いてみよう
      url: /hands-on/getting-started/email/
      completionId: hands-on-getting-started-email
      status: 未実施
    - title: 表を作ってみよう
      url: /hands-on/getting-started/table/
      completionId: hands-on-getting-started-table
      status: 未実施
    - title: 画像を作ってみよう
      url: /hands-on/getting-started/image/
      completionId: hands-on-getting-started-image
      status: 未実施
previous:
  title: メールを書いてみよう
  url: /hands-on/getting-started/email/
next:
  title: 画像を作ってみよう
  url: /hands-on/getting-started/image/
keypoints:
  - AIはテキスト内の不規則な情報を整理し、Markdown等の綺麗なテーブル形式で出力できる
  - 出力された表は、CSV形式やExcelで扱えるタブ区切り値に変換させることも可能
  - 表に必要な列（項目）や並び替えの条件を指定することで、望む形の表を一発で作成できる
relatedHandson:
  - title: 業務で活用するExcel活用
    url: /hands-on/business/excel/
---

## 概要

このハンズオンでは、文章の中に散らばっている複雑な情報を、AIを使って整理された「表（テーブル）」に変換するテクニックを学びます。データの比較や一覧化を行う際に非常に役立ちます。

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）

## 実践ステップ

### ステップ 1: 文章から表を生成する

以下の指示（プロンプト）をチャットAIに入力して送信します。

> 入力例:
> 以下の文章から、「ツール名」「提供企業」「主な特徴」の3つの列を持つ表を作成してください。
>
> ---
> OpenAIが開発したChatGPTは、高度な自然言語処理能力を持ち、対話や要約、文章生成など多岐にわたる用途で世界中で使われています。一方、Googleが提供するGeminiは、検索エンジンとの強力な連携やマルチモーダル機能に強みを持っています。また、Anthropicが開発するClaudeは、高い文章表現力や長文の論理的な処理能力において高い評価を得ています。

AIが自動的にデータを抽出し、Markdownの表形式で出力してくれます。

### ステップ 2: 列を追加・編集する

作成された表に対して、新しい情報を追加するように指示します。

> 入力例:
> 作成してくれた表に、「無料プランの有無」という列を追加してください。また、それぞれのツールが無料で使えるかどうかを調べて反映させてください。

表が更新され、指定した列が追加されたことを確認します。

### ステップ 3: 別のデータ形式（CSVなど）に変換する

作成した表を他のソフトウェアで使いやすくするため、データ形式を変更させます。

> 入力例:
> 今の表のデータを、Excelやスプレッドシートにそのまま貼り付けられる「CSV形式（カンマ区切り）」のテキストとして出力し直してください。

## まとめ

AIを活用することで、手作業で文字をコピペして表を作る手間がなくなります。また、表からCSV形式やその他のデータ形式への変換も一瞬で行えるため、データ整理の効率が飛躍的に向上します。

次のステップでは、言葉からカラフルな「画像」を生成するハンズオンを試してみましょう。
