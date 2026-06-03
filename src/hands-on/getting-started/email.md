---
layout: content.njk
title: メールを書いてみよう
description: 送信相手や状況に合わせた、分かりやすく丁寧なビジネスメールをAIと作成します。
permalink: /hands-on/getting-started/email/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-email
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: はじめての生成AI
    url: /hands-on/getting-started/
  - label: メールを書いてみよう
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
  title: 要約してみよう
  url: /hands-on/getting-started/summarize/
next:
  title: 表を作ってみよう
  url: /hands-on/getting-started/table/
keypoints:
  - 送信相手や目的、盛り込むべき要点を明確に伝えることで、適切なトーンのメールが作成できる
  - メールの文面は、状況や指示によって丁寧さの度合いや長さを柔軟に変更可能
  - 出力された文面をそのまま送信せず、必ず人間の目で不自然な点がないか最終チェックを行う
relatedHandson:
  - title: 業務に使えるプロンプト実践
    url: /reading/chat-level/prompt-practice/
---

## 概要

このハンズオンでは、ビジネスや日常でよく使うメールの作成をAIにサポートしてもらう手順を学びます。要点を箇条書きで伝えるだけで、礼儀正しく分かりやすいメール文面をあっという間に組み立てることができます。

## 準備するもの

- いずれかのチャットAIツール（無料プランで可）

## 実践ステップ

### ステップ 1: 要点からメール文面を自動生成する

以下の指示（プロンプト）をチャットAIに入力して送信します。

> 入力例:
> 以下の要点をもとに、取引先の山田様に対して、ミーティング日程調整のお願いをする丁寧なメールを作成してください。
>
> 要点：
> - 新プロジェクトの初回の打ち合わせを行いたい
> - 候補日時は、来週月曜の14時以降、または水曜の午前中
> - 場所はオンライン（Google Meet）を希望

AIがビジネスメールとして適切な件名、宛先、挨拶、本文、結びを自動生成してくれます。

### ステップ 2: 状況に合わせてトーンを変更する

生成されたメールをもとに、トーンや長さを変更させます。例えば、もう少しカジュアルなトーンに変えてみましょう。

> 入力例:
> 今作成してくれたメールを、もう少しフランクなトーン（例えば、同じ部署の同僚に送るような文面）に書き直してください。

言葉遣いやマナー表現が送信相手に応じてどのように変化するか観察してください。

### ステップ 3: 謝罪やお詫びのメールを作成する

今度は、少し難しい「お詫び」のメールを作成させてみます。

> 入力例:
> 急用により、明日の予定していたミーティングの時間を1時間遅らせてほしいというお詫びのメールを作成してください。相手は取引先の佐藤様です。

## まとめ

メール作成をAIに任せることで、どのように書き出せばよいか迷う時間を劇的に削減できます。ただし、AIが作成したメールは、事実関係やトーンが適切か送信前に必ず**人間の目で最終確認**するようにしましょう。

次のステップでは、整理されていないデータから見やすい「表」を作成するハンズオンを試してみましょう。
