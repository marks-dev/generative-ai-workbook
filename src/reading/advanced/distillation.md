---
layout: content.njk
title: 蒸留
description: 巨大で高性能なAIモデル（教師モデル）の出力データを使い、軽量なAIモデル（生徒モデル）を効率的に学習させて高性能化させる「知識の蒸留（Knowledge Distillation）」を学びます。
permalink: /reading/advanced/distillation/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-distillation
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: 蒸留
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
  title: ファインチューニング
  url: /reading/advanced/fine-tuning/
next:
  title: 最新トレンド
  url: /reading/advanced/latest-trends/
keypoints:
  - 知識の蒸留（Knowledge Distillation）は、巨大な「教師モデル」の知識や振る舞いを、軽量な「生徒モデル」に移植する技術
  - 生徒モデルは、単に正解データだけでなく、教師モデルの出力の「確率分布（柔らかい確率ラベル）」を真似て学習する
  - これにより、軽量でありながら巨大モデルに肉薄する高い推論能力を持った「安価で高速なローカルモデル」を構築できる
relatedHandson: []
---

## 知識の蒸留（Knowledge Distillation）とは？

高性能な大規模言語モデル（例：GPT-4oやClaude 3.5 Sonnet）は素晴らしい能力を持っていますが、サイズが巨大すぎるため、動作させるためのインフラコスト（GPU費用）が極めて高額になります。

**知識の蒸留**は、この巨大で頭の良い**「教師モデル（Teacher Model）」**の判断基準や思考プロセスを、サイズが小さく動作の速い**「生徒モデル（Student Model）」**に追加学習させることで、生徒モデルの性能を飛躍的に向上させるモデル圧縮技術です。

## なぜ単なるデータ学習と違うのか？（ソフトターゲット）

蒸留のポイントは、生徒モデルが「教師モデルの出力結果（答え）」だけを真似るのではなく、教師モデルが「言葉を選ぶ際に考えている確率のゆらぎ（**ソフトターゲット / ソフト確率分布**）」そのものを学ぶ点にあります。

- **ハードターゲット（正解のみ）**: 「これは犬である（1.0）」
- **ソフトターゲット（確率分布）**: 「これは90%の確率で犬であり、8%の確率で猫であり、2%の確率でキツネである」

> [!NOTE]
> この「ソフト確率」には、教師モデルが持っている「異なる概念同士の関連性や曖昧さ」の情報が詰まっています。この確率分布を真似ることで、生徒モデルは元のモデルの「高度なニュアンスの理解力」を効率よく継承できます。

## 蒸留のビジネスメリット

- **インフラコストの劇的な削減**:
  - 教師モデル（例えば数百億〜数千億パラメータ）の能力を、数億〜数十億パラメータの軽量モデルに蒸留することで、月々のサーバー費用を数分の分の一から数百分の分の一に抑えることができます。
- **超高速なレスポンス（レイテンシの改善）**:
  - 軽量化された生徒モデルは、処理時間が圧倒的に短いため、リアルタイムの顧客対応やチャットツールなど「瞬時の応答が求められる」サービスで活躍します。
- **エッジデバイス（端末内）での動作**:
  - スマートフォンや車載コンピュータなど、インターネットに繋がらないオフラインのエッジデバイス上で、高度なAIシステムをネイティブ動作させることが可能になります。

## 現代のOSSモデルと蒸留のトレンド

近年リリースされている優秀なオープンソースモデル（例：Llama 3 8BやDeepSeek-R1-Distillなど）の多くは、開発段階でより巨大な最高峰モデルからの「蒸留」プロセスが組み込まれています。
これにより、「サイズは小さいが、驚くほど賢い」モデルが続々と誕生し、ローカルAIの実用性を強力に後押ししています。
