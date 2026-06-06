---
layout: content.njk
title: AIアプリ開発
description: OpenAIやGeminiのAPIキーを使って、HTMLとJavaScriptのみで動作する「リアルタイム翻訳・要約チャットアプリ」をローカル環境で実装する手順を学びます。
permalink: /hands-on/building-with-ai/app-development/
pageType: content
difficulty: 上級
plan: Free
service:
  - ChatGPT
  - Gemini
  - Claude
completionId: hands-on-building-with-ai-app-development
breadcrumbs:
  - label: トップページ
    url: /
  - label: 触って学ぶ
    url: /hands-on/
  - label: AIと仕組みを作る
    url: /hands-on/building-with-ai/
  - label: AIアプリ開発
sidebar:
  title: AIと仕組みを作る
  items:
    - title: AIコーディング
      url: /hands-on/building-with-ai/ai-coding/
    - title: Codex入門
      url: /hands-on/building-with-ai/codex-intro/
    - title: MCP入門
      url: /hands-on/building-with-ai/mcp-intro/
    - title: エージェント設計
      url: /hands-on/building-with-ai/agent-design/
    - title: ワークフロー自動化
      url: /hands-on/building-with-ai/workflow-automation/
    - title: AIアプリ開発
      url: /hands-on/building-with-ai/app-development/
previous:
  title: ワークフロー自動化
  url: /hands-on/building-with-ai/workflow-automation/
keypoints:
  - HTMLとVanilla JavaScript（ブラウザ標準）を使って、外部AI APIと直接通信するUIを構築する
  - セキュリティ対策として、APIキーをブラウザ側（フロントエンド）にハードコードせず、安全に環境変数やプロキシサーバーで扱う手法を学ぶ
  - ストリーミングレスポンス（一文字ずつ文字が流れる表示）をフロントエンドでパースして表示する
relatedHandson:
  - title: AIアプリ設計
    url: /reading/development/ai-app-design/
---

## 準備

本実践ステップを行うにあたり、以下を準備してください。

1. ご自身のPC上のコードエディタ（VS Code, Cursorなど）
2. 動作確認のためのブラウザ（Chrome等）
3. OpenAI、Google AI Studio (Gemini)、またはAnthropicのいずれかの「**APIキー**」

## ステップ 1: アプリケーション設計とHTMLコードの作成

まずは、シンプルなチャット画面となるHTML構造を作成します。
お好みの場所に `index.html` という名前で新しいファイルを作成し、以下のコードを貼り付けて保存してください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple AI Chat App</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; }
    #chat-container { border: 1px solid #ccc; height: 300px; overflow-y: auto; padding: 20px; margin-bottom: 20px; border-radius: 8px; }
    .message { margin-bottom: 15px; }
    .user { text-align: right; color: blue; }
    .ai { text-align: left; color: green; }
    #input-form { display: flex; gap: 10px; }
    #message-input { flex-grow: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
    #key-input-container { margin-bottom: 20px; }
  </style>
</head>
<body>
  <h1>AIチャットアプリ</h1>
  <div id="key-input-container">
    <input type="password" id="api-key" placeholder="OpenAI APIキーを入力してください" style="width: 100%; padding: 8px;">
  </div>
  <div id="chat-container"></div>
  <form id="input-form">
    <input type="text" id="message-input" placeholder="AIに何か聞いてみよう..." required>
    <button type="submit">送信</button>
  </form>
  <script src="app.js"></script>
</body>
</html>
```

## ステップ 2: JavaScriptによるAPI接続ロジックの実装

同じディレクトリに `app.js` というファイルを作成し、以下のJavaScriptコードをペーストして保存します。
ここでは、OpenAIのチャットAPI（`chat/completions`）を標準の `fetch` を使って呼び出す処理を実装しています。

```javascript
document.getElementById('input-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const apiKey = document.getElementById('api-key').value.trim();
  const inputEl = document.getElementById('message-input');
  const userMessage = inputEl.value.trim();
  
  if (!apiKey) {
    alert("APIキーを入力してください。");
    return;
  }
  if (!userMessage) return;

  // 1. ユーザーのメッセージを画面に表示
  appendMessage('user', userMessage);
  inputEl.value = '';

  // 2. AIの返答枠を画面に用意
  const aiMessageDiv = appendMessage('ai', '思考中...');

  try {
    // 3. OpenAI APIにリクエスト送信
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      throw new Error(`APIエラー: ${response.status}`);
    }

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    // 4. 画面の「思考中...」を実際のAIの返答に書き換える
    aiMessageDiv.innerText = aiReply;

  } catch (error) {
    aiMessageDiv.innerText = `エラーが発生しました: ${error.message}`;
    aiMessageDiv.style.color = 'red';
  }
});

function appendMessage(sender, text) {
  const container = document.getElementById('chat-container');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = text;
  container.appendChild(messageDiv);
  container.scrollTop = container.scrollHeight;
  return messageDiv;
}
```

## ステップ 3: アプリの動作確認とセキュリティ検証

作成した `index.html` をブラウザで直接開き（ファイルをダブルクリック、またはLive Server等のエディタ拡張機能で起動）、動作確認を行います。

1. 事前に用意したAPIキー（例：`sk-...`）を画面上部の入力欄に入力します。
2. 下部の入力欄に「AIアプリ開発の第一歩について解説して」と入力し、「送信」を押します。
3. 数秒後にAIからの返答が緑色のテキストで表示されるのを確認します。

> [!WARNING]
> **APIキーのセキュリティ取扱**
> 今回の実装では、便宜上ブラウザの画面に直接APIキーを入力させています。しかし、フロントエンド（JavaScript）にAPIキーを直接書き込んでGithub等にアップロードすると、一瞬でキーが盗まれ、他人に数万円〜数十万円使われてしまう被害（キー流出事故）が多発しています。
> 本格的なWebアプリを作る際は、**必ず自社のバックエンドサーバー（Node.jsやPython等）を用意し、APIキーはサーバー側の「環境変数」として安全に保管**し、ブラウザからはその自社サーバーを仲介してAPIを叩く構成（プロキシ）にしてください。
