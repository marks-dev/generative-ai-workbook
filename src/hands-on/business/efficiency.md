---
layout: content.njk
title: 業務効率化
description: 自分の日常業務の中でAIを組み込めるタスクを洗い出し、プロンプトのテンプレート化や自動化のアイデアを整理するワークを行います。
permalink: /hands-on/business/efficiency/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-efficiency
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: 業務効率化
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
  title: Excel活用
  url: /hands-on/business/excel/
next:
  title: 複数AI比較
  url: /hands-on/business/comparison/
keypoints:
  - 日常業務のタスクを分解し、AIの「得意タスク」にマッピングして自動化候補を洗い出す
  - 頻繁に発生する定型タスク（メール返信、日報作成等）に対して、使い回せる「マイプロンプト（テンプレート）」を作成する
  - 洗い出したタスクに対して、AIを使って時間の削減効果と難易度（マトリクス）を自己評価する
relatedHandson:
  - title: 業務活用
    url: /reading/chat-level/business-use/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. 任意の対話型AIツール（ChatGPT, Gemini, Claudeのいずれか）
2. メモ用のアプリ（メモ帳、Notionなど）またはノートとペン
3. ご自身の「1日の大まかな業務スケジュールの振り返り」（例：午前中はメール返信とデータ入力、午後は企画会議と資料作成など）

## ステップ 1: 日常業務の洗い出しとAI適用判断

自分の1週間または1日の業務プロセスを書き出し、どのタスクにAIが使えるかをAIと一緒に分類します。

AIに以下のプロンプトを入力してください。

```text
私は自身の日常業務を生成AIを使って効率化したいと考えています。
私の主な業務は以下の通りです。
---
[・クライアントからのメール返信
・週次データのExcel集計とレポート作成
・新規案件のブレインストーミングと企画書作成
・定例会議の議事録作成とタスク割り振りの連絡
・社内ブログ記事の執筆]
---

これらのタスクについて、以下の観点からAIの活用可能性を分析し、表形式で整理してください。
1. AIの得意・不得意（◎, 〇, △）
2. AIを導入した際の具体的な活用イメージ
3. 想定される時間削減効果（大・中・小）
```

## ステップ 2: 「マイプロンプト（定型テンプレート）」の作成

洗い出したタスクの中から、毎日または毎週発生する「定型業務（例：メール返信や週次レポート）」を選び、今後いつでも使い回せる専用のプロンプトテンプレートをAIに作成させます。

AIの返答を確認した上で、続けて以下のプロンプトを入力してください。

```text
ありがとうございます。まずは「クライアントからのメール返信」と「定例会議の議事録作成と連絡」を効率化したいです。
これら2つのタスクについて、私が今後コピペして毎回使えるような「穴埋め式のプロンプトテンプレート」を作成してください。
テンプレートは、変数部分を `[ここにメール本文を貼る]` などのように分かりやすくしておいてください。
```

## ステップ 3: 効率化ロードマップの作成

最後に、洗い出したすべてのタスクに対して、時間の削減効果と導入の難易度（2軸）をもとに、どのタスクから段階的にAIを導入していくべきか優先順位（ロードマップ）をまとめます。

AIに以下のプロンプトを入力してください。

```text
作成したプロンプトを活用しつつ、明日から段階的にAI業務効率化を始めるための「4週間の実践ロードマップ」を作成してください。
1週目、2週目、3週目、4週目にそれぞれ取り組むべきテーマと、達成目標（ゴール）を1行ずつシンプルに提示してください。
```
