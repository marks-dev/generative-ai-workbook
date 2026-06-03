# Repository Map

## 目的

このファイルは、リポジトリ全体の構造を人間およびAIが素早く把握するための索引である。

実際のディレクトリツリーをそのまま記録することが目的ではない。

以下を管理する。

- どのファイルが何を管理しているか
- どの変更を行う時にどのファイルを参照すべきか
- ファイル間の責務の境界

---

## 参照優先順位

実装・修正・教材作成を行う場合は、以下の順に参照する。

1. AGENTS.md
2. docs/repository-map.md
3. docs/ROADMAP.md
4. 変更対象に関係する設計ドキュメント
5. 既存の実装ファイル

補足:

- AGENTS.mdは作業ルールを管理する。
- docs/repository-map.mdは参照すべき設計書を特定するための索引である。
- docs/ROADMAP.mdは現在の進行状況と決定事項を確認するために参照する。
- 実装判断は、対象領域の設計ドキュメントを確認してから行う。

設計書間で内容が重複または矛盾する場合は、以下の優先順位で判断する。

1. 対象領域を直接扱う設計書
2. docs/ROADMAP.md の決定事項
3. docs/repository-map.md の責務境界
4. 汎用的な設計書

---

## 主要ファイル

### AGENTS.md

AIが作業する際のルールを管理する。

確認する場面:

- すべての作業開始時
- 設計・実装・修正を行う時
- ユーザーへの回答方針を確認する時

### docs/ROADMAP.md

プロジェクトの進行状況、フェーズ、決定事項、次に行う作業を管理する。

確認する場面:

- 現在の作業フェーズを確認する時
- 完了済み作業を確認する時
- 次に行う作業を確認する時
- 過去の決定事項を確認する時

### index.html

現在のトップページ実装を管理する。

補足:

- 現時点では初期実装のHTMLである。
- EleventyによるMarkdownからHTMLを生成する構成へ移行する方針である。

### README.md

リポジトリの概要説明を管理する。

### LICENSE

MIT Licenseを管理する。

---

## 設計ドキュメント

### docs/content/site-map.md

サイト構造と学習導線を管理する。

変更例:

- カテゴリ追加
- 教材構成変更
- 学習導線変更

### docs/common/url-design.md

URL設計を管理する。

変更例:

- URL追加
- URL命名規則変更
- GitHub Pagesの公開URL方針変更

### docs/common/ui-design.md

サイト全体のUI設計思想を管理する。

変更例:

- 対象デバイス方針
- UI全体の方向性
- 配色・雰囲気の基本方針

### docs/pages/layout-design.md

画面レイアウト設計を管理する。

変更例:

- Header
- Footer採用有無
- Sidebar
- 画面ごとの領域配置

### docs/pages/navigation-design.md

サイト全体のナビゲーション設計を管理する。

変更例:

- グローバルナビゲーション
- コンテキストナビゲーション
- パンくずリスト
- 前へ・次へ
- 関連教材導線

### docs/common/component-design.md

共通コンポーネント設計を管理する。

変更例:

- ボタン
- カード
- Alert
- Tip
- Exercise
- Code Block

### docs/common/learning-progress-design.md

学習状況管理機能を管理する。

変更例:

- LocalStorage保存方式
- 完了状態
- JSONエクスポート
- JSONインポート

### docs/pages/top-page-design.md

トップページ設計を管理する。

変更例:

- 学習の進め方
- 読んで学ぶ入口
- 触って学ぶ入口
- 学習再開支援

### docs/pages/category-page-design.md

カテゴリページ設計を管理する。

変更例:

- Category Overview
- Learning Card一覧
- 教材メタ情報表示
- レベル別グルーピング

### docs/pages/content-page-design.md

教材ページ設計を管理する。

変更例:

- 教材本文表示
- 教材ページのSidebar
- 完了ボタン
- 完了誘導
- Previous / Next Navigation

### docs/content/content-format-design.md

教材コンテンツの記述ルールを管理する。

変更例:

- 教材本文の構成
- 見出しルール
- Alert / Tip / Exerciseの使い方
- ハンズオンStep構成
- AI生成ルール

### docs/content/content-management-design.md

教材コンテンツの管理方式を管理する。

変更例:

- Markdownを正本とする方針
- HTMLを生成物とする方針
- メタ情報
- 独自記法の採用可否

### docs/system/static-site-generation-design.md

MarkdownからHTMLを生成する方式を管理する。

変更例:

- Static Site Generator利用方針
- レイアウト適用方針
- メタ情報利用
- 生成フロー

