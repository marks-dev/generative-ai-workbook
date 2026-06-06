---
layout: content.njk
title: LLMの仕組み
description: 大規模言語モデル（LLM）の基本的な定義、Transformerアーキテクチャの役割、そしてなぜAIが自然な会話を行えるのかを解説します。
permalink: /reading/fundamentals/llm-mechanism/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-llm-mechanism
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: LLMの仕組み
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
  title: 生成AIの仕組み
  url: /reading/fundamentals/generative-ai-mechanism/
next:
  title: 生成AIツール比較
  url: /reading/fundamentals/ai-tools-comparison/
keypoints:
  - LLM（大規模言語モデル）は、膨大なテキストデータから人間の言語パターンを学習したAIモデル
  - 技術的なブレイクスルーとなったのが「Transformer」アーキテクチャと「Self-Attention（自己注意）」機構
  - 「事前学習」の後に「インストラクションチューニング（微調整）」と「人間のフィードバックによる強化学習（RLHF）」を経て対話型AIとなる
relatedHandson: []
---

## LLM（大規模言語モデル）とは

LLMは「**Large Language Model**」の略で、日本語では「**大規模言語モデル**」と呼ばれます。
人間が使う自然な言葉（自然言語）のパターンや意味、文脈を理解し、高度な文章生成や翻訳、質問応答などを行うことができるニューラルネットワークをベースとした巨大なAIモデルです。

「大規模」と呼ばれる理由は、AIモデルに含まれるパラメータ数（脳の神経細胞のつながりに相当する調整値）と、学習に使われるデータ量が極めて膨大であるためです。

## LLMの基盤となった「Transformer」

現代のLLMのほぼすべては、2017年にGoogleの研究者らによって発表された「**Transformer（トランスフォーマー）**」という画期的なニューラルネットワーク構成（アーキテクチャ）に基づいています。

それ以前の言語AIと比べて、Transformerは以下の大きな特徴を持っています。

### 1. 並列処理の実現
以前の技術（RNNなど）は、文章を左から右へ一文字（一単語）ずつ順番に読み込む必要があり、処理に長い時間がかかっていました。Transformerは文章全体を同時に読み込んで並列に処理できるため、学習速度が飛躍的に向上し、より膨大なデータを学習できるようになりました。

### 2. Self-Attention（自己注意）機構
文章の中の各単語が、他のどの単語と深く関連しているかを計算する仕組みです。

- 例えば、「犬が追いかけた猫は、その**彼**の足元にうずくまった」という文章における「彼」が、「犬」と「猫」のどちらを指すのかを前後の文脈から高精度に判断できます。

## LLMが「チャットAI」になるまでの3ステップ

私たちが普段使っているChatGPTやGeminiなどのチャット型AIは、最初から会話ができる状態だったわけではありません。大きく分けて以下の3つの段階を経て開発されます。

### ステップ 1：事前学習 (Pre-training)
インターネット上の膨大なテキストを読み込み、「ある文章に続く次の単語を予測する能力」を鍛えます。この段階のモデルは「基盤モデル」と呼ばれ、知識は豊富ですが、質問に答えたり指示に従ったりするのはまだ得意ではありません。

### ステップ 2：指示学習 (Instruction Tuning)
「質問と回答」のペアになった高品質なデータを追加で学習（微調整：ファインチューニング）させます。これにより、AIは「ユーザーの指示に従って的確な返答をする」という対話のルールを身につけます。

### ステップ 3：人間のフィードバックによる強化学習 (RLHF)
AIの複数の回答候補を人間が評価し、「より安全で、役に立ち、偏見のない回答」を優先して出力するようにAIを訓練します。

> [!IMPORTANT]
> このRLHF（Reinforcement Learning from Human Feedback）によって、AIのハルシネーション（嘘）や暴言などの不適切な出力を抑え、私たちが使いやすい親切で安全なアシスタントとしての性格が形作られます。
