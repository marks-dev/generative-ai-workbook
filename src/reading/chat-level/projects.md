---
layout: content.njk
title: Projects
description: Claudeで複数のチャット間で共通のコンテキスト（指示、ファイル）を維持し、長期的なプロジェクトワークを効率化する「Projects」機能について学びます。
permalink: /reading/chat-level/projects/
pageType: content
difficulty: 初級
plan: Free
service:
  - Claude
completionId: reading-chat-level-projects
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: Projects
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
previous:
  title: カスタムGPT
  url: /reading/chat-level/custom-gpts/
next:
  title: メモリ
  url: /reading/chat-level/memory/
keypoints:
  - Projects（プロジェクト）は、Claude (Anthropic) の有料プランで提供される、特定の作業に特化した共有スペース機能
  - そのプロジェクトに紐づくすべての新しいチャットに対して、共通のカスタム指示とナレッジファイルを適用できる
  - ChatGPTの「GPTs」と類似しているが、Projectsは「作業フォルダ」に近く、チーム内でのコラボレーションや動的な資料追加がしやすい
relatedHandson: []
---

## Projects（プロジェクト）とは？

Claudeの有料プラン（Pro/Team）で利用できる**Projects**は、特定の仕事やテーマ（例：「新製品のマーケティングキャンペーン」「特定のソフトウェアの開発」「四半期報告書の作成」など）ごとに、専用のワークスペースを作成できる機能です。

通常、新しいチャット（スレッド）を開くと、それまでにアップロードしたファイルや前提となる文脈はリセットされます。しかし、Projects機能を使えば、そのプロジェクト内であれば何度新しいチャットを開いても、常に同じファイルと前提指示を維持した状態で会話をスタートできます。

## Projectsを構成する主な機能

### 1. カスタム指示 (Custom Instructions)
そのプロジェクト内でのClaudeの振る舞い方を設定します。「出力するすべてのコードにはJSDocを書いてください」や「常に当社のブランドガイドラインに沿った柔らかいトーンで文章を作成してください」など、共通の前提ルールを記述します。

### 2. プロジェクトナレッジ (Project Knowledge)
プロジェクトの共通資料として、テキストファイル、PDF、ソースコード、マークダウンなどをアップロードしておきます。
Claudeの大きなコンテキストウィンドウ（一度に処理できる情報量）を活かし、大量の参考資料をプロジェクト全体に記憶させておくことができます。

### 3. コラボレーションと共有（Teamプランのみ）
Teamプランでは、プロジェクトをチームメンバーと共有し、同じナレッジファイルをベースにして一緒に作業を進めることができます。

## ChatGPTの「GPTs」とClaudeの「Projects」の比較

どちらもAIを特定の用途にカスタマイズする機能ですが、設計思想に若干の違いがあります。

| 比較項目 | GPTs (ChatGPT) | Projects (Claude) |
| :--- | :--- | :--- |
| **主な目的** | 「汎用ツール」「アプリ」の構築と配布 | 「特定のプロジェクト」「フォルダ」単位での作業効率化 |
| **ファイル管理** | 設定画面から管理者がアップロードする | チャット画面からその都度ファイルを追加・更新しやすい |
| **外部システム連携** | Actions機能によるAPI連携が可能 | 基本的にAPI連携機能はない（コンテキスト特化） |

> [!NOTE]
> ClaudeのProjectsは、アップロードしたファイル（ナレッジ）の一覧が画面右側に整理されて見えるため、まるで「AIが常駐している共有フォルダ」のような感覚で、動的に資料を追加・削除しながら長期的なタスクをこなすのに非常に向いています。
