---
layout: content.njk
title: 要約してみよう
description: 長い文章やニュース記事を、AIを使って簡潔に分かりやすく要約する実践を行います。
permalink: /hands-on/getting-started/summarize/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-summarize
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: はじめての生成AI
    url: /hands-on/getting-started/
  - label: 要約してみよう
sidebar:
  title: はじめての生成AI
  items:
    - title: AIと会話してみよう
      url: /hands-on/getting-started/chat/
      status: 未実施
    - title: 要約してみよう
      url: /hands-on/getting-started/summarize/
      completionId: hands-on-getting-started-summarize
      status: 未実施
    - title: 画像を作ってみよう
      url: /hands-on/getting-started/image/
      status: 未実施
previous:
  title: AIと会話してみよう
  url: /hands-on/getting-started/chat/
next:
  title: 画像を作ってみよう
  url: /hands-on/getting-started/image/
---

## 概要

このハンズオンでは、長文のニュースやレポートなどをAIに渡し、短時間で要点をまとめる「要約（サマライズ）」のテクニックを実践します。

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）
- 要約したい長文テキスト（例として、以下のサンプルテキストを利用します）

## 実践ステップ

### ステップ 1: 標準的な要約指示を出す

以下の指示文（プロンプト）とテキストをチャットAIに入力して送信します。

> **入力例:**
> 以下の文章を、重要なポイントを3つの箇条書きにして、要約してください。
>
> ---
> 【サンプルテキスト：AI技術の進化】
> 近年、生成AIと呼ばれる技術が世界中で急速に普及しています。従来のAIはデータの分析や予測が主流でしたが、生成AIは人間の指示に基づいて新しく文章や画像、音楽などを創り出すことができます。この技術は、企業の事務作業の自動化からクリエイティブなアイデア出しまで、多岐にわたる分野で活用が広がっています。一方で、生成AIが真実とは異なる嘘の情報を出力する「ハルシネーション」の問題や、著作権、個人情報の保護に関する法的な課題も指摘されており、適切なガイドラインに沿った利用が求められています。

AIが指示通り3つの箇条書きでまとめてくれるか確認します。

### ステップ 2: 対象読者を変えてみる

同じテキストに対して、ターゲット読者を変えて再要約させます。

> **入力例:**
> 今要約してくれた内容を、「小学校3年生の子供」にもわかるように、簡単な言葉だけで2文で説明し直してください。

言葉選びがどのように変化するか観察します。

## まとめ

長文の要約をAIに頼むことで、情報収集にかける時間を大きく短縮できます。出力の細かさや表現の難易度を指示でコントロールするのがポイントです。
次のステップでは、言葉からカラフルな「画像」を生成するハンズオンを試してみましょう。
