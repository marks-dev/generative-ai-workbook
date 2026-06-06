---
layout: content.njk
title: 画像活用
description: 生成AIを使った画像の認識（ビジョン）能力と、テキストの指示から高品質な画像を生成する（イメージジェネレーション）機能の使い方を学びます。
permalink: /reading/chat-level/image-utilization/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-chat-level-image-utilization
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: チャットレベル
    url: /reading/chat-level/
  - label: 画像活用
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
  title: ファイル活用
  url: /reading/chat-level/file-utilization/
next:
  title: 音声活用
  url: /reading/chat-level/voice-utilization/
keypoints:
  - 画像認識（ビジョン）機能により、手書きメモ、エラー画面、デザイン、グラフなどの画像をAIに提示して内容を読み取り・解説させることができる
  - 画像生成機能（DALL-E 3やImagen 3など）を用いて、プロンプトの指示文（呪文）からイラストやビジネス用のコンセプト画像を作成できる
  - 画像を扱う際は、著作権の侵害やディープフェイクなどの倫理的側面に常に配慮する必要がある
relatedHandson: []
---

## 生成AIにおける画像の役割

生成AIは「テキスト」のやり取りだけでなく、「画像」を介した入出力能力も飛躍的に向上しています。
この画像活用は大きく分けて、**画像を読み取らせる（インプット：ビジョン機能）**と、**画像を生成させる（アウトプット：画像生成機能）**の2つの方向性があります。

## 1. 画像を読み取らせる（ビジョン機能の活用）

AIモデルに画像ファイルをアップロードし、その内容について質問・指示を行うことができます。

- **手書き文字のデジタル化**:
  - ホワイトボードに描いたブレインストーミングのメモや、手書きの領収書を写真撮影してアップロードし、「これを文字起こししてマークダウンのテキストに変換して」と指示します。
- **エラー画面の調査（デバッグ）**:
  - プログラム実行中のエラー画面や、スマートフォンの画面キャプチャをアップロードし、「このエラーが発生している原因と、考えられる対処法を教えて」と質問します。
- **デザインのアドバイス**:
  - 自分で作成したウェブサイトやバナーの画像をアップロードし、「プロのデザイナーの視点から、ユーザー体験（UI/UX）を高めるための改善ポイントを3つ提案して」と求めます。
- **グラフや図面の解析**:
  - 売上グラフや機械の構成図を見せ、「このグラフのトレンドを要約して」と指示することで、数値データと同様に画像を分析できます。

## 2. 画像を生成させる（画像生成機能の活用）

ChatGPT（DALL-E 3搭載）やGemini（Imagen搭載）に言葉（プロンプト）で指示を出すだけで、新しい画像を数秒で生成できます。

- **ビジネスでのコンセプトアート作成**:
  - 「新しいモバイルアプリのログイン画面のイメージ図。シンプルで清潔感があり、青を基調としたデザイン」など、資料作成用のモックアップを素早く作成できます。
- **ブログや資料の挿絵・イラスト**:
  - 「ロボットと人間が握手している抽象的な3Dイラスト、背景はすっきりした白、温かみのあるカラーパレット」といった指示を出すことで、ストックフォトサイトを探し回る必要がなくなります。

> [!IMPORTANT]
> **画像利用時の注意点**
> 1. **文字情報の抜け漏れ**:
>    ビジョン機能で手書きメモ等を文字起こしさせる際、かすれた文字や崩れた文字は、AIが推測して誤った単語に変換（ハルシネーション）してしまうことがあります。文字起こし結果は必ず目視でファクトチェックしてください。
> 2. **商標やキャラクターの保護**:
>    有名なアニメのキャラクターや、他社の登録商標ロゴが描かれた画像をそのままアップロードしたり、それらを模倣した画像を生成したりする行為は、権利侵害トラブルに発展する可能性が高いため控えましょう。
