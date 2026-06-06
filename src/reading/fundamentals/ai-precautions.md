---
layout: content.njk
title: AI利用時の注意点
description: 生成AIをビジネスや日常生活で安全に利用するために欠かせない、セキュリティ、データポリシー、著作権、およびハルシネーション（嘘）への対策を学びます。
permalink: /reading/fundamentals/ai-precautions/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-ai-precautions
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: AI利用時の注意点
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
  title: ローカルLLMとは
  url: /reading/fundamentals/what-is-local-llm/
next:
  title: AI評価と検証
  url: /reading/fundamentals/ai-evaluation/
keypoints:
  - プロンプトに入力したデータが「AIの再学習」に使われないよう、サービスのデータポリシーやオプトアウト設定を必ず確認する
  - 生成AIは事実と異なる「ハルシネーション（嘘）」を出力するため、業務利用する際は「人間によるファクトチェック」を必須とする
  - 他者の著作物をそのまま生成物に複製しないよう、著作権侵害のリスクや意図しない剽窃に十分注意する
relatedHandson: []
---

## 生成AIを利用する際のリスク

生成AIは業務を大幅に効率化できる便利なツールですが、リスクを理解せずに利用すると、企業のセキュリティインシデントや法的トラブルに発展する可能性があります。
ここでは、特に注意すべき3つのリスクとその対策について学びます。

## 1. 情報漏洩（インプットデータのリスク）

チャットAIへの入力欄（プロンプト）に入力したテキストや、アップロードした画像・ファイルは、初期設定のままでは「AIの性能向上のための学習データ」として二次利用されてしまうことがあります。

### 対策
- **データ利用規約の確認**:
  - 商用利用向けの有料プラン（ChatGPT Team/Enterpriseなど）や、API経由での利用は原則としてデータが学習に利用されません。
- **オプトアウト（学習拒否）設定**:
  - 個人向け無料プランを使用する場合は、設定から「チャット履歴とトレーニング」をオフにするなどのオプトアウト設定を行ってください。
- **機密情報の入力禁止**:
  - 顧客の個人情報、ソースコード、未公開の経営情報や技術ノウハウなどは、原則としてプロンプトに入力しないというガイドラインを策定しましょう。

## 2. ハルシネーション（アウトプットデータの信頼性）

生成AIは、最もらしい言葉の並びを確率で計算して作成しています。そのため、まったく根拠のない「もっともらしい嘘」を堂々と出力することがあります。これを**ハルシネーション（Hallucination：幻覚）**と呼びます。

> [!CAUTION]
> 特に法令、財務、医療、専門的な技術データなど、誤りが重大な事故につながる領域では、AIの出力をそのまま鵜呑みにしてはいけません。
> 「AIが書いたから正しい」と過信せず、常に一次情報（公式サイト、書籍、公的ドキュメントなど）を人間が確認する「**Human in the Loop (人間の監視下での利用)**」を徹底してください。

## 3. 著作権侵害

生成AIが生成したテキストや画像が、偶然にも他人の著作物（小説、イラスト、商標など）と酷似していた場合、それを公開・販売すると著作権侵害に問われる可能性があります。

### 対策
- **インプット著作権とアウトプット著作権**:
  - AIが「ネット上の著作物を学習すること」自体は、現在の日本の著作権法（第30条の4）で原則として合法とされています。しかし、生成されたコンテンツを「利用（配信・配布・販売）する段階」で他人の著作物と類似していれば、通常と同様の著作権侵害が成立します。
- **商標や類似性の調査**:
  - 生成されたロゴやイラストを商業利用する場合は、事前に既存の商標や類似イラストがないかを画像検索等で調査しましょう。
- **出力結果の過度な依拠を避ける**:
  - 特定の作家名やキャラクター名、商品名などをプロンプトに指定して「〜風の画像を作って」と指示する行為は、類似性が高まりやすいため極めてハイリスクです。
