# Component Design: Header

## 実装仕様 (Implementation Specification)
- **実装パターン**: パターン2（Nunjucks静的定義 ＋ 共通CSS ＋ JS状態連動）
- **主要関連ファイル**:
  - **HTML (テンプレート)**: [src/_includes/base.njk](../../src/_includes/base.njk)
  - **JavaScript (パネル開閉制御)**: [src/assets/js/learning-progress.js](../../src/assets/js/learning-progress.js)
  - **CSS (スタイル)**: [src/assets/css/site.css](../../src/assets/css/site.css)

## 用途
ヘッダーはサイト全体の共通レイアウトの上部に配置され、グローバルなサイト内案内（ロゴやユーティリティリンク）および閲覧中の教材に応じた固有操作（パンくずや完了状態のトグル）を提供します。

## 利用画面
- 全ページ共通で利用します。

## 構成
ヘッダーは縦2段の構造を基本とします。

### 1. Global Area (グローバル領域)
ロゴおよびサイト全体に共通する基本ナビゲーションを提供します。
- **配置要素**:
  - **ロゴ / サイトタイトル**: クリックでトップページへ遷移します。
  - **このサイトについて**: [about.md](../pages/about-page-design.md) へのリンク。
  - **用語集**: [glossary-page-design.md](../pages/glossary-page-design.md) へのリンク。
  - **学習状況管理**: 進捗管理画面またはクリア機能への導線。

### 2. Context Area (コンテキスト領域)
現在表示しているページの文脈に依存するナビゲーションや操作を提供します。
- **配置要素**:
  - **パンくずリスト**: 現在閲覧しているカテゴリ・教材の階層を表示します（詳細は [breadcrumb.md](breadcrumb.md) を参照）。
  - **完了ボタン**: 教材詳細ページにおいて、学習完了状態を切り替えるボタンです（詳細は [complete-button.md](complete-button.md) を参照）。

## スマートフォン対応
- 画面幅が狭いデバイスでは、Global AreaおよびContext Areaの配置要素を折り返し（wrap）またはスクロール対応させ、各ボタンやリンクがタップしやすい十分な余白を確保します。
