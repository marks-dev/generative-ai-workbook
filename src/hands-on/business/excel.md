---
layout: content.njk
title: Excel活用
description: 複雑な数式の作成やデータ分析、VBA・Pythonマクロの記述をAIに支援してもらう方法を練習します。
permalink: /hands-on/business/excel/
pageType: content
difficulty: 中級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-excel
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: Excel活用
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
previous:
  title: スライド作成
  url: /hands-on/business/slides/
next:
  title: 業務効率化
  url: /hands-on/business/efficiency/
---

## 概要

このハンズオンでは、Excel（エクセル）やGoogleスプレッドシートの関数が思い出せないときや、複雑な集計を行いたいときに、AIを使って正しい数式やマクロのコードを生成させる方法を体験します。

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）
- Excelやスプレッドシートが手元にあれば、作成された数式を実際に貼り付けて動かすとより学習効果が高まります。

## 実践ステップ

### ステップ 1: 複雑なVLOOKUPやXLOOKUPの関数を作らせる

「やりたいこと」を自然な日本語で説明して、正しい関数を生成させます。

> 入力例:
> Excelで関数を作りたいです。
> 「シートAのA列にある商品ID」を使って、「シートBのA列からG列のデータ」の中から完全に一致する行を探し、「その行のD列にある価格」を取得して表示したいです。最もおすすめの関数（例：XLOOKUPなど）の書き方を、セルの指定例も含めて教えてください。

AIが `XLOOKUP` などの数式の書き方と解説を出力してくれます。

### ステップ 2: 業務を自動化するマクロ（VBA）を作らせる

ボタン一つでデータを処理する簡単なExcelマクロ（VBA）を記述させます。

> 入力例:
> ExcelのVBAマクロを作成したいです。
> 「ボタンを押すと、アクティブなシートのA列にあるセルのうち、空欄（空白）の行を丸ごと削除する」というマクロのVBAコードを書いてください。コードの貼り付け方や実行手順も初心者にわかりやすく説明してください。

## まとめ

Excelの関数やVBAは、AIの得意分野の一つです。やりたい処理を口頭で指示するように書くだけで、専門書を調べることなく目的の関数やコードが手に入ります。
これで「仕事で活用する」カテゴリのすべてのハンズオンは完了です！
