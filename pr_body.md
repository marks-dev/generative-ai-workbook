# Pull Request 変更内容

## 変更内容

自動生成詳細ページの再現性担保を目指し、設計ドキュメントの改訂（構成の分離およびHTMLスライド埋め込みの義務化）と、その新設計に完全に準拠した「メールを書いてみよう（email.md）」および「表を作ってみよう（table.md）」の新規作成・アセット追加を行いました。

### 1. 設計ドキュメントの修正（再現性担保）
- **`docs/content-format-design.md`**: 
  - タイトルと概要をフロントマター（ヘッダー領域）へ制限し、本文中での重複記述を禁止しました。
  - ハンズオン詳細ページにおける「準備するもの」「実践ステップ」を、必ずローカルHTMLスライドとしてアセット化（`iframe`埋め込み）して構成することを義務化しました。

### 2. 新規アセット（HTMLスライド）の追加
- **`src/assets/slides/email-steps.html`**: メール作成用のステップスライド（全4ページ、コピー機能付き）。
- **`src/assets/slides/table-steps.html`**: 表作成用のステップスライド（全4ページ、コピー機能付き）。
  - いずれもフロントマターを記載せず、ホワイト系の配色、フッター右端へのページ番号常時表示（`1 / 4`）仕様を準拠。

### 3. 新規教材の追加（新設計準拠）
- **メールを書いてみよう (`src/hands-on/getting-started/email.md`)**: 本文から概要・準備・手順を排除し、フロントマターの `description` のみで概要を扱い、本文には作成した `email-steps.html` を `iframe` で埋め込み。
- **表を作ってみよう (`src/hands-on/getting-started/table.md`)**: 同様に本文から重複見出しを排除し、作成した `table-steps.html` を `iframe` で埋め込み。

### 4. インデックスおよび既存ナビゲーションの更新
- `src/hands-on/getting-started/index.md` の `learningCards` に上記2件を追加。
- 既存の `chat.md`, `summarize.md`, `image.md` のサイドバーと `previous` / `next` ナビゲーションを更新し、全5ページを正しく連結。

---

## 確認した設計書

- [AGENTS.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/AGENTS.md) (行動ルール)
- [repository-map.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/repository-map.md) (設計書マップ)
- [ROADMAP.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/ROADMAP.md) (進行状況・決定事項)
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
