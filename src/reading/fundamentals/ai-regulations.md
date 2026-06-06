---
layout: content.njk
title: AI法規制
description: 欧州のAI規制法（AI Act）をはじめとする世界の主要な法規制の動向、および日本国内におけるAIガイドラインや知的財産法との関係を解説します。
permalink: /reading/fundamentals/ai-regulations/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: reading-fundamentals-ai-regulations
breadcrumbs:
  - label: トップページ
    url: /
  - label: 読んで学ぶ
    url: /reading/
  - label: 基礎
    url: /reading/fundamentals/
  - label: AI法規制
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
  title: AI倫理
  url: /reading/fundamentals/ai-ethics/
keypoints:
  - EUの「AI規制法（AI Act）」は、AIシステムをリスクに応じて4段階に分類し、厳しい義務や罰則を課す世界初の包括的法案
  - 日本国内では義務的な法規制ではなく、政府の「AI事業者ガイドライン」による緩やかなソフトロー（自主規制）が主流
  - AIの著作権や知的財産権に関しては、利用段階での類似性判定において従来の著作権法がそのまま適用される
relatedHandson: []
---

## 世界のAI法規制の潮流

生成AIの急速な発展に伴い、世界各国でAIによる人権侵害や悪用を防ぐための法規制の整備が始まっています。
特に、欧州（EU）の取り組みは世界各国のルール策定に多大な影響を与えています。

## 1. 欧州EU：AI規制法 (AI Act)

2024年に成立したEUの「**AI Act（AI規制法）**」は、世界で初めてAIシステムそのものを包括的に規制する法律となりました。

AI Actは、AIの用途を**リスクの高さ**に応じて4つのカテゴリーに分類し、それぞれに応じたルールを課しています。

- **禁止されるリスク (Unacceptable risk)**
  - 人間の社会的行動を格付けするシステム（ソーシャルスコアリング）や、同意のないバイオメトリクス（生体認証）による監視など。これらは原則としてEU内での利用が禁止されます。
- **高リスク (High risk)**
  - 医療機器、重要インフラの運用、自動運転、採用選考における書類評価など、人間の生命や基本的人権に直結するAI。厳格な安全性検証、ログ記録、人間による監視などの義務が課されます。
- **限定的なリスク (Limited risk)**
  - チャットボットや画像生成など。ユーザーに対して「相手がAIであること」や「生成されたコンテンツであること」を明示する透明性の確保が義務付けられます。
- **最小限のリスク (Minimal risk)**
  - スパムフィルターやゲーム内のAIなど。特別な義務は課されません。

> [!WARNING]
> EU内でビジネスを展開する企業は、EU外（例えば日本国内）で開発されたAIシステムであっても、EU市民向けに提供する限り本法の対象となります。違反した場合は、最大で全世界売上高の7%に達する極めて高額な制裁金が科される可能性があります。

## 2. 日本国内の動向とガイドライン

日本においては、EUのように法律によって直ちにAIの利用や開発を禁止・罰則付きで縛るのではなく、現時点では「**ソフトロー（非拘束的なガイドライン）**」を中心としたアプローチを取っています。

### AI事業者ガイドライン
総務省と経済産業省が2024年に策定したガイドラインで、AIを「開発する事業者（開発者）」「導入・提供する事業者（提供者）」「業務利用する事業者（利用者）」がそれぞれ遵守すべき安全対策やガバナンスのあり方を指針として示しています。

### 日本の著作権法とAI
日本の著作権法（第30条の4）は世界的に見ても「AIの学習に寛容な法律」として有名です。

- **学習段階（インプット）**:
  - 著作権者の許諾なく、営利・非営利を問わず、ネット上の著作物をAI学習用に収集して処理することが原則として認められています（※ただし、著作権者の利益を不当に害する場合は除かれます）。
- **生成・利用段階（アウトプット）**:
  - 生成されたテキストや画像を利用する段階で、既存の著作物との「**類似性**」および「**依拠性**（その作品を参考に知って作ったか）」が認められれば、通常の著作権侵害と同様に違法と判定されます。
