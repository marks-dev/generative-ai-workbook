---
layout: content.njk
title: スライド作成
description: AIを使ってプレゼンテーション用スライドの構成やスライドごとのレイアウト・文言を作成し、MarkdownやVBAを使って素早くスライド資料へ変換する手順を体験します。
permalink: /hands-on/business/slides/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-slides
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: スライド作成
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
  title: 企画書作成
  url: /hands-on/business/proposal/
next:
  title: Excel活用
  url: /hands-on/business/excel/
keypoints:
  - スライド資料を作る前に、AIに全体のストーリーボード（章立てと流れ）を作成させる
  - 各スライドに記載するテキスト（タイトル、キーメッセージ、3つの箇条書き要点）をAIに整理させる
  - PowerPointなどで自動読み込み可能な形式（MarkdownやMarp、VBAコードなど）で書き出させて作業効率を高める
relatedHandson:
  - title: 業務活用
    url: /reading/chat-level/business-use/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. 任意の対話型AIツール（ChatGPT, Gemini, Claudeのいずれか）
2. スライド資料としてまとめたいテキストや、事前に作成した「企画書・提案書」（ステップ1でAIに渡す材料にします）
3. (オプション) Microsoft PowerPoint または Googleスライド

## ステップ 1: スライド全体のストーリー構成案の作成

いきなりスライドを書き始めるのではなく、まずは「誰に」「何を伝えるか」を整理し、全体で何枚構成のスライドにするかというストーリー設計を行います。

AIに以下のプロンプトを入力してください。

```text
私はこれから、社内会議で「新規ペーパーレス化推進キャンペーン」の実施許可をもらうためのプレゼンスライドを作成します。
発表時間は約5分で、スライドの枚数は「表紙を含めて5枚から6枚」を想定しています。
このプレゼンに最適なスライドごとの「タイトル」と「そのスライドで伝えるべき主要なキーメッセージ」の流れを提案してください。
```

## ステップ 2: 各スライドのコンテンツ（テキスト）の作成

全体の流れが決まったら、スライド1枚ずつの具体的な構成（配置するテキスト）を作成します。
スライド上のテキストは「多すぎると読まれない」ため、AIに情報を絞り込ませるのがポイントです。

AIの返答を確認した上で、続けて以下のプロンプトを入力してください。

```text
ありがとうございます。この構成案に沿って、各スライドのテキスト原稿を作成してください。
ただし、PowerPointに流し込めるように、すべてのスライドについて以下のフォーマットで出力してください。

### 各スライドのフォーマット：
- スライドの番号とタイトル
- キーメッセージ（1行で強く伝えること）
- スライドに配置する説明文（3つの箇条書きで、それぞれ20文字以内）
- スライドのレイアウト配置や図のイメージ指示
```

## ステップ 3: PowerPointへの自動流し込み（応用）

（※PowerPointをインストールしたPCをお持ちの方のみ）
AIにPowerPoint用のVBA（マクロ）プログラムを生成させ、コピー＆ペーストで1秒でスライド全体の枠組みを作成するテクニックを試します。

AIに以下のプロンプトを入力してください。

```text
上記のステップで作成したスライド構成を、PowerPointの新規ファイルとして自動作成するためのVBAマクロコードを作成してください。
以下の仕様を満たしてください。
- 1枚目のスライドは「表紙（タイトルとサブタイトル用レイアウト）」にする。
- 2枚目以降のスライドは「タイトルとコンテンツ」の標準レイアウトにする。
- 各スライドにタイトルと、スライドごとの「箇条書きの要点テキスト」をプログラム内で流し込む。
```

> [!NOTE]
> 出力されたVBAコードをコピーし、PowerPointの「開発」タブ ＞ 「Visual Basic」を開いて標準モジュールにペーストし、実行ボタンを押すことで、すべてのスライドテキストが自動入力されたファイルが即座に生成されます。
