---
layout: content.njk
title: GGUF
description: ローカルPCでLLMを効率的に実行するために最適化されたバイナリファイル形式「GGUF」の定義、量子化（Quantization）の概念、および旧形式（GGML）との違いを解説します。
permalink: /reading/advanced/gguf/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-gguf
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: GGUF
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
  title: LM Studio
  url: /reading/advanced/lm-studio/
next:
  title: 推論モデル
  url: /reading/advanced/reasoning-models/
keypoints:
  - GGUF（GPT-Generated Unified Format）は、llama.cppコミュニティによって開発されたローカルLLM実行用の標準バイナリファイル形式
  - 1つの `.gguf` ファイルの中に、モデルの重み（Weights）とメタデータがすべてパッケージ化されている
  - モデルデータを圧縮・近似する「量子化（Quantization）」が施されており、一般のPCの省メモリ環境でも高速に動作する
relatedHandson: []
---

## GGUFとは？

**GGUF**は、**GPT-Generated Unified Format**の略で、オープンソースのLLMモデルを個人用PC（Mac、Windows、Linuxなど）で効率的かつ高速に動作させるために設計された、軽量なバイナリファイル形式です。

主に、C++で書かれたLLM実行環境である **`llama.cpp`** プロジェクトとそのコミュニティ（Georgi Gerganov氏ら）によって開発されました。

それ以前に使われていた「GGML」というファイル形式の後継としてリリースされ、現在ローカルLLMを実行する際の業界標準（デファクトスタンダード）フォーマットとなっています。

## GGUFの3つの革新的な特徴

### 1. 1つのファイルに全情報をパッケージ化
以前はモデルを動かすために、設定ファイル、ボキャブラリーファイル、重み（Weights）ファイルなどをバラバラに管理する必要がありました。GGUFはモデルをロードするために必要な「すべてのメタデータとパラメータ」を1つの `.gguf` ファイルの中に含んでいるため、ファイルのコピーと管理が極めてシンプルです。

### 2. 前方互換性と拡張性
以前のGGML形式では、モデルのバージョンアップ（新しいパラメータの追加等）が行われると古いローカル実行ツールで読み込めなくなるエラーが多発しました。GGUFは柔軟なキーバリュー形式でデータを保持しているため、新しい機能がモデルに追加されても古いツールでエラーを起こさずに無視してロードできる「前方互換性」を備えています。

### 3. 量子化（Quantization）による省メモリ化
GGUFファイルの本質は、モデルデータを「**量子化（圧縮）**」することにあります。

## 量子化（Quantization）の概念

AIモデルを開発する（トレーニングする）段階では、計算精度を高く保つために「16ビット浮動小数点数（FP16）」などの非常に重いデータ型が使われます。しかし、これをそのままPCに読み込むと、メモリ（RAM）が数十GB〜数百GB必要になってしまいます。

量子化は、この数値データを「4ビット（Q4）」や「8ビット（Q8）」といったより低い精度（整数型）に変換する技術です。

- **Q4_K_M (4ビット量子化の一種)**:
  - モデルのサイズ（容量）を元の4分の1程度まで削減します。
  - メモリ消費量が大幅に減るため、通常のPCでもサクサク動くようになります。計算精度はわずかに低下しますが、人間の会話レベルではほぼ体感できないレベルの微細な差に抑えられます。

| 量子化なし（FP16） | 量子化あり（Q4_K_M） |
| :--- | :--- |
| **ファイル容量**: 約16 GB | **ファイル容量**: 約4.5 GB |
| **必要なメモリ（RAM）**: 24 GB以上（高価なGPU必須） | **必要なメモリ（RAM）**: 8 GB程度（普通のPCでOK） |

> [!IMPORTANT]
> Hugging FaceからGGUFファイルをダウンロードする際は、ファイル名に `Q4_K_M` や `Q8_0` といった量子化形式が書かれています。自分のPCのメモリ容量を確認し、**「モデルのファイルサイズ ＋ 2GB程度」が自分のPCの物理メモリ（RAM/VRAM）に収まるサイズ**のものを選定してダウンロードしてください。
