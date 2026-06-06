---
layout: content.njk
title: 調査・リサーチ
description: AI検索やDeep Researchを活用して、新規事業の調査や競合分析を行うプロの手法を学びます。
permalink: /hands-on/business/research/
pageType: content
difficulty: 中級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-research
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: 調査・リサーチ
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
  title: 議事録作成
  url: /hands-on/business/meeting-minutes/
next:
  title: 企画書作成
  url: /hands-on/business/proposal/
keypoints:
  - 検索機能を持つAIを利用することで、手動ブラウジングに比べ市場調査の時間を大幅に削減する
  - 指定した競合サービスの比較項目（特徴、連携ツール等）を表形式で分かりやすく整理させる
  - SWOT分析を組み合わせて実行させることで、対象サービスの強みや課題の深掘りを行う
relatedHandson:
  - title: AI検索
    url: /reading/chat-level/ai-search/
---

## 準備するもの

- ウェブ検索機能が有効なチャットAIツール（例：ChatGPT Plus以上のSearch機能、または無料のGeminiなど）

## ステップ 1: 競合比較のための検索を実行する

特定の業界のサービスを比較・整理させるプロンプトを入力します。

```text
日本国内で現在注目されている「スマートオフィス・会議室予約システム」を提供する代表的なサービスを3つ調べてください。
以下の項目を含めて、わかりやすく比較表としてまとめてください。
1. サービス名および運営会社
2. 主な特徴
3. 連携可能なツール（Google Calendar, Slack等）
※必ず最新のウェブ情報を検索して、情報のソース（参照URL）を記載してください。
```

AIが検索を行い、最新のサービス情報を表にまとめてくれるのを確認します。

## ステップ 2: SWOT分析（強みと課題）を指示する

抽出されたサービスの中から、特定の1つについてさらに深いビジネス分析を行わせます。

```text
今調べてくれたサービスの中から「最もシェアが高いサービス」を1つ選び、そのサービスのSWOT分析（強み・弱み・機会・脅威）を行ってください。
```
