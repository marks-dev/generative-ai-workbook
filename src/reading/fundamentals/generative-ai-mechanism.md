---
layout: content.njk
title: 生成AIの仕組み
description: 従来のAIと生成AIの違いや、生成AIがどのようにデータから新しいコンテンツを作り出すのか、その基本原理を学びます。
permalink: /reading/fundamentals/generative-ai-mechanism/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-generative-ai-mechanism
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: 生成AIの仕組み
sidebar:
  title: 基礎
  items:
    - title: AIとは
      url: /reading/fundamentals/what-is-ai/
    - title: AIの歴史
      url: /reading/fundamentals/ai-history/
    - title: AIの種類
      url: /reading/fundamentals/ai-types/
    - title: 生成AIの仕組み
      url: /reading/fundamentals/generative-ai-mechanism/
    - title: LLMの仕組み
      url: /reading/fundamentals/llm-mechanism/
    - title: 生成AIツール比較
      url: /reading/fundamentals/ai-tools-comparison/
    - title: マルチモーダルAI
      url: /reading/fundamentals/multimodal-ai/
    - title: ローカルLLMとは
      url: /reading/fundamentals/what-is-local-llm/
    - title: AI利用時の注意点
      url: /reading/fundamentals/ai-precautions/
    - title: AI評価と検証
      url: /reading/fundamentals/ai-evaluation/
    - title: AIガバナンス
      url: /reading/fundamentals/ai-governance/
    - title: AI倫理
      url: /reading/fundamentals/ai-ethics/
    - title: AI法規制
      url: /reading/fundamentals/ai-regulations/
previous:
  title: AIの種類
  url: /reading/fundamentals/ai-types/
next:
  title: LLMの仕組み
  url: /reading/fundamentals/llm-mechanism/
keypoints:
  - 従来のAIは「識別・予測」を行うのに対し、生成AIは新しい「コンテンツの創造」を行う
  - 膨大な学習データを元に、確率やパターンを計算して次に続く最適な情報を推測して出力する
  - 生成AIが自律的な意識を持って考えているわけではなく、高度な確率計算の結果である
relatedHandson: []
---

## 従来のAIと生成AIの違い

従来のAIと生成AI（ジェネレーティブAI）の最も大きな違いは、その「出力結果」にあります。

- **従来のAI (識別・予測型AI)**
  - 与えられたデータが何かを「見分ける（識別）」ことや、過去のデータから数値を「予測する」ことが得意です。
  - 例：メールが迷惑メールか判定する、来月の売上を予測する、画像に写っているのが「猫」であると識別する。
- **生成AI (ジェネレーティブAI)**
  - 与えられた指示（プロンプト）に応じて、テキスト、画像、音楽、プログラムコードなどを「新しく作り出す（生成）」ことができます。
  - 例：指示したテーマに沿って小説を書く、新しいロゴデザインを描く、プログラムのバグを修正するコードを作る。

## 生成AIが新しいコンテンツを作る仕組み

生成AIは、ゼロから魔法のようにコンテンツを生み出しているわけではありません。その裏側では、高度な数学と確率の計算が行われています。

### 1. 膨大なデータを用いた「事前学習」
生成AIは、インターネット上のウェブサイト、書籍、論文、ソースコードなどの膨大なテキストデータをあらかじめ読み込み、学習しています。これを「事前学習」と呼びます。

### 2. パターンと関係性の理解
学習の過程で、AIは「どの単語の次に、どの単語が来やすいか」という言葉のつながりやパターンの統計的な関係性を分析し、記憶します。

- 例えば、「犬が」という言葉の次には「吠える」「走る」などが来やすく、「飛ぶ」「歌う」は来にくい、といった確率的なつながりを深く学習します。

### 3. 指示に基づく確率的な出力
ユーザーがプロンプトを入力すると、AIはそれまでの文脈を分析し、「次に続く確率が最も高い言葉」を一つずつ計算して出力します。

> [!NOTE]
> 生成AIの文章生成は、「確率的に最もそれらしい言葉を順番につなげていく作業」です。AIは私たちが書く文章の意味や現実世界の常識を「人間と同じように理解して納得している」わけではなく、統計的な確率計算に基づいて出力を行っています。

## 生成AIの仕組みを理解する重要性

この確率的な仕組みを理解しておくことは、AIを正しく使いこなす上で非常に重要です。

- **「嘘（ハルシネーション）」をつく理由**
  - AIは「正しい情報」を検索して答えているのではなく、「確率的に最もそれらしい文章」を作っています。そのため、事実とは異なる情報をさも正しいことのように出力してしまうことがあります。
- **毎回異なる回答が返ってくる理由**
  - 出力時に少しのランダム性（確率のゆらぎ）を持たせることで、同じプロンプトでも毎回少しずつ異なる表現やアイデアを出力できるように設計されています。これにより、クリエイティブな提案が可能になります。
