# Content Format Design

## 目的と基本方針
本ファイルは、教材コンテンツの記述ルールおよびメディアアセットの掲載基準を定義し、AI生成時や手動執筆時の品質および一貫性を安定させることを目的とします。
- **基本方針**: 可読性の最優先、長文の回避、見出し単位での理解しやすさ、学習者が迷わない構成、AIによる高い再現性の担保。

---

## 教材種別と推奨構成
- **読んで学ぶ**: 知識習得・概念理解を目的とした説明中心の構成。余白は最小限とし、 Notion風 のスムーズな読書体験を重視します。
- **触って学ぶ**: 実践体験・操作習得を目的とした手順中心の構成。ブロック単位で区切り、余白を広めに取ります。

### 推融構成ルール（教材詳細ページ）
教材詳細（末端）ページはテンプレートによって「タイトル・概要（ヘッダー）」および「まとめ（フッター）」が自動出力されます。情報の重複露出を防ぐため、以下の記述ルールを厳守してください。
1. **フロントマター定義 (YAML)**: `title`（タイトル）と `description`（概要説明）を必須定義。**Markdown本文中に「## 概要」などの見出しや概要テキストを直接記述することは厳禁**とします。
2. **Markdown本文 (メインコンテンツ)**:
   - 「読んで学ぶ」：`## [テーマごとの見出し]` で構成。
   - 「触って学ぶ」：**「準備するもの」および「実践ステップ」はスクロール負荷低減のため必ずHTMLスライドとしてアセット化し、Markdown本文からは排除して `iframe` 埋め込み（相対パス）のみで構成**します。

---

## コンテンツ要素の記述ルール
- **学習目標**: 到達点を明確化するための箇条書き。
- **見出し階層**: `## 大項目` ＞ `### 中項目` ＞ `#### 小項目` の最大4階層とし、深くしすぎない。
- **Alert / Tip**: 注意事項やハルシネーション警告には `[!IMPORTANT]` / `[!WARNING]`、補足やノウハウには `[!TIP]` / `[!NOTE]` を使用。
- **Exercise**: 理解確認や実践課題を掲載（解答は別教材にする等の運用を許容）。
- **Code Block**: コピーしやすさを重視。全コードブロックに「📋 コピー」ボタンをJS自動生成し、ボタンと文字の重なりを防ぐCSS余白（padding-top）を確保。
- **Table**: データの比較や一覧表示において、表形式が明らかに分かりやすい場合のみ利用。
- **ハンズオン構成**: ステップごとの区切りを明確にした縦スクロール形式（ウィザード形式は不採用）。

---

## AI生成時のルール
- **推奨**: 初心者を前提にした平易な日本語、用語の初出時解説、小ステップ構成、箇条書きの活用、結論先行、太字（`**`）は本当に重要なキーワードのみに限定。
- **禁止**: 不要な前置き、長文の囲みなどの過剰な太字装飾、冗長な説明、**既存教材コンテンツの参照・模倣・記述の寄せ（合わせ）行為**（※常に本仕様書のみを正として新規生成し、再現性を担保する）。

---

## メインコンテンツのメディア掲載ガイドライン
末端の教材ページ内（メインコンテンツ）に画像、スライド、動画を掲載する場合は、以下のルールを厳密に遵守します。

### 1. 画像アセット (WebP形式に完全統一)
- **原則と配置**: ビジュアル補足が有効な場合は積極的に掲載。画像は**WebP形式（`.webp`）のみ**とし、`src/assets/images/` 配下に格納し相対パスで呼び出します。
- **AI生成動作**: AIが自動生成する際、ライセンスフリーの画像が利用可能な場合は、取得・WebP変換・格納・Markdown埋め込みを自動で実行します。

### 2. スライド (ローカルHTMLスライドへの完全統一)
- **原則と配置**: ハンズオンの「準備するもの」「実践ステップ」は、**必ずHTMLスライドとしてアセット化し、Markdown中から iframe で埋め込み**ます（外部スライドサービスの iframe 直接埋め込みは全面禁止）。スライドは `src/assets/slides/` 配下に配置します。
- **記述制約**: Eleventyのフロントマターが画面上に露出するのを防ぐため、スライドHTML内にはフロントマターを一切書かず、ピュアな静的HTMLとして作成します。
- **デザインと実装要件**: ページ番号（例: `1 / 4`）を**フッター右端**に必ず常時表示します。配色は教材と調和する**ホワイト系（明るい色合い）**に統一します。iframe読み込み時のサイズとして、幅 `100%`、高さ `450`（`style="border: 1px solid var(--color-border); border-radius: var(--border-radius-md);"`）を指定します。
- **スライドHTMLのボイラープレート**: デザインおよび動作の一貫性を保つため、新規スライドを作成する際は必ず以下のボイラープレートコードをベースとして使用します。

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

- **AI生成動作**: 必要と判断した場合、Markdown生成と同時にガイドラインに準拠したHTMLスライドモックアセットを自動で作成・格納します。

### 3. YouTube動画 (埋め込み禁止・注記付き外部リンク化)
- **原則**: 直接の iframe 埋め込みは一切禁止（将来のリンク切れやCORS警告を防止）。
- **掲載方式**: 必ず別タブで開く外部リンクとし、直前または直後に以下の共通注記を必ず配置します。
  > [!NOTE]
  > 本件に関連した、公開されているYouTube動画のURLを参考までに掲載します。リンク切れがあった場合、お手数ですが本ワークブック管理者までお知らせください。

### 4. 日本人学習者への配慮
- 掲載・紹介するメディアアセットは、学習者が混乱しないよう、**可能な限り日本語で作成・説明されているもの**を採用します。

---

## 未決事項
- Exercise詳細仕様、Alert/TipおよびハンズオンStepのビジュアルデザイン、Markdownテンプレート定義。