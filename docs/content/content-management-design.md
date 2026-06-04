

# Content Management Design

## 目的

教材コンテンツの管理方式を定義する。

AI生成と人間による修正を両立することを目的とする。

---

## 基本方針

- Markdownをコンテンツの正本とする
- HTMLは生成物とする
- 人間が直接修正しやすい構成を優先する
- AIが生成しやすい構成を優先する
- 標準Markdown中心で運用する
- 独自記法は必要になるまで追加しない

---

## コンテンツ管理方式

```text
Markdown
↓
HTML生成
↓
GitHub Pages公開
```

補足:

- Markdownを編集対象とする
- HTMLは直接編集しない

---

## 管理対象

管理対象:

- 教材本文
- カテゴリ情報
- 用語集
- このサイトについて

補足:

- 原則としてコンテンツはMarkdownで管理する

---

## 教材ファイル

例:

```text
content/
├ reading/
├ hands-on/
└ glossary/
```

補足:

- 詳細な配置はrepository-map.mdに従う
- 本設計では管理方針のみ定義する

---

## メタ情報

教材にはメタ情報を持たせる。

例:

```yaml
---
title: メールを書いてみよう
description: 送信相手や状況に合わせた、分かりやすく丁寧なビジネスメールをAIと作成します。
permalink: /hands-on/getting-started/email/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-email
keypoints:
  - 送信相手（上司、取引先等）に応じた適切な敬語表現を使い分ける
  - 要件が明確で簡潔に伝わるメール構成の基本パターンを理解する
relatedHandson:
  - title: ビジネスメールの基本構造
    url: /reading/fundamentals/business-email-structure/
---
```

用途:

- 一覧生成
- カテゴリ生成
- ナビゲーション生成
- 教材詳細ページ最下部の「まとめカード」の表示

補足:

- **表示が廃止されたメタ情報の扱い**: `difficulty`（難易度）、`plan`（プラン）、`service`（サービス）は教材詳細ページでの画面表示は廃止されましたが、今後の絞り込み機能や学習管理トラッキング用にYAMLのメタ情報としては引き続き定義し、内部で保持します。
- **まとめ用メタデータの定義**: 
  - `keypoints`（配列・必須）: 教材のまとめカードに表示する「抑えるべきポイント」を箇条書きで定義。
  - `relatedHandson`（配列・必須）: 関連コンテンツへのリンク情報を `title` と `url` のオブジェクト形式で定義。閲覧ページが `/reading`（読んで学ぶ）配下の場合は「関連ハンズオン」として、`/hands-on`（触って学ぶ）配下の場合は「関連読み物」として画面上は自動でラベルが切り替わって表示されます（YAMLのキー名は `relatedHandson` で統一します）。

---

## 人間による編集

方針:

- Markdownのみ編集すればよい構成とする
- HTML編集を前提としない

目的:

- 軽微な修正を容易にする
- AIを介さない修正を可能にする

---

## AIによる生成

方針:

- content-format-design.mdに従う
- メタ情報を含めて生成する
- Markdownを出力対象とする

---

## 独自記法

方針:

- 必要になるまで追加しない
- 標準Markdownを優先する

補足:

- Alert
- Tip
- Exercise

などの専用記法は慎重に導入する

---

## 今後決めること

- 独自記法採用可否
