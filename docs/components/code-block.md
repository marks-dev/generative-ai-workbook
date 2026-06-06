# Component Design: Code Block with Copy Button (コピーボタン付きコードブロック)

## 実装仕様 (Implementation Specification)
- **実装パターン**: パターン3（JS動的生成 ＋ 共通CSS）
- **主要関連ファイル**:
  - **JavaScript (ラッパー生成・コピー処理)**: [src/assets/js/learning-progress.js](../../src/assets/js/learning-progress.js)
  - **CSS (スタイル)**: [src/assets/css/site.css](../../src/assets/css/site.css)

## 用途
コードブロックは、教材中の設定ファイル、コマンドライン操作、およびプログラムコードを等幅フォントで読みやすく整理し、学習者が記述ミスなく実習を行えるようにクリップボードへのワンクリックコピー機能を提供するコンポーネントです。

## 利用画面
- 教材詳細ページ（本文エリア内）
- 「このサイトについて」等、Markdown からコードブロックが生成される全ページ

## 構成・マークアップ
HTML出力時は単なる `<pre><code>` タグですが、クライアントサイドでJSがDOMを以下のように動的に再構成します。
- **DOM構成**:
  ```html
  <div class="code-block-wrapper">
    <pre><code>...</code></pre>
    <button class="code-block__copy-btn" type="button" aria-label="コードをコピー">
      <span class="code-block__copy-icon">📋</span>コピー
    </button>
  </div>
  ```
- **除外条件**:
  - すでに親要素に `.code-block-wrapper` クラスが付与されている場合や、スライド用プレゼンテーションエリア（`.slide`）内のコードブロックに対しては、二重適用やレイアウト崩れを防ぐためコピーボタンを生成しません。

## 動作・インタラクション仕様
- **動的生成**:
  - ページロード時にJSがすべての `<pre>` 要素を走査し、対象要素の直前に `.code-block-wrapper` ラッパーを挿入します。その後、`<pre>` 自体と新しく生成した `button` 要素をラッパーの中に格納します。
- **クリップボード連携**:
  - コピーボタンがクリックされると、JSは `pre <code>` からテキストデータを抽出し、モダンなブラウザAPIである `navigator.clipboard.writeText` を用いてクリップボードに書き込みます。
- **視覚的フィードバック**:
  - コピー成功時、ボタンの表記を「📋 コピー」から「✅ コピー完了」に切り替え、クラス `.code-block__copy-btn--copied` を追加してボタン色をソフトなグリーン系に変更します。
  - 2秒経過すると、ボタンの状態（表記とクラス）は自動的に初期状態にロールバックします。
- **レイアウト配慮**:
  - コピーボタンがコードブロックの右上に絶対配置されるため、コードの1行目とボタンが重ならないよう、CSSで `<pre>` 要素の上部（`padding-top`）に適切な余白を確保します。
