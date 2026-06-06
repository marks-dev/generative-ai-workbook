---
layout: content.njk
title: Claude Code
description: Anthropicが開発した、ターミナル上で直接動作するエンジニア向けの自律型コマンドラインAIアシスタント「Claude Code」の特徴と使い方を学びます。
permalink: /reading/advanced/claude-code/
pageType: content
difficulty: 上級
plan: Free
service:
  - Claude
completionId: reading-advanced-claude-code
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 高度
    url: /reading/advanced/
  - label: Claude Code
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
  title: AIコーディング
  url: /reading/advanced/ai-coding/
next:
  title: Codex
  url: /reading/advanced/codex/
keypoints:
  - Claude Codeは、ターミナルで対話型インタフェースを起動してファイルを編集・コマンド実行させるツール
  - git操作、検索、ファイル読み書き、テスト実行などを自律的なエージェントとして実行できる
  - 人間の承認を挟みながら、複雑なデバッグや機能実装をターミナルから離れずに完結させられる
relatedHandson: []
---

## Claude Codeとは？

**Claude Code（クロードコード）**は、Anthropic社が開発した、ターミナル（コマンドラインインターフェース：CLI）上で開発者が直接対話しながらコード開発を行える自律型コーディングアシスタントツールです。

エディタのチャット拡張機能とは異なり、コマンドラインツール（`claude` コマンド）として起動し、開発者のローカル作業ディレクトリのファイル探索、テストコマンドの実行、Gitの操作などを自律的にこなす設計になっています。

## 主な特徴と機能

### 1. ターミナル内での自律ループ
Claude Codeは、開発者が与えたゴールに対して以下のような処理をターミナル内で自ら決定し実行します。
- `grep` や `find` を使ったファイルや文字列の検索。
- ローカルファイルの読み取り、および差分（diff）を用いた書き換え。
- プロジェクトのビルドコマンドやユニットテストの実行。

### 2. 人間の承認ゲート（Human-in-the-loop）
ファイル書き換えやターミナルコマンドの実行といった重要なアクションを起こす前に、Claude Codeは必ずターミナル画面上に承認（Y/n）を求めます。開発者はAIの思考プロセスと実行しようとしている内容を確認した上で、安全に承認することができます。

### 3. Git連携の自動化
バグ修正や機能追加が完了すると、AIが自律的に `git status` や `git diff` を確認し、その変更内容に最もふさわしい「Gitコミットメッセージ」を自動生成し、コミット（およびブランチ作成）までをコマンド経由で指示・実行させることができます。

## 基本的な使い方例

ターミナルでプロジェクトの作業フォルダに移動し、`claude` コマンドを入力して起動します。

```bash
cd my-project
claude
```

起動後、対話型のプロンプトが表示されるので、以下のような指示を出します。

- 「このプロジェクトのテストを実行して、通っていないテストがあったら該当ファイルを修正してデバッグして」
- 「`src/components/Header.js` にログインステータスを表示するボタンを追加して」
- 「現在のコード変更差分をレビューし、コミットメッセージを作成してコミットして」

> [!IMPORTANT]
> **API利用コストの考慮**
> Claude Codeは裏側で最先端の「Claude 3.5 Sonnet」を呼び出しており、コンテキスト（コードベース全体の構成やテストの出力ログなど）を大量に送信します。そのため、長時間使い続けるとAPIコスト（トークン消費）が大きくなりやすい傾向があります。不要なファイルを `.gitignore` や `.claudeignore` に含めて読み込み対象外にするなどの最適化設定が推奨されます。
