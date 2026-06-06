---
layout: content.njk
title: OSSモデル
description: MetaのLlama 3, Google of Gemma 2, アリババのQwen 2など、オープンソースとしてソースコードや重み（Weights）が無料公開されているLLMの主要ラインナップとライセンス特性を解説します。
permalink: /reading/advanced/oss-models/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-oss-models
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: OSSモデル
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
  title: 推論モデル
  url: /reading/advanced/reasoning-models/
next:
  title: ファインチューニング
  url: /reading/advanced/fine-tuning/
keypoints:
  - OSSモデル（オープン重みモデル）は、企業や研究機関が学習済みのパラメータ（Weights）を一般公開しているLLM
  - MetaのLlamaシリーズはデファクトスタンダードであり、多くの派生モデルやエコシステムの基盤となっている
  - 各ライセンス規約（商用利用制限の有無や、月間アクティブユーザー制限等）を実務で正しく把握することが重要
relatedHandson: []
---

## OSSモデル（オープン重みモデル）とは？

一般に「**OSSモデル（オープンソースモデル）**」または「**オープンウェイト（Open Weights）モデル**」と呼ばれるLLMは、AIモデルの構造（プログラムコード）だけでなく、AIの賢さの本体である「学習済みの重み（パラメータデータ）」が一般に無償で公開されているモデルです。

これにより、開発者は自社のサーバーやローカルPC上で、外部のAPI利用料金を支払うことなくモデルを無制限に動かすことができます。

## 代表的な主要OSSモデルファミリー

現在、世界の主要なIT企業やAI研究機関が開発を競い合っています。

### 1. Llama（Meta社開発）
オープンソースLLMブームの火付け役であり、現在もその中心に位置するデファクトスタンダードです。
- **特徴**: 英語能力および多言語推論能力が極めて高く、ライセンス規約の範囲内で商用利用が可能です。世界中のオープンソース開発者の標準プラットフォームとなっています。

### 2. Gemma（Google開発）
GoogleがGeminiと同じ技術・インフラに基づいて開発しているオープンな軽量モデルシリーズ。
- **特徴**: 2B, 9B, 27Bなどの軽量なサイズ構成でありながら、非常に高い推論・コーディング能力を持ち、特にモバイル端末やノートPC上での軽量ローカル実行に適しています。

### 3. Qwen（アリババ開発）
中国のアリババ社が開発している、日本語やアジア各国の言語にも極めて強いモデルシリーズ。
- **特徴**: 数学、コーディング、および長文のコンテキスト理解に優れ、オープンソースのベンチマークにおいて、他の米国製モデルと同等以上のスコアを頻繁にマークしています。

### 4. Mistral / Mixtral（Mistral AI社開発）
フランスのMistral AI社が開発している、軽量かつ高性能な欧州を代表するOSSモデル。
- **特徴**: 複数のモデルを組み合わせた「MoE (Mixture of Experts)」アーキテクチャのパイオニアであり、処理コストを低く抑えつつ、巨大モデルに迫る性能を発揮します。

## OSSモデル利用時のライセンス注意点

厳密には、これらは一般的なオープンソースソフトウェア（MITやApache 2.0等）とは異なる**「独自の制限付きライセンス」**であるケースが多いです。

- **商用利用の規模制限**:
  - 例えばLlamaのライセンスでは、「月間アクティブユーザー数が7億人を超える巨大サービス（競合のビッグテック等）で利用する場合は別途ライセンスの許可が必要」という制限が設けられています。
- **モデルの出力データを用いた競合AIの学習禁止**:
  - 多くのオープン重みモデルでは、「このモデルが生成したテキストを、他社の商用クローズドLLMの学習用に直接使うこと」を禁止しています。
