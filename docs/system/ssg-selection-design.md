

# SSG Selection Design

## 目的

Static Site Generator（SSG）の選定方針を定義する。

ツールありきではなく、要件に基づいて選定することを目的とする。

---

## 基本方針

- 要件を先に定義する
- Eleventyを採用する
- 学習コストが低いことを重視する
- AIが理解しやすい構成を重視する
- 人間が保守しやすい構成を重視する

---

## 前提条件

現在の設計方針:

```text
Markdown
↓
HTML生成
↓
GitHub Pages
```

補足:

- Markdownを正本とする
- HTMLは生成物とする
- コンテンツとレイアウトを分離する

---

## 必須要件

- Markdown対応
- Front Matter対応
- 静的HTML出力
- GitHub Pages対応
- シンプルなテンプレート構造

---

## 重視する要件

- 導入が容易
- 学習コストが低い
- ドキュメントが豊富
- AIが生成しやすい
- AIが修正しやすい
- 長期保守しやすい

---

## 重視しない要件

- SPA機能
- SSR機能
- 高度なフロントエンド機能
- 過度なプラグイン機構

---

## 候補

### Eleventy

評価:

- Markdown中心
- シンプル
- 学習コストが低い

### Astro

評価:

- 高機能
- 将来拡張性が高い
- 本プロジェクトには過剰な可能性がある

### 自前生成

評価:

- シンプルに見える
- 保守コスト増加の可能性がある
- 必要になるまで採用しない

---

## 現時点の評価

採用:

- Eleventy（11ty）

理由:

- 現在の要件と親和性が高い
- Markdown中心設計と相性が良い
- AI運用時の複雑性が低い
- HTML生成物方針と整合する
- GitHub Pages運用と整合する
- テンプレート制御自由度が高い
- CSS / JSを自由に管理できる

---

## ビルド・公開方針

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
