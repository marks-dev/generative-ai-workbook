# Pull Request 変更内容

## 変更内容

自動生成詳細ページの再現性担保を目指し、設計ドキュメントの改訂（構成の分離、Markdown本文からの「まとめ」セクションの完全排除、HTMLスライド埋め込みの義務化、および既存コンテンツの参照禁止ルールの策定）と、その新設計に完全に準拠した「メールを書いてみよう（email.md）」および「表を作ってみよう（table.md）」の新規作成・アセット追加を行いました。

### 1. 設計ドキュメントの修正およびAI生成ルールの強化（再現性担保）
- **`docs/content-format-design.md`**: 
  - タイトルと概要をフロントマター（ヘッダー領域）へ制限し、本文中での重複記述（`## 概要`）を禁止しました。
  - 「まとめ」の仕様を是正し、Markdown本文中の `## まとめ` セクションを完全に排除し、フロントマターの `keypoints` から生成されるフッターまとめカードへ一本化しました。
  - ハンズオン詳細ページにおける「準備するもの」「実践ステップ」を、必ずローカルHTMLスライドとしてアセット化（`iframe`埋め込み）して構成することを義務化しました。
  - **既存コンテンツの参照・模倣の禁止ルール**を「AI生成ルール」に明文化し、常に仕様書（`docs/*.md`）の記述のみを正として新規生成する原則を定義しました。
- **`AGENTS.md`**:
  - AIの「厳守すべきルール」に、既存コンテンツや別画面の実装を模倣・流用して寄せる（合わせる）行為を厳重に禁止するルールを追記しました。

### 2. 新規アセット（HTMLスライド）の追加（義務化ルールに準拠）
- **`src/assets/slides/email-steps.html`**: メール作成用のステップスライド（全4ページ、コピー機能付き）。
- **`src/assets/slides/table-steps.html`**: 表作成用のステップスライド（全4ページ、コピー機能付き）。
  - いずれもフロントマターを記載せず、ホワイト系の配色、フッター右端へのページ番号常時表示（`1 / 4`）仕様を準拠。

### 3. 新規教材の追加（新設計準拠）
- **メールを書いてみよう (`src/hands-on/getting-started/email.md`)**: 本文から概要・準備・手順・まとめを排除し、フロントマターの `description` のみで概要を扱い、本文には作成した `email-steps.html` を `iframe` で埋め込み。
- **表を作ってみよう (`src/hands-on/getting-started/table.md`)**: 同様に本文から重複見出しを排除し、作成した `table-steps.html` を `iframe` で埋め込み。

### 4. インデックスおよび既存ナビゲーションの更新
- `src/hands-on/getting-started/index.md` の `learningCards` に上記2件を追加。
- 既存の `chat.md`, `summarize.md`, `image.md` のサイドバーと `previous` / `next` ナビゲーションを更新し、全5ページを正しく連結。

---

## 確認した設計書

- [AGENTS.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/AGENTS.md) (行動ルール ※今回修正)
- [repository-map.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/repository-map.md) (設計書マップ)
- [ROADMAP.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/ROADMAP.md) (進行状況・決定事項 ※今回修正)
- [content-format-design.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/content-format-design.md) (教材形式ガイドライン ※今回修正)

---

## 実行したコマンド

```bash
# 静的サイトのビルド確認
npm run build
```

---

## 確認結果

- `npm run build` にて、新規教材および追加したスライドHTMLを含む全35ファイルがエラーなく正常に静的HTMLへとビルドされることを確認しました。

---

## 未対応事項

- なし
