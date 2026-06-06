---
layout: content.njk
title: メモリ
description: AIがチャット履歴をまたいでユーザーの好み、役割、過去のやり取りなどの情報を自動で記憶し、次回以降の対話をパーソナライズする「メモリ」機能について学びます。
permalink: /reading/chat-level/memory/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
completionId: reading-chat-level-memory
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: メモリ
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
  title: Projects
  url: /reading/chat-level/projects/
next:
  title: ファイル活用
  url: /reading/chat-level/file-utilization/
keypoints:
  - メモリ（Memory）機能は、新しいチャットスレッドを開いてもユーザーに関する情報を長期記憶として維持する機能
  - ユーザーが明示的に「これを覚えておいて」と指示するか、AIが会話から重要な事実を自動検出して記憶する
  - 記憶された内容は設定からいつでも一覧表示して削除・修正することができ、コントロールが可能
relatedHandson: []
---

## メモリ（記憶）機能とは？

これまでのチャットAIは、別々のチャットスレッド間での「記憶の共有」ができませんでした。例えば、あるスレッドで「私はJavaScriptの初心者です」と伝えても、別スレッドでプログラミングの質問をすると、再び初心者であることを説明する必要がありました。

ChatGPTの**メモリ機能（Memory）**は、スレッドをまたいでユーザーに関する重要な事実や好み、背景情報を永続的に記録・保持する機能です。これにより、チャットを重ねるほどAIが個々のユーザーに最適化（パーソナライズ）されていきます。

## メモリ機能の使われ方と動作

メモリへの書き込みには、以下の2つの方法があります。

1. **自動的な記憶**:
   - 会話の中で「来週から新しいマーケティングチームに異動するんだ」や「普段はMacを使っています」といった情報が入力されると、AIが自動的に「これは覚えておく価値がある」と判断し、バックグラウンドで記憶します。記憶した際には画面に「Memory updated（記憶を更新しました）」と小さく表示されます。
2. **明示的な指示**:
   - プロンプトで直接「私がReactでコードを書くときは、常にTypeScriptを使い、インデントはスペース2つであることを覚えておいて」と指示することで、好みを確実に記憶させることができます。

## メモリの管理とセキュリティ

記憶した内容はすべてユーザーが自分で確認し、コントロールできます。

- **メモリの確認と削除**:
  - 設定の「個人用設定（Personalization） > メモリの管理（Manage Memory）」から、現在AIが覚えていることの一覧を箇条書きで確認できます。不要になった情報や、間違って記憶された情報は、ゴミ箱アイコンをクリックして個別に消去できます。
- **一時的なオフ（Temporary Chat）**:
  - メモリに一切記憶させず、かつチャット履歴にも残したくない会話をしたい場合は、「Temporary Chat（一時的なチャット）」モードを有効にして会話することができます。

> [!IMPORTANT]
> メモリ機能は大変便利ですが、個人情報（住所、電話番号、財務情報など）や企業機密を不用意に記憶させてしまわないよう注意が必要です。特に共有のアカウントを使っている場合は、他のメンバーがその記憶を引き継いでしまう可能性があるため、パーソナルアカウントでの利用に適した機能です。
