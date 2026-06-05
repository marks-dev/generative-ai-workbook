# Content Hands-on Design (触って学ぶ)

## 目的と特徴
「触って学ぶ（hands-on）」カテゴリは、実践体験・操作習得を目的とした手順中心の教材です。
- **デザイン思想**: 各ステップの区切りを明確にし、余白を広めに取ることで実践中のスクロール負荷を低減します。
- **ディレクトリ配置**: `src/hands-on/` 配下に配置します。

---

## 推奨構成ルール
教材詳細ページではテンプレートによってタイトルや概要、まとめカードが自動出力されるため、情報の重複を防ぐために以下の記述ルールを厳守してください。

1. **フロントマター定義 (YAML)**:
   - `title`（タイトル）と `description`（概要説明）を必須定義。
   - 完了状態トラッキングのための `completionId` も必須定義。
   - **Markdown本文中に「## 概要」などの見出しや概要テキストを直接記述することは厳禁**とします。
2. **Markdown本文 (メインコンテンツ)**:
   - **「準備するもの」および「実践ステップ」は、スクロール負荷低減のため必ずHTMLスライドとしてアセット化し、Markdown本文からは排除して `iframe` 埋め込み（相対パス）のみで構成**します。外部のスライドサービスの iframe 直接埋め込みは全面禁止です。

---

## YAMLメタ情報 (フロントマター) 仕様
「触って学ぶ」教材のMarkdownファイル先頭には、以下のメタ情報を定義してください。

### 記述テンプレート
```yaml
---
title: メールを書いてみよう
description: 送信相手や状況に合わせた、分かりやすく丁寧なビジネスメールをAIと作成します。
permalink: /hands-on/getting-started/email/
pageType: content
difficulty: 初級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-getting-started-email
keypoints:
  - 送信相手（上司、取引先等）に応じた適切な敬語表現を使い分ける
  - 要件が明確で簡潔に伝わるメール構成の基本パターンを理解する
relatedHandson:
  - title: ビジネスメールの基本構造
    url: /reading/fundamentals/business-email-structure/
---
```

### メタデータ項目定義
- **title** (文字列・必須): 教材のタイトル。
- **description** (文字列・必須): 教材の概要説明。
- **permalink** (文字列・必須): 生成される公開URLパス。`/hands-on/` から開始する必要があります。
- **pageType** (文字列・必須): 常に `content` を指定します。
- **difficulty** (文字列・必須): 難易度（初級、中級、上級など）。※画面表示は廃止されましたが、絞り込みやトラッキング用に定義を維持します。
- **plan** (文字列・必須): プラン名（Freeなど）。※画面表示は廃止されましたが、内部データとして維持します。
- **service** (配列・必須): 対象となるAIサービス。※画面表示は廃止されましたが、内部データとして維持します。
- **completionId** (文字列・必須): **LocalStorageと連動して学習状況の完了状態を管理するためのユニークなID。命名規則はカテゴリとコンテンツ名をハイフンで繋いだもの（例: `hands-on-getting-started-email`）とします。**
- **keypoints** (配列・必須): 教材詳細ページの最下部「まとめカード」に表示する、抑えるべきポイント（箇条書き）を定義します。
- **relatedHandson** (配列・必須): 関連する「読んで学ぶ（reading）」教材へのリンク情報を定義します。閲覧ページが `/hands-on` の場合は、画面上では自動的に「関連読み物」としてカードリンクが表示されます。

---

## HTMLスライド仕様
ハンズオンの「準備するもの」「実践ステップ」を埋め込むためのHTMLスライドは、以下の要件を満たす必要があります。

### 1. 配置と記述制約
- スライドは `src/assets/slides/` 配下に配置し、Markdown中から iframe を使って相対パスで埋め込みます。
- Eleventyのフロントマターが画面上に露出するのを防ぐため、スライドHTML内にはフロントマターを一切書かず、ピュアな静的HTMLとして作成します。

### 2. デザイン・実装要件
- **ページ番号**: `1 / 4` などのページ番号を**フッター右端**に必ず常時表示します。
- **配色**: 教材ページと調和する**ホワイト系（明るい色合い）**に統一します。
- **iframeサイズ**: 幅 `100%`、高さ `450` とし、以下のスタイル属性を指定します。
  `style="border: 1px solid var(--color-border); border-radius: var(--border-radius-md);"`

