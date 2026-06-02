# ROADMAP

## 現在の状況

- 現在フェーズ: 教材コンテンツ拡充
- 現在ステップ: 既存ページの表示品質調整（太字解除・アラート微調整）および設計書フィードバック完了

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
- [x] CSS設計
- [x] Design Token設計
- [x] SSG選定方針設計
- [x] GitHub Actions設計
- [x] 設計書整合性レビュー
- [x] AGENTS統治レビュー

### Phase 2.5: 実装準備

- [x] 実装順序確定
- [x] 共通レイアウト実装方針確定
- [x] CSS構成確定
- [x] SSG最終選定

### Phase 3: 実装

- [x] Eleventy環境構築
- [x] GitHub Actions構築
- [x] 共通レイアウト実装
- [x] 共通CSS実装
- [x] Top Page実装
- [x] Category Page実装
- [x] Content Page実装
- [x] 学習状況管理実装

### Phase 4: 仕上げ

- [x] 動作確認
- [x] レスポンシブ確認
- [x] GitHub Pages確認

### Phase 5: 教材コンテンツの拡充

- [x] 共通説明ページの整備（このサイトについて、用語集）
- [x] 表示品質調整結果から関連 docs/*.md へのフィードバック
- [x] 既存ページの表示品質調整（カテゴリ、サブカテゴリ、既存コンテンツ、このサイトについて）
- [/] 「触って学ぶ - はじめての生成AI」詳細ページの作成（メール、表）
- [ ] 「読んで学ぶ - 基礎」詳細ページの作成
- [ ] その他の未実装詳細ページの順次作成

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
- 独自記法は必要になるまで追加しない
- design-token-design.md を作成
- ssg-selection-design.md を作成
- github-actions-design.md を作成
- CSSは共通資産として管理する
- AIにページ単位のCSS生成をさせない
- Design Tokenを利用する
- GitHub Actionsを利用する
- Eleventyを採用する
- GitHub Actionsビルドを採用する
- GitHub PagesへActions経由で公開する
- _siteは生成物として扱う
- _siteはGit管理しない
- 標準Markdown中心で運用する
- 学習状況管理はHeaderから利用する
- 学習状況管理の独立ページは作成しない
- SidebarはスマートフォンではDrawer表示とする
- 設計書整合性レビューを実施
- AGENTS.mdに設計書参照ルールを追加
- Eleventy環境構築を完了
- `npm run build` と `npm run dev` を追加
- トップページをMarkdown正本に移行
- GitHub Pages公開確認済み
- Top Page表示確認済み
- docs / AGENTS / README / LICENSE のみの更新ではdeployを起動しない方針とする
- 学習状況管理はLocalStorageで実装し、GitHub Pages上で動作確認済み
- GitHub Actions deploy成功
- GitHub Pages上でTop / Category / Content Pageを確認済み
- pathPrefix対応済み
- 学習状況管理の本番動作確認済み
- 320px / 375px幅で主要ページに明らかな表示崩れなし

### 2026-05-31

- Top Pageの先頭説明ブロックを整理
- Top Pageのサイト説明文をHeader Context Areaへ移動
- Top Pageの「読んで学ぶ」「触って学ぶ」を説明カード型からナビゲーションタイル型へ変更
- Top Pageのルート入口はカード全体を遷移部品とし、内部ボタンを配置しない方針とする
- Top Pageのルート入口タイルはアイコンとルート名のみを基本表示とする
- Top Pageは情報量を抑え、主要な学習導線を優先する方針とする

### 2026-06-02

- 「このサイトについて (src/about.md)」を新規作成し、サイト趣旨やMITライセンス表記を定義
- 「用語集 (src/glossary.md)」を新規作成し、LLMやRAG, MCPなどの基本AI用語の解説を追加
- ヘッダーから直接リンクされる共通リンクの404エラーを完全に解消
- 共通説明ページの作成を完了し、Pull Request #20 をマージ済み
- サイト共通の見出し装飾（h1に下線、h2に縦長バーPrefix）とインライン要素（code文字色、strong強調）を強化
- AI生成ルール（content-format-design.mdおよびAGENTS.md）に不要な太字の禁止を明文化
- about.md の不要な太字を全面的に解除
- 外部リンクを自動で別タブ（target="_blank" rel="noopener noreferrer"）で開く共通JS処理を実装
- 用語集（src/glossary.md）を Notion風 のデータベーステーブルレイアウトに刷新
- 用語集にインクリメンタル（リアルタイム）検索窓を配備。あいまい検索タグ（フリガナや略称）を含めた検索ロジックを JavaScript で実装
- 用語集にて全件非表示時はテーブル自体を隠し、空状態メッセージに切り替える親切設計を実装
- Pull Request #23 のマージ完了
- 既存教材ページ（全20ファイル）の不要な太字 (**) を全面的に解除し、文全体の強調や過剰な装飾をクリーンアップ
- 業務活用 (business-use.md) において、太字による注意喚起から Notion風 の `[!IMPORTANT]` アラート構文へとリファクタリングを実施し、視覚的な品質を向上
- 既存ページの表示品質調整（カテゴリ、サブカテゴリ、既存コンテンツ詳細ページ）および設計書 (*-design.md) へのフィードバックを完了し、Phase 5 の品質改善初期ステップをクリーンに通過
- カテゴリおよびサブカテゴリページの表示を、h1ヘッダーや説明文、各種メタ情報バッジを完全に廃し、最初からクリーンな教材一覧から始まるシンプルなデザインへ再設計
- 学習カードのレイアウトを「左端アイコン・中央本文・右端中央✅」の美しい3カラム上下中央揃えレイアウトへ刷新
- 学習進捗状況と連動し、詳細教材カードには自身が完了した時のみ、ポータル親カテゴリカードには紐づく「すべての子教材」が完了した時のみ、右側中央に ✅ マークバッジが灯る動的制御ロジックを JavaScript で実装
- 完了した学習カード全体に対して、subtle なグリーンの境界線と淡いグリーンの背景を割り当て、学習進捗の視覚的な差別化をプレミアムに実現

---

## 次に行う作業

- 「触って学ぶ - はじめての生成AI」カテゴリの未実装ページ（メールを書いてみよう、表を作ってみよう）の詳細教材執筆・作成
- 「読んで学ぶ - 基礎」詳細ページの執筆・作成
