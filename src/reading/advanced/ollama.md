---
layout: content.njk
title: Ollama
description: ローカル環境（Mac/Windows/Linux）でオープンソースのLLM（Llama 3, Gemma 2等）を簡単かつ軽量に実行・管理するためのCLIツール「Ollama」の使い方を学びます。
permalink: /reading/advanced/ollama/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-ollama
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: Ollama
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
  title: ローカルLLM
  url: /reading/advanced/local-llm/
next:
  title: LM Studio
  url: /reading/advanced/lm-studio/
keypoints:
  - Ollamaは、Mac, Windows, Linuxで動作する、ローカルLLM実行・管理用コマンドラインツール
  - 1つのコマンド（例：`ollama run llama3`）だけでモデルのダウンロードから対話の開始までを自動で実行する
  - ローカルホスト上でOpenAI互換のWeb APIサーバーが自動起動するため、既存のAI開発ツールやエディタと容易に連携できる
relatedHandson: []
---

## Ollama（オラマ）とは？

**Ollama**は、自分のPC（ローカル環境）にオープンソースのLLMモデルを導入し、コマンドラインやAPIから簡単に実行・管理するための最も人気の高いオープンソースのCLIツールです。

従来はローカルでAIを動かすために、Python環境の構築、必要なライブラリのインストール、モデルファイル（GGUF形式など）の選定とダウンロード、GPUドライバの設定など、非常に難解なステップが必要でした。Ollamaはこれらの複雑な手順を完全に自動化（パッケージ化）しました。

## 代表的なOllamaコマンド

Ollamaはインストーラーをダウンロードしてインストールすると、バックグラウンドでデーモン（常駐システム）が起動し、ターミナルから `ollama` コマンドで操作できます。

- **モデルのダウンロードと対話起動**:
  ```bash
  ollama run llama3
  ```
  このコマンドを実行するだけで、Meta社の「Llama 3」モデルが自動ダウンロードされ、ターミナル上で直接対話ができるようになります。
- **ダウンロード済みモデルの一覧表示**:
  ```bash
  ollama list
  ```
- **モデルの削除**:
  ```bash
  ollama rm gemma2
  ```

## 開発における最大の強み：OpenAI互換API

Ollamaが起動すると、ローカルPC上で自動的に軽量なWebサーバー（デフォルトポート：`11434`）が立ち上がります。

このAPIは、業界標準である**OpenAI APIのJSONスキーマと互換性**を持っています。

### 連携例（Pythonなどで呼び出す場合）
```python
from openai import OpenAI

# 接続先をローカルのOllamaに変更する
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"  # ダミーのキーを設定する
)

response = client.chat.completions.create(
    model="llama3",
    messages=[{"role": "user", "content": "こんにちは！"}]
)
print(response.choices[0].message.content)
```

> [!TIP]
> 接続エンドポイントをローカルに変更するだけで、OpenAI用に構築した既存のアプリケーションやライブラリ（LangChain、LlamaIndexなど）のソースコードを1行も変えずに、Ollama上で動作する完全無料・セキュアなローカルLLMシステムへ移行させることができます。
