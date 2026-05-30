# ROADMAP

## 現在の状況

- 現在フェーズ: UI設計
- 現在ステップ: 静的サイト生成方式設計

---

## 進行チェックリスト

### Phase 1: 画面設計

- [x] サイトマップ作成
- [x] 画面遷移図作成
- [x] 共通レイアウト設計
- [x] 主要画面設計

### Phase 2: UI設計

- [x] DESIGN.md候補選定
- [x] デザイン方針決定
- [x] 共通コンポーネント設計
- [x] 教材フォーマット設計
- [x] コンテンツ管理設計
- [x] 静的サイト生成方式設計
- [ ] CSS設計

### Phase 3: 実装

- [x] index.html作成
- [ ] 共通レイアウト実装
- [ ] 共通コンポーネント実装
- [ ] 教材ページ実装
- [ ] ナビゲーション実装

### Phase 4: 仕上げ

- [ ] 動作確認
- [ ] レスポンシブ確認
- [ ] GitHub Pages確認

---

## 決定事項

### 2026-05-30

- 画面設計を先に行う
- デザイン設計は画面設計完了後に行う
- 初期実装はスタイル無しのHTMLで進める
- トップページとして index.html を作成済み
- site-map.md を作成し、サイトマップの初版を確定
- 学習導線は「読んで学ぶ」「触って学ぶ」の2系統とする
- 「触って学ぶ」は「はじめての生成AI」「仕事で活用する」「AIと仕組みを作る」の3段階構成とする
- 「読んで学ぶ」は「基礎」「チャットレベル」「開発」「高度」の4段階構成とする
- URL設計方針を確定
- repository-map.md を作成
- ui-design.md を作成
- navigation-design.md を作成
- learning-progress-design.md を作成
- PCファースト・レスポンシブ対応を採用
- 教材ページのみサイドバーを表示する
- 学習状況は LocalStorage で管理する
- 学習状況はチェックリスト方式（未実施・完了）を採用する
- layout-design.md を作成
- component-design.md を作成
- GitBook系の情報設計を採用
- Notion系の読みやすさを採用
- サントリーサイトの柔らかい雰囲気を参考にする
- Headerは固定表示（Sticky Header）とする
- Headerはロゴ＋「このサイトについて」「用語集」「学習状況管理」で構成する
- Footerは採用しない
- 著作権・ライセンス情報は「このサイトについて」に集約する
- 作成者名は「MARKS AI Lab」とする
- top-page-design.md を作成
- category-page-design.md を作成
- content-page-design.md を作成
- 主要画面設計を完了
- Headerは Global Area / Context Area の2段構成とする
- BreadcrumbはHeaderのContext Areaに配置する
- 教材ページでは完了ボタンをHeaderに配置する
- ページ最下部到達時に完了誘導を表示する
- 教材ページは縦スクロール型を採用する
- ハンズオン教材もウィザード形式ではなく縦スクロール型を採用する
- Learning Card方式を採用する
- 教材メタ情報として難易度・推奨プラン・利用サービスを保持する
- content-format-design.md を作成
- content-management-design.md を作成
- static-site-generation-design.md を作成
- Markdownをコンテンツの正本とする
- HTMLは生成物とする
- MarkdownからHTMLを生成してGitHub Pagesへ公開する
- コンテンツとレイアウトを分離する
- HTML直接編集を前提としない
- 教材コンテンツはMarkdownで管理する
- 独自記法は必要最小限とする

---

## 次に行う作業

- CSS設計
- Static Site Generator選定
- GitHub Actions利用方針決定