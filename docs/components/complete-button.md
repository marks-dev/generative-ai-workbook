# Component Design: Complete Button

## 実装仕様 (Implementation Specification)
- **実装パターン**: パターン2（Nunjucks静的定義 ＋ 共通CSS ＋ JS状態連動）
- **主要関連ファイル**:
  - **HTML (テンプレート)**: [src/_includes/base.njk](../../src/_includes/base.njk)
  - **JavaScript (状態制御)**: [src/assets/js/learning-progress.js](../../src/assets/js/learning-progress.js)
  - **CSS (スタイル)**: [src/assets/css/site.css](../../src/assets/css/site.css)

## 用途
完了ボタンは、現在閲覧している教材の学習完了状態を学習者がトグル操作で切り替えるためのUI部品です。学習者が進捗を手動で管理し、自己の学習状況を視覚的に把握するコア要素です。

## 利用画面
- 教材詳細ページ（Header Context Area の右端に固定配置）

## 動作仕様

### 1. 状態の保存と同期
- **LocalStorage連携**:
  - ボタンがクリックされると、JavaScriptによってブラウザの LocalStorage に当該教材のIDと完了ステータス（完了：true / 未完了：削除）が即時保存されます。
  - 同時に、サイドバーの該当リンクにあるチェックマーク（✅）および進行状況カウンターが即時更新・同期されます。

### 2. スタイル・状態遷移
- **未完了状態（デフォルト）**:
  - ラベル: `完了にする`
  - 属性: `aria-pressed="false"`, `data-completion-state="todo"`
  - スタイル: アクセントカラーのアウトラインと淡い背景（`--color-accent-muted`）。
- **完了状態**:
  - ラベル: `完了済み`
  - 属性: `aria-pressed="true"`, `data-completion-state="completed"`
  - スタイル: アクセントカラー背景（`--color-accent`）と白文字へ変化。
  - 連動: 他の要素（教材カード等）に `.is-completed` クラスがトグル付与され、連動します。
