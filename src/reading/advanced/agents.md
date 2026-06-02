---
layout: content.njk
title: エージェント
description: 自律的に思考・行動するAIエージェントの概念や、シングル・マルチ構成を学びます。
permalink: /reading/advanced/agents/
pageType: content
difficulty: 上級
plan: 有料プラン推奨
service:
  - ChatGPT
  - Claude
completionId: reading-advanced-agents
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: エージェント
sidebar:
  title: 高度
  items:
    - title: MCP
      url: /reading/advanced/mcp/
      status: 未実施
    - title: エージェント
      url: /reading/advanced/agents/
      completionId: reading-advanced-agents
      status: 未実施
    - title: ローカルLLM
      url: /reading/advanced/local-llm/
      status: 未実施
previous:
  title: MCP
  url: /reading/advanced/mcp/
next:
  title: ローカルLLM
  url: /reading/advanced/local-llm/
---

## 概要

一回きりのチャットのやり取りを超え、AI自身が計画を立て、ツールを使い、エラーを自己修復しながら目的を達成する仕組みを「AIエージェント」と呼びます。この教材では、エージェントの基本構造と動作パターンを学びます。

## 学習目標

- 「AIエージェント」とは何か、従来のチャットAIとの違いを説明できる
- エージェントを構成する主要な要素（プランニング、メモリー、ツール）を理解する

## AIエージェントとは？

ユーザーからの「Webサイトを作成して」といった抽象的な大目標に対し、AI自身が「1. 設計する」「2. コードを書く」「3. テストする」「4. エラーが出たら修正する」といった**具体的な行動ステップを自分で組み立て、実行を繰り返すシステム**です。

### 構成要素

- **プランニング（計画能力）**
  - 目標をサブタスクに分解し、どのような順番で行動するか自律的に決定します。
- **メモリー（記憶能力）**
  - 短期記憶（チャットの文脈）や長期記憶（過去の試行錯誤や外部ナレッジ）を使い、一貫性のある作業を行います。
- **ツール（実行能力）**
  - Web検索、ファイル操作、電卓、プログラミング環境などを呼び出して実作業を行います。

## シングルとマルチエージェント

- **シングルエージェント**: 1つのAIがすべての計画・実行を担当します。シンプルですが、タスクが複雑になると混乱しやすくなります。
- **マルチエージェント**: 「設計担当」「コーディング担当」「レビュー担当」など、異なる役割を持つ複数のエージェントが対話し協力しながらタスクを達成します。

## まとめ

AIエージェントの発展により、私たちは「AIに作業を手伝ってもらう」段階から「AIに作業を丸ごと任せる」段階へと進化しつつあります。
次のステップでは、セキュリティやプライベートなデータを守るために、自身のPCやローカル環境でAIを安全に動作させる「ローカルLLM」について学びましょう。
