---
layout: content.njk
title: ワークフロー自動化
description: Difyやn8nなどのノーコード/ローコードツールを使って、メール受信やWebスクレイピングからAIを起動し、Slackに結果を通知する自動化システムを設計・構築する手順を学びます。
permalink: /hands-on/building-with-ai/workflow-automation/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-building-with-ai-workflow-automation
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: ワークフロー自動化
sidebar:
  title: AIと仕組みを作る
  items:
    - title: AIコーディング
      url: /hands-on/building-with-ai/ai-coding/
    - title: Codex入門
      url: /hands-on/building-with-ai/codex-intro/
    - title: MCP入門
      url: /hands-on/building-with-ai/mcp-intro/
    - title: エージェント設計
      url: /hands-on/building-with-ai/agent-design/
    - title: ワークフロー自動化
      url: /hands-on/building-with-ai/workflow-automation/
    - title: AIアプリ開発
      url: /hands-on/building-with-ai/app-development/
previous:
  title: エージェント設計
  url: /hands-on/building-with-ai/agent-design/
next:
  title: AIアプリ開発
  url: /hands-on/building-with-ai/app-development/
keypoints:
  - トリガー（起動条件）からアクション（処理実行）までのワークフローの流れをビジュアルに設計する
  - 外部のSaaS APIやウェブスクレイピングで取得したデータを、AIに渡して要約・分類させる
  - APIキーの設定やJSON形式でのデータ受け渡しなど、自動化ツール特有のパラメータ設定を学ぶ
relatedHandson:
  - title: ワークフロー自動化
    url: /reading/advanced/workflow-automation/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. 任意の対話型AIツール（ワークフローの設計書作成のために使用します）
2. 実際に構築を行う場合は、n8n（クラウドまたはローカル環境）、Dify、Make（旧Integromat）などのビジュアルワークフロー自動化ツールの無料アカウント

## ステップ 1: 自動化システムの仕様書作成

まずは「どのようなトリガーで始まり、どのような順番でデータを加工し、どこに通知するか」という全体の処理仕様をAIに整理させます。

AIに以下のプロンプトを入力してください。

```text
私は以下の「問い合わせ自動分類・返信下書き作成システム」を n8n または Dify を使って構築したいです。
---
仕様：
1. 会社の問い合わせ用Gmailに新着メールが届く（トリガー）。
2. メールの本文を読み込み、AIが「重要度（高・中・低）」と「問い合わせカテゴリ（技術、料金、その他）」に分類する。
3. 重要度が「高」の場合は、即座にSlackの緊急チャンネルに通知する。
4. 重要度に関わらず、AIがそのメールに対する「自動返信のドラフト案」を作成し、スプレッドシートに「受信日」「送信者」「本文」「ドラフト案」を保存する。
---

このワークフローを実装するために必要な「各接続ノード（機能ブロック）の設定内容と遷移ロジックの設計図」を、テキストとフローチャートで出力してください。
```

## ステップ 2: AIプロンプトノードの設計

ワークフロー内で最も重要となる、「メール本文を分類し、返信下書きを作る」ためのAIノード（LLMノード）用のシステムプロンプトを作成します。
後続のノード（GoogleシートやSlack）がデータを処理しやすいように、**JSON形式**で出力させるのがポイントです。

AIに以下のプロンプトを入力してください。

```text
ワークフローの中で、メール本文を入力として受け取る「LLMノード」に設定するシステムプロンプトを作成してください。
以下の条件を満たしてください。
- 出力は必ず以下のJSONスキーマに従い、余計な説明文は含めないこと（Structured Outputの設計）。
  {
    "priority": "高/中/低",
    "category": "技術/料金/その他",
    "reason": "分類した理由の簡単な説明（100文字以内）",
    "draft_reply": "丁寧な返信メールの下書き文面"
  }
- 入力データは `{{input_email_body}}` という変数で受け取るように記述してください。
```

## ステップ 3: テストと例外ハンドリングの設計

自動化ワークフローは放置して動かすため、APIの通信エラーや予期しない形式のデータが届いた際のエラー対策（例外設計）が必須です。

AIに以下のプロンプトを入力してください。

```text
この自動化ワークフローを本番運用する際、以下のエラーが発生した場合の対処法（エラーハンドリング設計）を提案してください。
1. Gmailから届いたメール本文が空（または極端に短い）だった場合
2. OpenAIやGeminiのAPIが一時的にタイムアウト（エラー500等）になった場合
3. AIが指定されたJSON形式ではないプレーンテキストを出力してしまった場合
```
