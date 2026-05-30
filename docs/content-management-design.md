

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
- 独自記法は必要最小限とする

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
title: AIの歴史
difficulty: beginner
service:
  - ChatGPT
plan: free
---
```

用途:

- 一覧生成
- カテゴリ生成
- ナビゲーション生成

補足:

- 項目詳細は今後決定する

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

- MarkdownからHTMLへの生成方式
- メタ情報詳細仕様
- 独自記法採用可否
- ビルド手順