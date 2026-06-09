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
  - **ロゴ / サイトタイトル**: クリックでトップページへ遷移します。高精細なベクター形式のロゴ画像（[logo.svg](../../src/assets/images/logo.svg)）を配置し、Alt属性（`alt="Generative AI Workbook Logo"`）を付与しています。表示サイズは `height: auto` および `max-height: 45px` とし、ホバー時のマイクロインタラクション（不透明度遷移）をサポートします。
  - **このサイトについて**: [about.md](../pages/about-page-design.md) へのリンク。
  - **用語集**: [glossary-page-design.md](../pages/glossary-page-design.md) へのリンク。
  - **学習状況管理**: 進捗管理画面またはクリア機能への導線。

### 2. Context Area (コンテキスト領域)
現在表示しているページの文脈に依存するナビゲーションや操作を提供します。
- **配置要素**:
  - **パンくずリスト**: 現在閲覧しているカテゴリ・教材の階層を表示します（詳細は [breadcrumb.md](breadcrumb.md) を参照）。
  - **完了ボタン**: 教材詳細ページにおいて、学習完了状態を切り替えるボタンです（詳細は [complete-button.md](complete-button.md) を参照）。

## Favicon・アイコン仕様 (Favicon & Icon Specifications)
本サイト全体のアイデンティティとして、以下のマルチレゾリューション対応アイコンをHTMLの `<head>` で読み込んでいます。
- **favicon.ico**: `16x16`, `24x24`, `32x32`, `48x48`, `64x64`, `128x128` サイズを格納したマルチレゾリューションICOファイル。
- **apple-touch-icon.png**: iOSデバイスホーム画面等で利用される高解像度アイコン（`180x180`）。
- **ms-tile.png**: Windowsのタイル表示等で利用されるアイコン（`150x150`）。
- **android-chrome-192x192.png**: Android等で利用される高解像度アイコン（`192x192`）。
※ パスプレフィックス（`/generative-ai-workbook/`）に対応するため、テンプレート内では `| url` フィルターを通してパスが動的に解決されます。

## スマートフォン対応
- 画面幅が狭いデバイスでは、Global AreaおよびContext Area of header を折り返し（wrap）またはスクロール対応させ、各ボタンやリンクがタップしやすい十分な余白を確保します。
- ロゴ画像（`.site-header__logo-img`）は `max-width: 100%` により画面幅に応じて適切に自動縮小されます。
