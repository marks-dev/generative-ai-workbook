# Pull Request 変更内容

## 変更内容

「触って学ぶ - はじめての生成AI」カテゴリの未実装詳細ページである「メールを書いてみよう（email.md）」および「表を作ってみよう（table.md）」を新規作成し、既存の各詳細ページとインデックスページのナビゲーション・サイドバーを更新して全5ページを正しく連結させました。

### 1. 新規教材の追加
- **メールを書いてみよう (`src/hands-on/getting-started/email.md`)**: ビジネスメール作成、トーン変更、お詫びメール作成のステップを執筆。
- **表を作ってみよう (`src/hands-on/getting-started/table.md`)**: 文章からの表生成、列の追加、CSV形式へのエクスポートステップを執筆。

### 2. ナビゲーションおよびサイドバーの更新
- `src/hands-on/getting-started/index.md` の `learningCards` に上記2件を追加。
- 既存の `chat.md`, `summarize.md`, `image.md` のサイドバーに新規ページへのリンクと `completionId` を反映。
- 各ページの `previous` / `next` ナビゲーションのポインタを更新し、順番（会話 -> 要約 -> メール -> 表 -> 画像）通りに遷移できるように修正。

---

## 確認した設計書

- [AGENTS.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/AGENTS.md) (行動ルール)
- [repository-map.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/repository-map.md) (責務境界・設計書マップ)
- [ROADMAP.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/ROADMAP.md) (進行状況・決定事項)
- [content-format-design.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/content-format-design.md) (教材形式ガイドライン)

---

## 実行したコマンド

```bash
# 静的サイトのビルド確認
npm run build
```

---

## 確認結果

- `npm run build` にて、新規教材を含む全35ファイルがエラーなく正常に静的HTMLへとビルドされることを確認しました。
- リンク切れや余計な差分が発生していないことを `git diff` 等で確認済みです。

---

## 未対応事項

- なし
