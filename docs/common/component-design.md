# Component Design (共通コンポーネント方針・索引)

## 目的と基本方針
本ファイルは、サイト共通のUIコンポーネント（再利用可能な部品）を構築する上での全体共通方針を定義し、デザインおよび実装の一貫性を担保することを目的とします。

- **体験の一貫性確保**: 同様の機能を持つ要素（ボタン、カード等）は、必ず定義された共通コンポーネントに準拠して実装します。
- **過度な共通化の回避**: 1つの画面でしか使われないアドホックな要素を無理に共通化せず、共通のUI部品のみを本設計の対象とします。
- **標準セマンティクス優先**: HTML標準要素（`<details>`や`<nav>`など）の持つセマンティクスや標準インタラクションを最大限に活用し、JavaScriptへの不要な依存を避けます。

---

## 共通のUI状態管理ルール
学習状況の完了トグルに伴うUI表現は、サイト全体で以下のように一貫性を保ちます。

- **状態識別クラス**: 学習完了状態にある要素（教材カード、サイドバーのリンク等）には、一貫して `.is-completed` クラスを付与します。
- **デザイン表現**:
  - 完了状態の要素は、学習完了の進捗を視覚的に伝えるため、トーンを抑えたグリーン系の境界線、あるいはごく淡いグリーン系の背景へと切り替えます。
  - タイトル等のテキストの横には `✅` バッジを表示します。

---

## コンポーネント定義一覧 (索引)
個別コンポーネントの具体的なマークアップ、レイアウト、およびスクリプト挙動の仕様は、以下の各設計書を参照してください。

### レイアウト系
- **[Header](../components/header.md)**: グローバル・コンテキストナビゲーションの全体構成。
- **[Sidebar](../components/sidebar.md)**: カテゴリ内教材一覧、進捗同期、スマホ時アコーディオン挙動。

### ナビゲーション系
- **[Breadcrumb](../components/breadcrumb.md)**: Header Context Area 内の現在地階層表示。
- **[Complete Button](../components/complete-button.md)**: 教材詳細ページの完了/未完了トグルボタン。
- **[Hamburger Menu](../components/sidebar.md)**: スマートフォン表示時のサイドバー開閉UI（Sidebar設計書内に併記）。

### コンテンツ系
- **[Learning Card](../components/learning-card.md)**: カテゴリページ等における3カラムの教材一覧カード。
- **[Navigation Tile](../components/navigation-tile.md)**: トップページの学習ルート（読んで学ぶ/触って学ぶ）入口タイル。
- **[Related Content Card](../components/related-content-card.md)**: 教材ページ下部で相互の行き来を促す関連教材カード。
- **[Content Summary Card](../components/content-summary-card.md)**: 要点整理と関連リンクを提示するまとめカード。
- **[Callout Alert](../components/callout-alert.md)**: 補足や警告をホバー吹き出し形式で表示するアラート。
- **[Code Block](../components/code-block.md)**: クリップボードへのコピー機能を備えたソースコード表示ブロック。

### 学習状況・誘導系
- **[Completion Prompt (誘導ツールチップ)](../components/completion-prompt.md)**: 未完了でのスクロール末尾到達時に表示される、ヘッダー完了ボタン直下のグラスモーフィズム吹き出し。
- **[Learning Progress Panel](../components/learning-progress-panel.md)**: 学習履歴の確認、JSONでのデータインポート/エクスポートおよびリセットを提供する管理パネル。
