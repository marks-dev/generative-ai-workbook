

# GitHub Actions Design

## 目的

GitHub Actionsの利用方針を定義する。

コンテンツ更新から公開までの作業を自動化することを目的とする。

---

## 基本方針

- 手作業を最小化する
- GitHub標準機能を優先する
- シンプルな構成を維持する
- AIが理解しやすい構成を維持する
- 人間が追跡しやすい構成を維持する

---

## 公開フロー

```text
Markdown修正
↓
git commit
↓
git push
↓
GitHub Actions
↓
npm ci
↓
Eleventy build
↓
GitHub Pages公開
```

目的:

- 公開作業の自動化
- 手順の統一

---

## GitHub Actionsの責務

実施内容:

- 依存関係インストール
- ビルド実行
- HTML生成
- GitHub Pages公開

実施しない内容:

- コンテンツ生成
- コンテンツ編集

---

## トリガー

第一候補:

```text
mainブランチへのpush
```

理由:

- シンプル
- 運用しやすい

---

## 失敗時の方針

方針:

- 公開を中断する
- GitHub Actionsログで確認する

補足:

- 失敗した状態を公開しない

---

## ローカル開発

方針:

- ローカルでもビルド可能とする
- GitHub Actions専用構成にしない
- `npm run build` でローカルビルドする
- `npm run dev` でローカル確認する

目的:

- デバッグ容易化
- AI支援時の検証容易化

フロー:

```text
ローカル確認
↓
問題なければpush
↓
GitHub Actionsで本番ビルド
```

---

## SSGとの関係

方針:

- Eleventyを利用する
- GitHub Actionsは実行基盤とする

補足:

- ビルド処理そのものはEleventy側が担当する
- `_site` は生成物として扱い、Git管理しない

---

## 現時点の判断

採用方針:

- GitHub Actionsを利用する
- GitHub Actions DeployでGitHub Pagesへ公開する

理由:

- pushだけで公開できる
- 運用コストを削減できる
- 人間とAIの両方に分かりやすい

---

## Pages設定

方針:

- GitHub Pagesのdocs公開方式は利用しない
- GitHub Actions経由で公開する
