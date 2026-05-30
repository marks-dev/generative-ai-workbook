

# Static Site Generation Design

## 目的

MarkdownからHTMLを生成する方式を定義する。

人間による保守性とAIによる生成容易性を両立することを目的とする。

---

## 基本方針

- Markdownを正本とする
- HTMLは生成物とする
- GitHub Pagesで公開する
- 仕組みは可能な限り単純にする
- 人間が理解しやすい構成を優先する
- AIが破綻しにくい構成を優先する

---

## 採用方針

方針:

```text
Markdown
↓
Static Site Generator
↓
HTML
↓
GitHub Pages
```

補足:

- コンテンツとレイアウトを分離する
- HTML直接編集を前提としない

---

## 選定基準

重視する項目:

- シンプルであること
- Markdownとの親和性
- GitHub Pagesとの親和性
- 人間が学習しやすいこと
- AIが理解しやすいこと

重視しない項目:

- 過度な高機能性
- SPA機能
- 複雑なビルドパイプライン

---

## コンテンツ生成フロー

```text
Markdown作成
↓
メタ情報付与
↓
HTML生成
↓
GitHub Pages公開
```

---

## レイアウト適用

方針:

- 共通レイアウトを利用する
- Markdown側にレイアウト情報を書かない

補足:

- Header
- Sidebar
- Navigation

などはテンプレート側で管理する

---

## メタ情報利用

用途:

- タイトル生成
- 一覧生成
- ナビゲーション生成
- カテゴリ生成

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

---

## 採用ツール

現時点:

- 未決定

候補:

- Eleventy
- Astro
- 自前生成

補足:

- 先に要件を確定する
- ツール選定は後で行う

---

## 今後決めること

- Static Site Generator選定
- ビルド手順
- GitHub Actions利用有無
- デプロイ手順