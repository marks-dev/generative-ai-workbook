# Component Design: Sidebar

## 実装仕様 (Implementation Specification)
- **実装パターン**: パターン2（Nunjucks静的定義 ＋ 共通CSS ＋ JS状態連動）
- **主要関連ファイル**:
  - **HTML (テンプレート)**: [src/_includes/content.njk](../../src/_includes/content.njk)
  - **JavaScript (状態同期・スマホ開閉制御)**: [src/assets/js/learning-progress.js](../../src/assets/js/learning-progress.js)
  - **CSS (スタイル)**: [src/assets/css/site.css](../../src/assets/css/site.css)

## 用途
サイドバーは、現在閲覧しているカテゴリに属する教材の一覧、および各教材の学習完了状態（✅）を表示し、学習者が教材間の移動と全体の進捗把握を容易に行えるようにします。

## 利用画面
- 教材詳細ページ（`src/reading/*` および `src/hands-on/*` の詳細ページ）

## 動作仕様

### 1. PC表示（画面幅 768px 以上）
- **レイアウト**: メインコンテンツの左側に固定またはスクロール追従するサイドエリアとして常時展開されます。
- **表示内容**: 
  - 現在の親カテゴリ名。
  - カテゴリ内の教材リンク一覧。
  - 各教材の完了状態に応じた進捗表示（完了した教材にはタイトルの横に ✅ マークを表示）。

### 2. スマートフォン表示（画面幅 720px 以下）
- **レイアウト**: `<details class="content-sidebar__details">` を使用し、丸型のフローティングボタン（`☰`/`✕`トグルアイコン）を押すことでメニューが展開されるフローティングカード形式とします。
- **実装・動作仕様**: 
  - 画面幅が 720px 以下の場合は、JavaScript により初期表示時に `open` 属性を除去（非表示化）します。
  - メニュー展開時の背後に、動的生成されたバックドロップ要素 (`.content-sidebar__backdrop`) を挿入し、バックドロップ領域をクリックした際にもメニューを閉じるように制御します。
  - リスト構造には順序リスト `<ol class="content-sidebar__list">` を使用します。

## 状態との連動
- `learning-progress.js` により LocalStorage の状態を参照し、完了済みの教材リンクに対して自動的に `✅` バッジ（`.is-completed` などの補助クラス）をレンダリングします。
