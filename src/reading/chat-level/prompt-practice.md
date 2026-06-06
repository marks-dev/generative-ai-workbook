---
layout: content.njk
title: プロンプト実践
description: プロンプト入門で学んだ基礎をもとに、より具体的で実用的なプロンプトの設計パターンやテクニックを学びます。
permalink: /reading/chat-level/prompt-practice/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-chat-level-prompt-practice
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: プロンプト実践
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
  title: プロンプト入門
  url: /reading/chat-level/prompt-intro/
next:
  title: 業務活用
  url: /reading/chat-level/business-use/
keypoints:
  - Few-shotプロンプティング（例示の提示）を使うことで、出力フォーマットや表現スタイルをAIに正確に制御できる
  - Chain-of-Thought（思考プロセスの出力）を指示することで、論理的思考が必要な複雑な課題の正解率が向上する
  - プロンプトに前提、役割、入力データ、制約条件を明記して構造化することが、高品質な出力を得るコツである
relatedHandson: []
---

## 実践的なプロンプト設計テクニック

「プロンプト入門」では、AIへの明確な指示や背景情報の重要性を学びました。ここでは、ビジネスや日常生活でAIの出力をさらにコントロールするための、代表的なプロンプト設計パターン（フレームワーク）を解説します。

## 1. Few-shot プロンプティング（例示の提示）

AIに「こういう風に答えてほしい」という手本をいくつか提示してから、実際に答えてほしい問題を指示する手法です。

- **Zero-shot**: 例を与えずに直接指示する（例：「次の文章の感情をポジティブかネガティブで判定して」）
- **Few-shot**: 1つ以上の具体例を与える

> [!NOTE]
> 例示を与えることで、言葉では説明しにくい「文体」「トーン」「フォーマット」をAIに直感的に理解させることができます。

### プロンプト例
```text
ユーザーからの問い合わせを「注文」「技術」「その他」に分類してください。

### 例：
入力: パスワードを忘れてログインできません。
出力: 技術

入力: 注文した商品の発送状況を教えてください。
出力: 注文

### 問題：
入力: アプリの画面が真っ白になって動きません。
出力:
```

## 2. Chain-of-Thought (思考プロセスの書き出し)

AIに「結論だけでなく、途中の考え方もステップ・バイ・ステップで書き出してください」と指示する手法です。これにより、AIが途中の論理ステップを整理しながら回答できるため、計算問題や論理的推論、複雑な意思決定における正解率が劇的に高まります。

### プロンプト例
```text
以下の問題を解決してください。ステップ・バイ・ステップで考えて、途中の計算や論理ステップをすべて書き出してください。

問題：
あるカフェでは昨日、コーヒーが50杯、紅茶が30杯売れました。
コーヒーは1杯400円、紅茶は1杯350円です。
今日は、コーヒーの売上数が昨日より10%増え、紅茶の売上数は20%減りました。
今日の合計売上高はいくらですか？
```

## 3. プロンプトの構造化 (PREP/役割の明確化)

複雑な指示を出す場合は、プレーンな文章で書くのではなく、マークダウン記法（`#` や `-`）を使って情報を整理・構造化すると、AIが指示を誤読しにくくなります。

### 構造化の構成要素
1. **役割（Role）**: 「あなたは優秀なマーケターです」など、AIに前提となるペルソナを与える。
2. **目的（Goal）**: 何を達成したいかを定義する。
3. **制約条件（Constraints）**: 文字数、トーン、使用禁止ワード、出力形式（Markdownの表など）を指定する。
4. **入力データ（Input）**: 処理させる対象のテキストやデータ。
