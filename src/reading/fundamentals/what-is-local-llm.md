---
layout: content.njk
title: ローカルLLMとは
description: クラウド型のAIサービスとローカルLLM（パソコンや自社サーバー上で動かすAI）の違い、導入するメリット・デメリットを解説します。
permalink: /reading/fundamentals/what-is-local-llm/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-what-is-local-llm
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: ローカルLLMとは
sidebar:
  title: 基礎
  items:
    - title: AIとは
      url: /reading/fundamentals/what-is-ai/
    - title: AIの歴史
      url: /reading/fundamentals/ai-history/
    - title: AIの種類
      url: /reading/fundamentals/ai-types/
    - title: 生成AIの仕組み
      url: /reading/fundamentals/generative-ai-mechanism/
    - title: LLMの仕組み
      url: /reading/fundamentals/llm-mechanism/
    - title: 生成AIツール比較
      url: /reading/fundamentals/ai-tools-comparison/
    - title: マルチモーダルAI
      url: /reading/fundamentals/multimodal-ai/
    - title: ローカルLLMとは
      url: /reading/fundamentals/what-is-local-llm/
    - title: AI利用時の注意点
      url: /reading/fundamentals/ai-precautions/
    - title: AI評価と検証
      url: /reading/fundamentals/ai-evaluation/
    - title: AIガバナンス
      url: /reading/fundamentals/ai-governance/
    - title: AI倫理
      url: /reading/fundamentals/ai-ethics/
    - title: AI法規制
      url: /reading/fundamentals/ai-regulations/
previous:
  title: マルチモーダルAI
  url: /reading/fundamentals/multimodal-ai/
next:
  title: AI利用時の注意点
  url: /reading/fundamentals/ai-precautions/
keypoints:
  - ローカルLLMは、外部のクラウドサーバーに接続せず、手元のPCや自社のプライベートサーバー上で動作するAIモデル
  - 最大のメリットは「データプライバシーの完全な確保」であり、機密情報を一切外に出さずにAIを活用できる
  - デメリットとして、高性能なハードウェア（GPU）が必要となり、クラウド型AIに比べてモデルの最大性能が制限されやすい
relatedHandson: []
---

## クラウド型AIとローカルLLMの違い

私たちが普段使っているChatGPTやGeminiなどのサービスは、主に**クラウド型AI（API型AI）**と呼ばれます。
これに対して、自分のコンピュータや自社の専用サーバーにAIモデルをダウンロードして実行する方式を**ローカルLLM**と呼びます。

| 項目 | クラウド型AI (ChatGPT等) | ローカルLLM (Ollama等) |
| :--- | :--- | :--- |
| **実行場所** | AI開発企業の巨大なサーバー | 手元のPC、または自社サーバー |
| **インターネット接続** | 必須 | 不要 (オフラインで動作可能) |
| **データ流出リスク** | 規約設定や管理が必要 | ゼロ (外部に送信されない) |
| **導入コスト** | 月額利用料のみ (低コスト) | 高性能なGPU等の初期ハードウェア投資が必要 |
| **応答性能・モデルの賢さ** | 非常に高い (巨大なモデルを利用可) | 端末スペックに依存 (軽量モデルに制限される) |

## ローカルLLMを導入するメリット

企業がローカルLLMを導入する最大の理由は、**セキュリティとカスタマイズ性**にあります。

### 1. 機密データ・個人情報の完全な保護
クラウド型AIを利用する場合、規約上データが学習に利用されない設定（オプトアウト）にすることは可能ですが、それでも「データを外部ネットワークに送信する」こと自体がセキュリティポリシーに抵触する企業も少なくありません。
ローカルLLMであれば、ネットワークから完全に隔離された（物理的な）環境でも動作するため、機密情報や個人情報を安全に処理できます。

### 2. コストの安定性と無制限な利用
API（クラウド利用）の場合、利用量（トークン数）に応じて従量課金が発生します。大量のドキュメントを24時間処理し続けるようなユースケースでは、コストが非常に高額になる場合があります。
ローカルLLMはハードウェアさえ用意すれば、電気代を除いてどれだけ処理しても追加の課金が発生しません。

### 3. 特化カスタマイズの自由度
自社専用の用語集や過去の業務データをローカルでAIモデルに追加学習（ファインチューニング）させ、特定の業務に最適化された専用AIを比較的容易に構築できます。

## ローカルLLMの課題とデメリット

- **高いハードウェア要件**
  - AIモデルを快適に動かすには、通常のCPUではなく、膨大なメモリを積んだ高性能なビデオカード（GPU）を搭載したPC（MacであればApple Siliconのハイエンドモデルなど）が必要になります。
- **モデルの「賢さ」の制限**
  - PCで動くローカルLLMは、容量が数GBから数十GB程度の「軽量化されたモデル（7B〜70Bパラメータ等）」になります。OpenAIなどの巨大なクラウドモデルと比較すると、一般的な知識量や高度な推論力は劣る傾向があります。

> [!NOTE]
> 近年、オープンソース（Llama、Gemma、Qwenなど）のLLMの性能が急激に向上しており、以前はクラウドモデルでしか行えなかったレベルの処理が、一般的なPC上で実用的な速度で動作するようになってきています。
