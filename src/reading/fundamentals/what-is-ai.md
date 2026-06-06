---
layout: content.njk
title: AIとは
description: 人工知能（AI）の基本的な定義や、私たちの身の回りにあるAIについて学びます。日常生活やビジネスの中でAIがどのように役割を果たしているかを優しく紐解きます。
permalink: /reading/fundamentals/what-is-ai/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-what-is-ai
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: AIとは
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
next:
  title: AIの歴史
  url: /reading/fundamentals/ai-history/
keypoints:
  - AI（Artificial Intelligence）は、人間の知的能力（学習・推論・判断など）をコンピューター上で再現する技術
  - 音声アシスタントやおすすめ機能、自動翻訳など、すでに日常生活やビジネスの至る所に溶け込んでいる
  - AIは人間の代わりになるものではなく、私たちの能力を拡張し、作業を効率化する強力なパートナーである
relatedHandson:
  - title: AIと会話してみよう
    url: /hands-on/getting-started/chat/
---

## 人工知能（AI）の基本定義

AIは「**Artificial Intelligence**」の略で、日本語では「**人工知能**」と訳されます。人間が行う知的な活動（学習する、推論する、判断するなど）を、コンピューターやソフトウェアを使って再現する技術のことを指します。

> [!NOTE]
> AIの学術的な定義は、専門家の間でも多様であり、完全に一つの統一された定義はありません。一般的には「人間のように学習し、柔軟に思考や判断を行うプログラム全般」を広く指す言葉として使われています。

## 私たちの身の回りにあるAI

日常生活の中には、すでに多くのAI技術が溶け込んでおり、私たちは意識せずにその恩恵を受けています。

- **スマートフォンの音声アシスタント**: 音声から言葉の意味を認識・理解し、操作をサポートします。
- **レコメンデーション（おすすめ機能）**: 動画配信サイトやショッピングサイトで、個人の好みに合うコンテンツや商品を提案します。
- **自動翻訳ツール**: 外国語の文章を文脈に合わせて自然な日本語に変換します。
- **地図・ナビゲーション**: リアルタイムの交通状況や過去のデータを分析し、最適なルートを算出します。

## ビジネスにおけるAIの役割

ビジネスシーンにおけるAIは、これまでの単なる自動化ツールを超えて、人間の業務プロセスを高度化する役割を担っています。

- **ドキュメント作成の支援**: レポートの要約、メールの下書き作成、アイデア出しなどを迅速に行います。
- **データ分析と予測**: 膨大な販売実績や顧客データからトレンドを割り出し、需要予測や意思決定をサポートします。
- **カスタマーサポートの自動化**: AIチャットボットが問い合わせに24時間いつでも自動で対応し、顧客対応を効率化します。

## AIが得意なこと・苦手なこと

AIは非常に強力な技術ですが、すべてのことを完璧にこなせるわけではありません。その特性を正しく理解し、人間とどのように協調していくかが重要です。

### 得意なこと
- 大量のデータから規則性やパターンを高速に見つけ出すこと（画像認識、異常検知など）
- 定義されたルールやデータに基づき、単純な繰り返し作業を正確に行うこと
- 膨大なテキストデータから要約や文章を作成・提案すること（生成AIの領域）

### 苦手なこと
- 相手の感情やその場の「常識・文脈」を完全に理解し、空気を読んだ対応をすること
- 前例が全くない状況での創造的な意思決定や、抽象的な倫理・倫理的判断
- 身体を通じた現実世界での複雑な物理的操作（ロボティクスとの融合がない単体のソフトウェアAI）

> [!IMPORTANT]
> AIは過去のデータから学習するため、データそのものに偏りがある場合、不公平または差別的な判断を出力してしまうリスクがあります。これを「AIのバイアス（偏り）」と呼びます。利用する際には、AIの出力を鵜呑みにせず、最終的に人間が責任を持ってチェックを行う必要があります。

## 基本的なAI用語の関係性

AIの学習を進める中で、「AI」「機械学習」「深層学習」「生成AI」といった言葉をよく耳にすると思います。これらは個別の技術ではなく、以下のように包含関係（入れ子構造）になっています。

1. **AI（人工知能）**
   - 人間の知的な振る舞いを模倣する技術全般を指す最も広い概念です。
2. **機械学習（マシンラーニング）**
   - AIの一分野です。人間がすべてのルールを書くのではなく、コンピューターに大量のデータを与えて、データから自律的にパターンやルールを学習させる技術です。
3. **深層学習（ディープラーニング）**
   - 機械学習をさらに発展させた技術です。人間の脳の神経回路（ニューラルネットワーク）を模した仕組みを使い、人間が注目すべき特徴を指示しなくても、AI自身がデータから複雑な特徴を段階的に深く学習します。
4. **生成AI（ジェネレーティブAI）**
   - 深層学習の発展により生まれたAIです。従来の「予測」や「分類」だけでなく、指示文（プロンプト）に応じて、文章、画像、音楽、プログラムコードなどを新しく「作り出す（生成する）」ことができます。

## 参考動画で学ぶ

AIの全体像を視覚的に理解するために、以下の参考動画が役立ちます。

> [!NOTE]
> 本件に関連した、公開されているYouTube動画のURLを参考までに掲載します。リンク切れがあった場合、お手数ですが本ワークブック管理者までお知らせください。

[外部動画リンク：AIの基本概念について (YouTube)](https://www.youtube.com/watch?v=zjkBMFhNj_g)
