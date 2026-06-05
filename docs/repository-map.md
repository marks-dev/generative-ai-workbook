# Repository Map

## 目的と参照優先順位
このファイルは、リポジトリ全体の構造と各ファイルの責務境界を把握するための索引です。
- **参照優先順位**: 1. `AGENTS.md`、2. `docs/repository-map.md`、3. `docs/ROADMAP.md`、4. 各設計書、5. 既存実装ファイル（衝突防止目的のみ。模倣厳禁）。
- **設計不整合防止**: 設計・実装・修正前には必ず本索引から影響範囲を特定し、整合性を確認してください。

---

## 主要管理ファイル
- **AGENTS.md**: AIが作業する際の行動ルール、設計書参照順序、実装時の判断基準を管理。
- **docs/ROADMAP.md**: プロジェクトの進行状況、フェーズ、決定事項、次に行う作業を管理。
- **index.html**: トップページ（移行期の一時的HTML実装。最終的にEleventy生成物に移行予定）。
- **README.md / LICENSE**: リポジトリ概要およびMITライセンスの管理。

---

## 設計ドキュメント（docs配下）
- **docs/content/site-map.md**: サイト構造と学習導線（カテゴリ追加、教材構成変更等）を管理。
- **docs/common/url-design.md**: 公開URL設計とGitHub Pagesの公開URL方針を管理。
- **docs/common/ui-design.md**: 全体のUI設計思想と共通レイアウト構造（スケルトン）を管理。
- **docs/pages/navigation-design.md**: グローバル/コンテキストナビゲーションやパンくず、完了ボタンの移動導線を管理。
- **docs/common/component-design.md**: 再利用するUI共通部品（ボタン、カード、Alert、コピー付きCode Block等）の設計を管理。
- **docs/common/learning-progress-design.md**: LocalStorageを用いた学習状況の保存・進捗連動表示方針を管理。
- **docs/pages/top-page-design.md**: トップページのレイアウト（学習導線タイル等）の設計を管理。
- **docs/pages/category-page-design.md**: カテゴリ/サブカテゴリページのレイアウトと教材リストカード表示を管理。
- **docs/pages/content-page-design.md**: 教材詳細ページのレイアウト、サイドバー開閉UI、完了誘導等の詳細設計を管理。
- **docs/content/content-common-design.md**: 共通のコンテンツ管理方針、記述ルール（見出し、Alert等）、画像・動画アセット掲載ガイドラインを管理。
- **docs/content/content-reading-design.md**: 「読んで学ぶ」（reading）教材の推奨構成、ディレクトリ配置、YAMLメタ情報定義を管理。
- **docs/content/content-handson-design.md**: 「触って学ぶ」（hands-on）教材の推奨構成、ディレクトリ配置、YAMLメタ情報定義、HTMLスライド仕様・テンプレートを管理。
- **docs/system/static-site-generation-design.md**: EleventyによるMarkdownからHTMLへの変換生成フローおよびレイアウト適用方針を管理。
- **docs/system/ssg-selection-design.md**: SSG選定基準（Eleventyの採用理由および静的運用の基本方針）を管理。
- **docs/system/github-actions-design.md**: GitHub Actionsを用いたGitHub Pagesへの自動ビルド・公開デプロイフローを管理。
- **docs/common/css-design.md**: 共通CSSによるスタイル管理方針、 Notion風 の見出し装飾やインライン要素（strong, code）ルールを管理。
- **docs/common/design-token-design.md**: CSSで共通利用する各種変数（色、サイズ、余白、角丸、レスポンシブしきい値等）を管理。

---

## 変更時の参照先
- **サイト構造・教材構成変更**: `site-map.md`, `url-design.md`, `category-page-design.md`, `content-page-design.md`, `content-reading-design.md`, `content-handson-design.md`
- **画面・UI・導線変更**: `ui-design.md`, `navigation-design.md`, `component-design.md`, `top-page-design.md`, `category-page-design.md`, `content-page-design.md`
- **学習状況管理変更**: `learning-progress-design.md`, `navigation-design.md`, `component-design.md`
- **教材本文・Markdown仕様変更**: `content-common-design.md`, `content-reading-design.md`, `content-handson-design.md`, `static-site-generation-design.md`
- **CSS・デザイン値変更**: `css-design.md`, `design-token-design.md`, `ui-design.md`, `component-design.md`
- **静的サイト生成・自動公開変更**: `content-common-design.md`, `content-reading-design.md`, `content-handson-design.md`, `static-site-generation-design.md`, `ssg-selection-design.md`, `github-actions-design.md`, `url-design.md`

---

## ディレクトリ方針と責務境界
- **docs/**: 設計書および管理ドキュメントのみを配置。実装コードや教材本文は配置しない。
- **content/**: 教材Markdownの将来的な配置先（現状は移行中、移行期は `src/` を利用）。
- **_site/**: EleventyによるHTML生成物の出力先（Git管理外、.gitignore対象）。
- **assets/**: 画像（`.webp`）、HTMLスライド、CSS、JSアセットの配置先。
- **共通レイアウト**: `layout-design.md` は廃止され、共通構造は `ui-design.md`、個別構造は各画面設計書へ移譲されました。CSS定数は `design-token-design.md` に集約・一元化しています。
