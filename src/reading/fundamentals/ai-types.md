---
layout: content.njk
title: AIの種類
description: 特化型AIと汎用型AIの違いや、ルールベースと機械学習の違いなどを学びます。
permalink: /reading/fundamentals/ai-types/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-ai-types
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: AIの種類
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
  title: AIの歴史
  url: /reading/fundamentals/ai-history/
next:
  title: 生成AIの仕組み
  url: /reading/fundamentals/generative-ai-mechanism/
keypoints:
  - 囲碁AIのように特定の作業を専門に行う「特化型AI」と、人間のように多様なタスクをこなす「汎用型AI」がある
  - 人間が記述したルールに従って処理する「ルールベース」に対し、「機械学習」はデータから自律的にルールを学習する
  - 現代の実用的なAIの多くは特化型AIであり、機械学習（深層学習）の手法が主流となっている
relatedHandson: []
---

## 役割による分類：特化型と汎用型

AIはその「得意分野の広さ」によって、大きく2つに分けられます。

1. **特化型AI (Narrow AI)**
   - 特定の作業だけを専門に行うAIです。
   - 例：囲碁や将棋を指すAI、自動運転の制御システム、お掃除ロボットの経路探索など。
   - 現代の実用化されているAIのほとんどがこの「特化型」です。
2. **汎用型AI (AGI - Artificial General Intelligence)**
   - 人間と同じように、さまざまな分野の作業を自分で考えて学習し、実行できるAIです。
   - 映画に出てくるような「自分で考えるロボット」に近いイメージです。
   - 現在も研究が続けられており、完全な汎用型AIはまだ実現していません。

## 仕組みによる分類：ルールベースと機械学習

AIの動かし方（頭の良さの作り方）にも大きな違いがあります。

1. **ルールベースAI**
   - 人間があらかじめ「もしAならBしなさい」というルールを細かく書き込んでおく方式です。
   - 例：自動販売機のコイン判別、スマートフォンのシンプルな応答など。
2. **機械学習 (Machine Learning)**
   - 大量のデータを与えて、コンピューター自身にパターンやルールを発見させる方式です。
   - 例：画像に写っている動物が「犬か猫か」を判定する、迷惑メールの自動選別など。
   - 近年のAIの主流は、この機械学習（およびその発展である深層学習）です。
