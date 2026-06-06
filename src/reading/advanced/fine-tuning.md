---
layout: content.njk
title: ファインチューニング
description: 既存のLLM（基盤モデル）に対して、自社データや特定のタスクに最適化したデータを追加学習させる「ファインチューニング（微調整）」の手法と、RAGとの使い分けを学びます。
permalink: /reading/advanced/fine-tuning/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-fine-tuning
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: ファインチューニング
sidebar:
  title: 高度
  items:
    - title: MCP
      url: /reading/advanced/mcp/
    - title: MCP Server
      url: /reading/advanced/mcp-server/
    - title: MCP Client
      url: /reading/advanced/mcp-client/
    - title: エージェント
      url: /reading/advanced/agents/
    - title: シングルエージェント
      url: /reading/advanced/single-agent/
    - title: マルチエージェント
      url: /reading/advanced/multi-agent/
    - title: エージェント設計
      url: /reading/advanced/agent-design/
    - title: ワークフロー自動化
      url: /reading/advanced/workflow-automation/
    - title: AIコーディング
      url: /reading/advanced/ai-coding/
    - title: Claude Code
      url: /reading/advanced/claude-code/
    - title: Codex
      url: /reading/advanced/codex/
    - title: GitHub Copilot
      url: /reading/advanced/github-copilot/
    - title: Cursor
      url: /reading/advanced/cursor/
    - title: ローカルLLM
      url: /reading/advanced/local-llm/
    - title: Ollama
      url: /reading/advanced/ollama/
    - title: LM Studio
      url: /reading/advanced/lm-studio/
    - title: GGUF
      url: /reading/advanced/gguf/
    - title: 推論モデル
      url: /reading/advanced/reasoning-models/
    - title: OSSモデル
      url: /reading/advanced/oss-models/
    - title: ファインチューニング
      url: /reading/advanced/fine-tuning/
    - title: 蒸留
      url: /reading/advanced/distillation/
    - title: 最新トレンド
      url: /reading/advanced/latest-trends/
previous:
  title: OSSモデル
  url: /reading/advanced/oss-models/
next:
  title: 蒸留
  url: /reading/advanced/distillation/
keypoints:
  - ファインチューニングは、事前学習済みモデルに自社独自のテキストデータを追加学習（微調整）させ、モデル自体の振る舞いを書き換える技術
  - 全パラメータの更新はコストが高いため、一部のみを軽量に学習させる「LoRA（PEFT）」などの手法が実務では広く採用されている
  - ファインチューニングは「AIのトーン、出力形式、特定のスキルの習得」に向き、動的な情報の更新には「RAG」が向く
relatedHandson: []
---

## ファインチューニングとは？

**ファインチューニング（Fine-tuning：微調整）**は、すでに膨大な知識を事前学習している既存のLLM（基盤モデル）に対して、自社独自のドキュメントや特定のタスクに関する「追加データ」を入力し、モデル内のパラメータ（重み）を最適化して専用モデルとして生まれ変わらせるアプローチです。

## 効率的な学習手法：LoRA (PEFT)

以前のファインチューニングは、モデル内のすべてのパラメータを再度計算し直す（フルパラメータ・ファインチューニング）必要があり、莫大なGPU費用と長いトレーニング時間が必要でした。

現在の実務では、**PEFT（Parameter-Efficient Fine-Tuning）**と呼ばれる「パラメータ効率の良い微調整」の手法、特に **LoRA（Low-Rank Adaptation）** が主流です。

- **LoRAの概念**:
  元の巨大なモデルの重みデータは一切書き換えず、その隣に配置した「極めて小さな追加レイヤーのパラメータ（差分）」のみを学習・調整します。これにより、必要な計算量とメモリ（VRAM）を元の数十分の一に削減し、比較的安価なGPU環境でも数時間で追加学習を完了させることができます。

## ファインチューニングとRAGの使い分け

「AIに自社独自の知識を与える」という目標に対し、ファインチューニングとRAG（検索拡張生成）は非常によく比較されます。実務では、それぞれの得意分野に合わせて明確に使い分ける（または併用する）必要があります。

- **RAG (検索による外部知識の追加)**:
  - 得意：日々更新される動的な情報（在庫情報、今日のニュースなど）。
  - 例え：AIに「自社マニュアルというカンニングペーパー（参考書）」を持たせてテストに臨ませる。
- **ファインチューニング (モデル自体の性質の書き換え)**:
  - 得意：特定の出力フォーマットの強制、業界独自の専門用語（トーン＆マナー）の獲得、特定のコード書き出しの最適化。
  - 例え：AI自身の「脳の体質（考え方の癖や性格）」を変え、特定の分野に特化したスペシャリストに育てる。

| 要件・特性 | RAG | ファインチューニング |
| :--- | :--- | :--- |
| **情報の正確性** | 高い (参照元から直接拾うため) | やや低い (暗記させて推測して出すため) |
| **情報の更新頻度** | 即時反映可能 (DBを書き換えるだけ) | 再学習が必要 (数時間〜数日) |
| **コスト（初期・運用）** | 初期コスト低、運用コスト高 (毎回長文を送るため) | 初期コスト高 (学習費用)、運用コスト低 (プロンプトを短くできる) |
| **出力フォーマットの制御** | 限界がある (プロンプト頼み) | 得意 (学習データで完全に制御可能) |

> [!IMPORTANT]
> 実務上、「社内マニュアルをAIに覚えさせたい」という場合は、まず実装が容易で情報がいつでも更新できる **RAG** から試すのが基本原則です。RAGだけではどうしても言葉遣い（キャラクター）が指定できない、あるいは出力のJSON形式の遵守率を高めたいといった段階に達した際、**ファインチューニング**の導入を検討します。
