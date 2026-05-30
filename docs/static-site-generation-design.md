

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
Eleventy
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
Eleventy build
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

採用:

- Eleventy

補足:

- Markdown正本方針と整合する
- HTML生成物方針と整合する
- GitHub Pages運用と整合する
- テンプレート制御自由度が高い
- CSS / JSを自由に管理できる

---

## ビルド方式

採用:

- GitHub Actions build

フロー:

```text
git push
↓
GitHub Actions
↓
npm ci
↓
Eleventy build
↓
GitHub Pages
```

ローカル開発:

- `npm run build`
- `npm run dev`

生成物:

- `_site` は生成物として扱う
- `_site` はGit管理しない
