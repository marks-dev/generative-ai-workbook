---
layout: content.njk
title: AIと会話してみよう
description: チャットAI（ChatGPT, Gemini, Claudeなど）を使って会話をしながら、質問の仕方や基本的な応答のやり取りを体験します。対話を重ねることでよりパーソナライズされた回答を引き出すプロセスを学びましょう。
permalink: /hands-on/getting-started/chat/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-chat
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: はじめての生成AI
    url: /hands-on/getting-started/
  - label: AIと会話してみよう
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
keypoints:
  - チャットAIは「一問一答」ではなく、「対話（会話を重ねること）」を前提に設計されている
  - AIは過去の会話の流れ（コンテキスト）を記憶しているため、前の話題を前提とした深掘りの質問が可能
  - 「役割（ペルソナ）」を指示することで、回答の口調や専門性のトーンを自在に変更させられる
relatedHandson:
  - title: プロンプトの基本概念と活用法
    url: /reading/chat-level/prompt-intro/
---

## 準備

いずれかのチャットAIツールのアカウントを作成しておきましょう（すべて無料プランで体験できます）。

- **ChatGPT (OpenAI)**: [https://chatgpt.com/](https://chatgpt.com/)
- **Gemini (Google)**: [https://gemini.google.com/](https://gemini.google.com/)
- **Claude (Anthropic)**: [https://claude.ai/](https://claude.ai/)

## ステップ 1: 自己紹介と雑談

AIツールを開き、最初のメッセージを送ってみましょう。以下のプロンプトをコピーして貼り付けると簡単です。

```text
こんにちは！私の名前は太郎です。生成AIの勉強を始めたばかりなのですが、応援のメッセージをもらえますか？
```

送信後、AIが歓迎して応援してくれる反応を確認しましょう。

## ステップ 2: 質問を深掘りする

AIの返答に対して、さらに質問を重ねます。チャットAIはこれまでの会話の流れを記憶しています。

```text
ありがとう！まずはどんなことから勉強を始めるといいでしょうか？初心者向けのステップを3つ提案してください。
```

AIが対話の流れを汲んで、初心者向けの具体的な3ステップを提案してくれます。

## ステップ 3: 役割（ペルソナ）を指定する

AIにキャラクターになりきってもらい、回答の口調やトーンを劇的に変化させてみます。

```text
今提案してくれたステップを、ファンタジー世界の頼れる魔法使いの口調で、熱く説明し直してください！
```

口調が変わるだけで、AIのパーソナリティが変わり、親しみやすさが増す体験を確認します。
