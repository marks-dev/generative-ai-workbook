

# URL Design

## 目的

本ファイルは公開URLの設計を管理する。

GitHub Pages のディレクトリ構造と公開URLは基本的に一致させる。

URLは利用者向けというより、開発者およびAIが構造を把握しやすいことを優先する。

---

## URL設計方針

- 英語を使用する
- 小文字のみ使用する
- kebab-case を使用する
- ディレクトリURLを採用する
- ディレクトリ構造とURL構造を一致させる
- 将来のカテゴリ追加でURL変更が発生しにくい構造とする

---

## トップレベルURL

/

- トップページ

/about/

- このサイトについて

/reading/

- 読んで学ぶ

/hands-on/

- 触って学ぶ

/glossary/

- 用語集

---

## 読んで学ぶ

/reading/fundamentals/

- 基礎

/reading/chat-level/

- チャットレベル

/reading/development/

- 開発

/reading/advanced/

- 高度

---

## 触って学ぶ

/hands-on/getting-started/

- はじめての生成AI

/hands-on/business/

- 仕事で活用する

/hands-on/building-with-ai/

- AIと仕組みを作る

---

## 命名規則

教材ページ:

- ai-history
- ai-types
- prompt-basics
- prompt-practice

カテゴリページ:

- fundamentals
- chat-level
- development
- advanced

教材URL:

- URLは学習テーマ（概念）を優先する
- 原則としてサービス名をトップレベル教材URLにしない

例:

- ai-tools
- ai-coding
- local-llm
- deep-research

教材ページ構成:

- 原則: 1教材 = 1ページ = 1URL
- 章・節単位ではURLを作成しない

例外:

- 情報量が多い教材はサブページを持つことを許可する
- サブページは意味のある名前を使用する

例:

- ai-tools/chatgpt
- ai-tools/gemini
- ai-tools/claude
- ai-coding/codex
- ai-coding/claude-code

禁止:

- 日本語URL
- 大文字URL
- snake_case
- スペースを含むURL

- main
- page1
- page2
- sub_01
- sub_02

---

## 今後決めること

- 末端画面に辿り着くまでの遷移の多さが問題になったら改善検討
