---
layout: content.njk
title: カスタムGPT
description: プログラミングの知識なしに、特定の目的に特化した独自の対話型AIを作成・共有できる「GPTs（カスタムGPT）」の仕組みと作成方法を学びます。
permalink: /reading/chat-level/custom-gpts/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-chat-level-custom-gpts
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: カスタムGPT
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
  title: AI検索
  url: /reading/chat-level/ai-search/
next:
  title: Projects
  url: /reading/chat-level/projects/
keypoints:
  - GPTs（カスタムGPT）は、独自の指示（Instructions）、追加データ（Knowledge）、API連携（Actions）を備えた専用ChatGPT
  - コードを1行も書くことなく、自然言語で「GPT Builder」と会話するだけで簡単に作成・調整できる
  - 作成したカスタムGPTは、リンク共有や「GPT Store」を通じて世界中のユーザーや組織内に限定公開できる
relatedHandson: []
---

## カスタムGPT（GPTs）とは？

通常のChatGPTは、ユーザーのあらゆる質問に答える汎用的なAIですが、毎回同じような前提情報やトーンを指定するのは手間がかかります。

**GPTs（カスタムGPT）**は、特定の目的や業務（例：「自社のブログ下書き作成用」「自社の旅費規程に関するQ&A用」など）に特化させ、あらかじめ指示やデータを組み込んでカスタマイズした「専用のChatGPT」を作ることができる機能です。

## カスタムGPTを構成する3つの要素

カスタムGPTは、以下の3つの設定要素を組み合わせることで構築されます。

### 1. 指示 (Instructions)
AIの役割、トーン、出力フォーマットなどを定義するプロンプト。これは通常のプロンプトと同様ですが、システムプロンプト（システム全体の前提ルール）として裏側に固定されます。

### 2. 知識 (Knowledge / ナレッジファイルのアップロード)
PDF、Word、CSV、テキストファイルなどを最大20個までアップロードし、AI専用の「知識ベース」として持たせることができます。
AIはユーザーから質問された際、まずこのアップロードされたファイル群を検索し、その中の情報を優先して回答を作成します（簡易的なRAG：検索拡張生成が実現します）。

### 3. アクション (Actions / 外部API連携)
外部のWebサービス（Slack、Googleカレンダー、天気予報APIなど）と接続し、AI経由でメールを送信したり、スケジュールを登録したりする処理（API連携）を設定できます。

## 作成の流れ

カスタムGPTは、ChatGPTのメニュー内にある「Create a GPT（または Explore GPTs > Create）」から作成を開始します。

1. **GPT Builderと会話して作成する (Createモード)**:
   - 「IT用語を優しく解説するボットを作って」と英語または日本語でAIに話しかけると、AIが自動的に名前、アイコン、基本指示（Instructions）を設定してくれます。
2. **手動で詳細設定をする (Configureモード)**:
   - 名前や説明の変更、知識（Knowledge）となるファイルのアップロード、Web検索や画像生成（DALL-E 3）の有効化/無効化、プロンプトスターター（最初の質問の選択肢）の追加を手動で行います。
3. **プレビューと公開**:
   - 画面の右側にあるプレビュー窓でテスト動作を行い、問題がなければ右上から「自分のみ」「リンクを知っている人全員」「公開（GPT Storeへの掲載）」「組織内の全員」などを選択して保存・公開します。

> [!IMPORTANT]
> **知識（Knowledge）ファイルに関するセキュリティ注意点**：
> カスタムGPTにアップロードしたファイルの内容は、ユーザーが巧みなプロンプト（プロンプトインジェクションなど）を使うことで、「ファイルをダウンロードさせる」あるいは「中身をそのまま出力させる」ことが可能です。そのため、一般公開するカスタムGPTのKnowledgeには、社外秘や個人情報などの機密情報を含むファイルを絶対にアップロードしないでください。
