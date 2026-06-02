---
layout: content.njk
title: AIコーディング
description: CursorやGitHub Copilotを利用して、AIの支援を受けながら高速にプログラミングを行う体験をします。
permalink: /hands-on/building-with-ai/ai-coding/
pageType: content
difficulty: 中級から上級
plan: 有料プラン推奨
service:
  - Cursor
  - GitHub Copilot
completionId: hands-on-building-with-ai-ai-coding
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: AIコーディング
sidebar:
  title: AIと仕組みを作る
  items:
    - title: AIコーディング
      url: /hands-on/building-with-ai/ai-coding/
      completionId: hands-on-building-with-ai-ai-coding
      status: 未実施
    - title: Codex入門
      url: /hands-on/building-with-ai/codex-intro/
      status: 未実施
    - title: MCP入門
      url: /hands-on/building-with-ai/mcp-intro/
      status: 未実施
next:
  title: Codex入門
  url: /hands-on/building-with-ai/codex-intro/
---

## 概要

このハンズオンでは、AI搭載コードエディタである「Cursor」や「GitHub Copilot」を使い、AIとペアプログラミングを行いながら、新しいWebページや簡単な関数を高速に組み立てるプログラミングの手法を体験します。

## 準備するもの

- [Cursorエディタ](https://www.cursor.com/) または [VS Code + GitHub Copilot拡張機能]

## 実践ステップ

### ステップ 1: AIにHTMLとCSSの構造を作らせる

エディタを立ち上げ、新規ファイル（例：`index.html`）を作成します。
AIとのチャット窓（Cursorなら `Cmd + K` または `Cmd + L`）を開き、以下のプロンプトを入力します。

> プロンプト例:
> シンプルでモダンなデザインの「自己紹介プロフィールカード」のHTMLとCSS（同一ファイル内の<style>タグに記述）を作成してください。
> カードにはアバター画像プレースホルダー、名前、肩書き、短い自己紹介文、SNSへのモックリンクボタンを含めてください。

生成されたコードを適用し、エディタにコードが挿入されるのを確認します。

### ステップ 2: 既存コードをAIに修正・機能追加させる

挿入されたコードの一部を選択し、さらに指示を出します。

> プロンプト例:
> このカードの下部に、「詳細を見る」というボタンを追加してください。また、そのボタンをクリックするとJavaScriptの `alert` で「ご覧いただきありがとうございます！」と表示される処理を追加してください。

AIが自動的にコードの適切な位置にボタンとスクリプトを挿入するのを確認します。

## まとめ

AIコーディングエディタを活用することで、文法を細かく調べることなく、作りたい画面やロジックを直感的かつ圧倒的スピードで具現化できます。
次のステップでは、AI自身がプロジェクトの設計から実装・テストまで主導して進める「Codex」を用いた新しい開発スタイルを体験しましょう。
