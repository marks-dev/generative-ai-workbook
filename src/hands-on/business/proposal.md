---
layout: content.njk
title: 企画書作成
description: AIを壁打ち相手にしてアイデアを膨らませ、具体的で説得力のある新規事業やイベントの企画書構成案を組み立てます。
permalink: /hands-on/business/proposal/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-proposal
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: 企画書作成
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
  title: 調査・リサーチ
  url: /hands-on/business/research/
next:
  title: スライド作成
  url: /hands-on/business/slides/
keypoints:
  - 企画書作成の初期段階（アイデア出し）から、構成案の作成までAIと壁打ちしながら進める
  - ターゲット層、提供価値（ベネフィット）、予算、スケジュールなどの基本要素をAIに入力して構造化する
  - プロンプトの指示を具体的にし、出力される文章のトーン＆マナーを指定して編集の手間を減らす
relatedHandson:
  - title: 業務活用
    url: /reading/chat-level/business-use/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. ご自身が利用している任意の対話型AIツール（ChatGPT, Gemini, Claudeのいずれでも構いません。無料プランで実行可能です）
2. 企画したい「大まかなテーマやキーワード」（例：「社内のペーパーレス化を推進するキャンペーン」「新規カフェのコンセプト案」「夏休みの親子向けプログラミングワークショップ」など）

## ステップ 1: アイデアの壁打ちと骨子の作成

まずは、頭の中にある大まかなアイデアをAIに提示し、企画として成り立たせるために不足している要素や、切り口をブレインストーミングします。

AIに以下のプロンプトを入力してください（`[ ]` の中をご自身の企画テーマに書き換えてください）。

```text
私は今、[社内ペーパーレス化推進キャンペーン]という企画を検討しています。
この企画を成功させるために、以下の観点からブレインストーミングを行いたいです。
1. 対象読者（ターゲット）が感じるメリットは何か？
2. 発生しうる障壁（デメリットや懸念）と、その解消案は？
3. 企画に含めるべき主要なコンテンツ（施策案）を3つ

まずは質問をせず、上記に対するあなたのアイデアと提案を出力してください。
```

## ステップ 2: 企画書構成案（アウトライン）の生成

ブレインストーミングで得られたアイデアをベースに、実際の企画書に落とし込める章立て（構成案）を作成します。

AIの返答を確認した上で、続けて以下のプロンプトを入力してください。

```text
ありがとうございます。提案の中で「障壁の解消案」が特に参考になりました。
これをベースにして、上司に提出するための「企画書の構成案（目次と各章の要点）」を作成してください。
以下の構成に沿って、箇条書きで具体的に出力してください。

1. 企画の背景と目的
2. ターゲット層と提供価値
3. 具体的な実施施策（3ステップ）
4. 期待される効果（定量的・定性的な予測）
5. 必要なリソース（予算、期間など）
```

## ステップ 3: 企画書の本文とキャッチコピーの肉付け

構成案が完成したら、プレゼン資料や文書にそのまま貼り付けて使用できる「提案理由」や、人目を引く「企画のキャッチコピー」を生成させます。

続けて以下のプロンプトを入力してください。

```text
この企画書で最もアピールしたい「1. 企画の背景と目的」の文章を、ビジネス向けに説得力のある柔らかいトーンで、300文字程度で清書してください。
また、社内のポスターや案内メールに使えるキャッチコピーの候補を、切り口を変えて5つ提案してください。
```