### docs/system/ssg-selection-design.md

Static Site Generatorの選定結果と採用理由を管理する。

変更例:

- Eleventy採用理由
- SSG必須要件
- SSG運用方針

### docs/system/github-actions-design.md

GitHub Actionsの利用方針を管理する。

変更例:

- GitHub Pages公開フロー
- Workflow方針
- ビルド実行方針
- 失敗時の扱い

### docs/common/css-design.md

サイト全体のCSS方針を管理する。

変更例:

- 共通CSS管理
- カラーパレット
- タイポグラフィ
- 余白
- レスポンシブ対応

### docs/common/design-token-design.md

デザインで利用する共通トークンを管理する。

変更例:

- Color Token
- Typography Token
- Spacing Token
- Radius Token
- Border / Shadow Token
- Responsive Token

### docs/repository-map.md

本ファイル。

リポジトリ全体の索引と、設計ドキュメント間の責務境界を管理する。

---

## 変更時の参照先

### サイト構造・教材構成を変更する場合

参照するファイル:

- docs/content/site-map.md
- docs/common/url-design.md
- docs/pages/category-page-design.md
- docs/pages/content-page-design.md
- docs/content/content-management-design.md

### 画面・UI・導線を変更する場合

参照するファイル:

- docs/common/ui-design.md
- docs/pages/layout-design.md
- docs/pages/navigation-design.md
- docs/common/component-design.md
- docs/pages/top-page-design.md
- docs/pages/category-page-design.md
- docs/pages/content-page-design.md

### 学習状況管理を変更する場合

参照するファイル:

- docs/common/learning-progress-design.md
- docs/pages/layout-design.md
- docs/pages/navigation-design.md
- docs/common/component-design.md

### 教材本文・Markdown管理を変更する場合

参照するファイル:

- docs/content/content-format-design.md
- docs/content/content-management-design.md
- docs/system/static-site-generation-design.md

### CSS・デザイン値を変更する場合

参照するファイル:

- docs/common/css-design.md
- docs/common/design-token-design.md
- docs/common/ui-design.md
- docs/common/component-design.md

### 静的サイト生成・公開方式を変更する場合

参照するファイル:

- docs/content/content-management-design.md
- docs/system/static-site-generation-design.md
- docs/system/ssg-selection-design.md
- docs/system/github-actions-design.md
- docs/common/url-design.md

---

## 現在のディレクトリ方針

### docs/

設計ドキュメントと管理ドキュメントを管理する。

補足:

- 実装コードや教材本文の正本は管理しない。
- 設計変更時は関係する設計ドキュメントを確認する。
- 作業順序や進行状況はdocs/ROADMAP.mdを確認する。

### content/

教材Markdownの配置先として想定する。

現状:

- 未作成

補足:

- Markdownを正本とする。
- HTMLは直接編集しない。
- 詳細な配置は、コンテンツ実装時に既存設計に従って決定する。

### _site/

EleventyによるHTML生成物の出力先として想定する。

現状:

- Git管理対象ではない。

補足:

- 生成物を直接編集しない。
- GitHub Pages公開用の出力として扱う。
- .gitignore対象とする。

### CSS / JavaScript

共通CSSおよび必要最小限のJavaScriptを配置する領域は未作成である。

補足:

- CSSは共通資産として管理する。
- 学習状況管理はGitHub Pagesのみで動作する範囲に限定する。
- 不要なビルドツールや依存関係は追加しない。

---

## 責務境界

- site-map.mdはサイト構造を管理する。
- url-design.mdは公開URLを管理する。
- ui-design.mdはUI全体の思想を管理する。
- layout-design.mdは画面領域の配置を管理する。
- navigation-design.mdは移動導線を管理する。
- component-design.mdは共通UI部品を管理する。
- top-page-design.md、category-page-design.md、content-page-design.mdは画面別の設計を管理する。
- content-format-design.mdは教材本文の書き方を管理する。
- content-management-design.mdはMarkdown管理方針を管理する。
- static-site-generation-design.mdはEleventyによるMarkdownからHTMLへの生成方式を管理する。
- ssg-selection-design.mdはSSG選定結果と採用理由を管理する。
- github-actions-design.mdは公開自動化方針を管理する。
- css-design.mdはCSS全体方針を管理する。
- design-token-design.mdはCSSで利用する共通値を管理する。
- learning-progress-design.mdは学習状況の保存・表示方針を管理する。
- ROADMAP.mdはプロジェクトの進行状況と決定事項を管理する。
- repository-map.mdは設計内容そのものではなく、参照先と責務境界を管理する。
