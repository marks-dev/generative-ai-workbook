# Component Design: Content Header (教材ヘッダー)

## 実装仕様 (Implementation Specification)
- **実装パターン**: パターン1（Nunjucks静的定義 ＋ 共通CSS）
- **主要関連ファイル**:
  - **HTML (テンプレート)**: [src/_includes/content.njk](../../src/_includes/content.njk)
  - **CSS (スタイル)**: [src/assets/css/site.css](../../src/assets/css/site.css)

## 用途
教材ヘッダー（Content Header）は、教材詳細ページ（「読んで学ぶ（reading）」および「触って学ぶ（hands-on）」の双方）のコンテンツ領域最上部に配置され、学習者が現在取り組んでいる教材のタイトルと概要説明を一貫したデザイン・レイアウトで表示するための共通UIコンポーネントです。

## 利用画面
- 教材詳細ページ（本文エリア最上部）

## 構成・マークアップ
HTML構造は、テンプレート側で以下のように定義されています。

```html
<header class="content-article__header">
  <h1 class="content-article__title">{{ title }}</h1>
  {% if description %}
    <p class="content-article__description">{{ description }}</p>
  {% endif %}
</header>
```

- **タイトル (`h1.content-article__title`)**:
  - 各教材ファイルの Front Matter で定義された `title` 変数のテキストが流し込まれます。
- **概要説明 (`p.content-article__description`)**:
  - Front Matter で `description` が定義されている場合のみレンダリングされます（省略可能）。

## デザイン・スタイル仕様
- **背景とグラデーション**:
  - ブランドカラー（ティール系）の極薄トーンから白へと変化するグラデーション背景（`linear-gradient`）を適用し、最下部のまとめカード（[content-summary-card.md](content-summary-card.md)）とデザイン思想を統一しています。
  - 左端にはアクセントカラー（`--color-accent`）の太さ `6px` のボーダーを配備し、コンテンツの視覚的な開始位置を明示しています。
- **タイポグラフィと階層**:
  - タイトルはページ全体の主見出しとして視覚的に最も強調され、Notionライクなシンプルで力強いスタイルが適用されます。
  - 概要説明は、タイトルの補助として少しトーンを抑えたカラーと適切なフォントサイズで表示され、本文へのスムーズな導入を助けます。
- **スマートフォン対応 (レスポンシブ)**:
  - 画面幅が 720px 以下の場合、カードのパディング（`padding`）および下部マージン（`margin-bottom`）が縮小され、左ボーダーの太さは `4px` へと最適化されます。
  - 同時に、タイトルフォントサイズが `1.6rem` に縮小され、スマートフォン上の表示エリアを圧迫せずに綺麗に配置されます。
