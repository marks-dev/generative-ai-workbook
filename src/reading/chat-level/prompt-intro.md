---
layout: content.njk
title: プロンプト入門
description: AIからより良い回答を引き出すための、指示（プロンプト）の基本を学びます。
permalink: /reading/chat-level/prompt-intro/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-chat-level-prompt-intro
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: プロンプト入門
sidebar:
  title: チャットレベル
  items:
    - title: プロンプト入門
      url: /reading/chat-level/prompt-intro/
    - title: プロンプト実践
      url: /reading/chat-level/prompt-practice/
    - title: 業務活用
      url: /reading/chat-level/business-use/
    - title: Deep Research
      url: /reading/chat-level/deep-research/
    - title: AI検索
      url: /reading/chat-level/ai-search/
    - title: カスタムGPT
      url: /reading/chat-level/custom-gpts/
    - title: Projects
      url: /reading/chat-level/projects/
    - title: メモリ
      url: /reading/chat-level/memory/
    - title: ファイル活用
      url: /reading/chat-level/file-utilization/
    - title: 画像活用
      url: /reading/chat-level/image-utilization/
    - title: 音声活用
      url: /reading/chat-level/voice-utilization/
previous: null
next:
  title: プロンプト実践
  url: /reading/chat-level/prompt-practice/
keypoints:
  - AIに対する命令文や指示文のことを「プロンプト」と呼ぶ
  - 期待通りの回答を得るためには、「前提（役割）を与える」「指示を明確にする」「出力形式を指定する」の3つが基本となる
  - 指示の与え方を工夫することで、回答の品質や実用性は劇的に向上する
relatedHandson:
  - title: AIと会話してみよう
    url: /hands-on/getting-started/chat/
---

## 良いプロンプトのための基本ルール

AIは曖昧な指示よりも、具体的で明確な指示を好みます。以下の3つのルールを意識しましょう。

1. **前提（役割）を与える**
   - AIに「あなたは優秀な編集者です」「あなたはプログラミングの先生です」といった役割を与えることで、回答のトーンや質が向上します。
2. **指示を明確にする**
   - 「〜について教えて」ではなく、「〜について、メリットとデメリットをそれぞれ3つ箇条書きで説明してください」のように具体的に指示します。
3. **出力形式を指定する**
   - 「表形式で」「箇条書きで」「小学生にもわかるように」など、回答のフォーマットや対象読者を指定します。
