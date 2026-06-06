---
layout: content.njk
title: Codex
description: OpenAIが初期に開発した、自然言語からソースコードへの変換に特化したAIモデル「Codex」の歴史的な意義と、その後の進化の軌跡を学びます。
permalink: /reading/advanced/codex/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
completionId: reading-advanced-codex
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: Codex
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
  title: Claude Code
  url: /reading/advanced/claude-code/
next:
  title: GitHub Copilot
  url: /reading/advanced/github-copilot/
keypoints:
  - OpenAI Codexは、GPT-3をベースにGitHubのオープンソースコードを大量に追加学習させたコード生成専用の初期モデル
  - 初代GitHub Copilotのエンジンとして採用され、AIコーディングの実用性を初めて世界に証明した歴史的モデル
  - 現在は独立したAPIとしての提供は終了し、より強力な後継モデル（GPT-4シリーズ等）に統合・継承されている
relatedHandson: []
---

## OpenAI Codexとは？

**OpenAI Codex（コデックス）**は、OpenAI社が2021年に発表した、自然言語からプログラミングコードを生成することに特化した大規模言語モデルです。

GPT-3モデルをベースにし、GitHub上の膨大なパブリックリポジトリに含まれるオープンソースコードとドキュメントを追加学習させることで構築されました。

## 歴史的意義

Codexは、現代のAIコーディングにおけるパイオニア（先駆者）です。

- **AIコーディングの実用化**:
  それまでのコード自動作成ツールは、単純なテンプレートの挿入や構文規則に基づく静的なものでした。Codexは「自然な話し言葉で指示するだけで、動作可能な複雑なコードをAIが自動生成する」ことができることを初めて世界に証明し、業界に衝撃を与えました。
- **GitHub Copilotの誕生**:
  Microsoft（GitHub）とOpenAIの提携により開発された、最初の「GitHub Copilot」のAIエンジンとしてCodexが採用されました。

## どのように動作していたか？

Codexは、Python、JavaScript、HTML/CSS、SQL、C++など十数種類の主要言語を処理できました。

プロンプトとして関数の名前や説明（コメント）を入力すると、AIがそれに続く関数のロジック（プログラム本文）を自動的に記述します。

```python
# 例：入力されたプロンプト
def get_user_by_email(email_address):
    """データベースからメールアドレスが一致するユーザーを1名取得する"""
    # (Codexが自動生成する部分)
    db = get_database_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE email = %s", (email_address,))
    return cursor.fetchone()
```

## 現在のステータスと後継への進化

2023年3月、OpenAIはCodex APIの単体提供を終了（シャットダウン）しました。これは技術の後退ではなく、より強力な後継モデルへの移行を促すためです。

現代の **GPT-4**、**GPT-4o**、あるいは最新の **Claude 3.5 Sonnet** などの汎用LLMは、すでにCodexを遥かに超える極めて高度なコード生成・デバッグ・推論能力を標準で備えています。

> [!NOTE]
> Codexは独立したモデルとしては引退しましたが、その設計思想と学習アプローチは、今日のすべてのプログラミング支援AIの中に生きています。
