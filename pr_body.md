# Pull Request 変更内容

## 変更内容

docs設計書の物理整理（Phase 1）として、`docs/` 直下にフラットに存在していた17個の設計書を、テキストの改変を行わずに `git mv` にて4つの論理サブディレクトリ（`common`, `pages`, `content`, `system`）へ安全に移動しました。また、これに伴う `repository-map.md` のインデックスパスの更新を行いました。

### 1. サブディレクトリの作成とファイル移動
- **`docs/common/`**: `ui-design.md`, `css-design.md`, `design-token-design.md`, `url-design.md`, `component-design.md`, `learning-progress-design.md` を格納。
- **`docs/pages/`**: `top-page-design.md`, `category-page-design.md`, `content-page-design.md`, `layout-design.md`, `navigation-design.md` を格納。
- **`docs/content/`**: `site-map.md`, `content-format-design.md`, `content-management-design.md` を格納。
- **`docs/system/`**: `static-site-generation-design.md`, `ssg-selection-design.md`, `github-actions-design.md` を格納。

※ いずれも中身のテキストは一切改変せず、リネームのみを行っています。

### 2. インデックスパスの更新
- `docs/repository-map.md` 内に記述されている各ドキュメントへの絶対・相対パス指定を、移動後のサブディレクトリパスへとすべて更新・同期しました。

---

## 確認した設計書

- [AGENTS.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/AGENTS.md) (行動ルール)
- [repository-map.md](file:///Users/tanji/MyDocuments/myDev/working/generative-ai-workbook/docs/repository-map.md) (設計書マップ ※今回修正)

---

## 実行したコマンド

```bash
# 静的サイトのビルド確認
npm run build
```

---

## 確認結果

- `npm run build` にて、静的HTMLファイルがすべてエラーなく正常に出力されることを確認しました。
- 各設計書の中身に変更差分が発生していないことを `git diff` 等で確認済みです。

---

## 未対応事項

- なし