### 3. スライドHTML of ボイラープレート
新規スライドを作成する際は、デザインおよび動作の一貫性を保つため、必ず以下のコードをベースとして使用してください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>スライドタイトル</title>
  <link rel="stylesheet" href="../../css/site.css">
  <style>
    body {
      background: var(--color-surface, #ffffff);
      margin: 0;
      padding: 24px;
      font-family: var(--font-family, sans-serif);
      height: 100vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    .slide-step {
      flex: 1;
      display: none;
      animation: fadeIn 0.4s ease-in-out forwards;
      overflow-y: auto; /* 縦溢れ時のスクロール安全対策 */
    }
    .slide-step.is-active {
      display: block;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .slide-step h2 {
      color: #2f6f73;
      font-size: 1.6rem;
      margin-top: 0;
      margin-bottom: 12px;
      border-bottom: 2px solid rgba(47, 111, 115, 0.2);
      padding-bottom: 8px;
      font-weight: 800;
    }
    .slide-step p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #555555;
      margin-bottom: 12px;
      margin-top: 0;
    }
    .prompt-box {
      background: #f5f5f5;
      border: 1px solid #dcdcdc;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column; /* 常にコピーボタンを縦積みにし、スマホの幅狭画面を圧迫しない設計 */
      gap: 8px;
    }
    .prompt-text {
      margin: 0;
      font-family: monospace;
      font-size: 0.88rem;
      color: #2f6f73;
      line-height: 1.5;
      white-space: pre-wrap;
    }
    .copy-btn {
      align-self: flex-end; /* 右下に流す */
      background: #ffffff;
      border: 1px solid #2f6f73;
      color: #2f6f73;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 600;
    }
    .copy-btn:hover {
      background: #2f6f73;
      color: #ffffff;
    }
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 12px;
      border-top: 1px solid var(--color-border, #e0e0e0);
    }
    .slide-controls {
      display: flex;
      gap: 8px;
    }
    .slide-controls button {
      background: #ffffff;
      border: 1px solid #cccccc;
      color: #2f6f73;
      padding: 6px 16px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 600;
      transition: all 0.2s;
    }
    .slide-controls button:hover:not(:disabled) {
      background: #e6f0ef;
      border-color: #2f6f73;
    }
    .slide-controls button:disabled {
      color: #cccccc;
      cursor: not-allowed;
      background: #f5f5f5;
    }
    .slide-page-number {
      font-size: 0.85rem;
      font-weight: 600;
      color: #666666;
      letter-spacing: 0.05em;
    }
    .toast {
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(47, 111, 115, 0.9);
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      z-index: 100;
    }
  </style>
</head>
<body>
  <!-- スライド 1/N: 準備するもの -->
  <div class="slide-step is-active" data-step="1">
    <h2>準備するもの</h2>
    <ul>
      <li>準備アイテム...</li>
    </ul>
  </div>

  <!-- スライド 2/N: 実践ステップ（プロンプト例） -->
  <div class="slide-step" data-step="2">
    <h2>ステップ 1: タイトル</h2>
    <p>ステップ説明文...</p>
    <div class="prompt-box">
      <p class="prompt-text" id="prompt1">コピーしたいプロンプトテキスト...</p>
      <button class="copy-btn" onclick="copyPrompt('prompt1')">📋 コピー</button>
    </div>
  </div>

  <!-- 共通フッター -->
  <div class="slide-footer">
    <div class="slide-controls">
      <button type="button" id="prev-btn" disabled>戻る</button>
      <button type="button" id="next-btn">次へ</button>
    </div>
    <div class="slide-page-number" id="page-num">1 / 2</div>
  </div>

  <div class="toast" id="toast">コピーしました！</div>

  <script>
    var current = 1;
    var steps = document.querySelectorAll('.slide-step');
    var total = steps.length;
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');
    var pageNum = document.getElementById('page-num');
    var toast = document.getElementById('toast');

    function updateSlide() {
      steps.forEach(function(step) {
        step.classList.toggle('is-active', parseInt(step.dataset.step) === current);
      });
      prevBtn.disabled = current === 1;
      nextBtn.disabled = current === total;
      pageNum.textContent = current + ' / ' + total;
    }

    prevBtn.addEventListener('click', function() {
      if (current > 1) { current--; updateSlide(); }
    });
    nextBtn.addEventListener('click', function() {
      if (current < total) { current++; updateSlide(); }
    });

    function copyPrompt(id) {
      var textEl = document.getElementById(id);
      if (!textEl) return;
      var text = textEl.innerText;
      navigator.clipboard.writeText(text).then(function() {
        toast.style.opacity = 1;
        setTimeout(function() {
          toast.style.opacity = 0;
        }, 1500);
      }).catch(function(err) {
        console.error("Failed to copy text: ", err);
      });
    }
  </script>
</body>
</html>
```

---

## AI生成時の固有ルール
- Markdown生成と同時に、上記ガイドラインに準拠したHTMLスライドモックアセットを `src/assets/slides/` 配下に自動で作成・格納する。
- ユーザーのアクションに繋がるステップ構成とし、適宜プロンプト例のコピーボタンを設置する。
- `completionId` をYAMLフロントマターに必ず付与し、学習完了時にLocalStorageに保存されるように設計する。
