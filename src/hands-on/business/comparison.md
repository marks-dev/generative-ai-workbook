---
layout: content.njk
title: 複数AI比較
description: 同じ質問や指示をChatGPT, Claude, Geminiのそれぞれに入力し、回答のスピード、日本語の自然さ、要約の的確さなどの違いを実際に体験して比較するワークを行います。
permalink: /hands-on/business/comparison/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-business-comparison
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: 仕事で活用する
    url: /hands-on/business/
  - label: 複数AI比較
sidebar:
  title: 仕事で活用する
  items:
    - title: 議事録作成
      url: /hands-on/business/meeting-minutes/
    - title: 調査・リサーチ
      url: /hands-on/business/research/
    - title: 企画書作成
      url: /hands-on/business/proposal/
    - title: スライド作成
      url: /hands-on/business/slides/
    - title: Excel活用
      url: /hands-on/business/excel/
    - title: 業務効率化
      url: /hands-on/business/efficiency/
    - title: 複数AI比較
      url: /hands-on/business/comparison/
previous:
  title: 業務効率化
  url: /hands-on/business/efficiency/
keypoints:
  - 同じプロンプト（質問・指示）をChatGPT, Claude, Geminiの3大AIツールに入力して出力を比較する
  - 回答の日本語表現の自然さ、指示の遵守率、情報の正確性、出力スピードを評価する
  - タスクの性質（調査、ライティング、論理推論など）に合わせた最適なツールの選定基準を理解する
relatedHandson:
  - title: 生成AIツール比較
    url: /reading/fundamentals/ai-tools-comparison/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. 主要な3つのチャットAIサービス（**ChatGPT**、**Gemini**、**Claude**）のチャット画面をブラウザの別タブで同時に開いておいてください（無料プランで実行可能です）。
2. テスト用のお題テキスト（ステップ1のプロンプトをそのまま使います）。

## ステップ 1: クリエイティブ・ライティング（文章作成）の比較

まず、日本語の「自然さ」「読みやすさ」「感情表現」を比較するため、ブログ記事の下書き作成を3つのAIにそれぞれ同じ内容で指示します。

以下のプロンプトをコピーして、**ChatGPT、Gemini、Claude のそれぞれのチャット入力欄に貼り付け、実行してください。**

```text
あなたは自社のオウンドメディア編集者です。
新入社員向けに「仕事で役立つ、生成AIと上手につきあう3つのマインドセット」というテーマで、温かみのある丁寧なブログ記事の導入部分を作成してください。
文字数は300文字程度とし、読者が親近感を持てるようにしてください。
余計な解説は不要で、ブログの本文のみを出力してください。
```

### 比較チェックポイント
- どのAIが最も「機械的でなく、人間が書いたような自然な日本語」で出力しましたか？
- 挨拶や余計な説明を省き、「ブログの本文のみを出力してください」という制約条件を最も正しく守ったのはどれですか？

## ステップ 2: リアルタイム情報検索能力の比較

次に、Web検索を伴う「最新情報やファクト（事実）の調査力」を比較します。

以下のプロンプトをコピーして、**3つのAIにそれぞれ入力し実行してください。**

```text
現在（直近数ヶ月）、日本の生成AI利用ガイドラインに関して、政府や省庁から発表された最も新しい動向やガイドラインの名前、その主要な変更点を3つ箇条書きで教えてください。また、情報源となったWebサイトのURLや参照元があれば最後に記載してください。
```

### 比較チェックポイント
- 最新のWeb検索を実行し、正しいガイドライン名（例：AI事業者ガイドライン等）を回答できたのはどれですか？
- 参照元（ソース）のURLリンクが提示され、かつリンク切れを起こしていないのはどれですか？

## ステップ 3: 評価結果のまとめと選定基準の決定

3つのAIの出力を比較した結果をもとに、それぞれの特徴を自己評価し、今後の使い分けポリシーを決定します。

ご自身のメモ帳などに、以下のような比較表を埋めてみてください。

| 評価項目 | ChatGPT | Gemini | Claude |
| :--- | :--- | :--- | :--- |
| **日本語の洗練さ（文章力）** | [例：〇] | [例：△] | [例：◎] |
| **検索情報の新しさと正確性** | [例：〇] | [例：◎] | [例：△] |
| **指示への忠実さ（制約遵守）** | [例：◎] | [例：〇] | [例：◎] |

> [!NOTE]
> 一般的に、ライティングや要約などのテキスト重視のタスクは **Claude**、最新情報のリサーチは **Gemini**、多機能なツール利用やデータ分析は **ChatGPT** が強いと言われています。この比較ワークを通じて、自身の直感に最も合うAIを見つけ出してください。
