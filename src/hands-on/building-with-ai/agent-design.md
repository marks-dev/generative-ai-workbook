---
layout: content.njk
title: エージェント設計
description: LangGraphやCrewAIの概念に沿って、役割分担された複数のAIエージェントが協調してタスクを実行するマルチエージェントシステムの設計と指示出しを疑似体験します。
permalink: /hands-on/building-with-ai/agent-design/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-building-with-ai-agent-design
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: エージェント設計
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
  title: MCP入門
  url: /hands-on/building-with-ai/mcp-intro/
next:
  title: ワークフロー自動化
  url: /hands-on/building-with-ai/workflow-automation/
keypoints:
  - 複雑な課題を解決するために、複数のAIエージェントに異なる役割（ペルソナ）とゴールを設計する
  - エージェント間のメッセージパッシング（情報の受け渡し）と、レビューによる品質ループを構築する
  - 人間の介入（Human-in-the-loop）を取り入れ、安全な実行ゲートをエージェントに組み込む
relatedHandson:
  - title: エージェント設計
    url: /reading/advanced/agent-design/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. 任意の対話型AIツール（ChatGPT, Gemini, Claudeのいずれか）
2. エージェント設計を行うためのお題（ここでは「オウンドメディア用の記事作成ワークフロー」をテーマにします）

## ステップ 1: エージェント構成と役割定義の設計

まずは、タスクを処理するために必要なエージェントの種類と、それぞれの「役割（Role）」「目標（Goal）」「バックストーリー（背景設定）」を設計します。

AIに以下のプロンプトを入力して、設計のベースを作成させます。

```text
私は「企業のオウンドメディア記事を作成する」ためのマルチエージェントシステムを設計したいです。
登場人物として以下の3つのエージェントを想定しています。
1. リサーチャー（情報の調査）
2. ライター（記事の執筆）
3. エディター（品質チェックと校正）

各エージェントの「具体的なシステムプロンプト（役割と制約条件の指示）」を、LangChainやCrewAIで定義できる形式で作成してください。
```

## ステップ 2: エージェント間ワークフロー（グラフ）の定義

各エージェントの定義ができたら、どのような順番で情報が引き渡され、どうなったら手戻り（ループ）が発生するかという「遷移ルール（ワークフロー）」を定義します。

続けて、AIに以下のプロンプトを入力してください。

```text
各エージェントの定義に基づき、記事作成の開始から完了までの「処理フロー（状態遷移図のロジック）」を設計してください。
特に以下の条件を含めてください。
- エディターが品質チェックを行い、不合格の場合は「どのノード（エージェント）に、どのような情報を添えて差し戻すか」
- 最終的な承認プロセス（Human-in-the-loop）をどこに挟むか

この遷移条件を、文字ベースのフローチャート（またはテキスト）で明確に記述してください。
```

## ステップ 3: 疑似マルチエージェント対話の実行

設計したワークフローが正しく機能するか、チャットAIを使い「1人複数役」で疑似シミュレーションを実行します。

AIに以下のプロンプトを入力してください。

```text
今設計した3つのエージェント（リサーチャー、ライター、エディター）になりきって、以下のテーマに関する記事作成フローを、AI同士の会話リレーとして再現（シミュレーション）してください。
テーマ：「リモートワークでのチーム力を高めるコミュニケーションツール活用法」

シミュレーションの流れ：
1. リサーチャーが重要なポイントを3つ調査・出力する。
2. ライターがそのポイントを元に、短い記事の下書き（200文字程度）を書く。
3. エディターがチェックし、1点修正を求めてライターに差し戻す。
4. ライターが修正した最終版を出力する。

このステップを自動で最後まで会話劇として出力してください。
```
