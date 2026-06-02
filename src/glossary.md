---
layout: base.njk
title: 用語集
permalink: /glossary/
breadcrumbs:
  - label: トップページ
    url: /
  - label: 用語集
---

# 用語集

生成AIの学習やワークブックの教材内でよく使われる重要な言葉を解説しています。
上の検索窓にキーワードを入力すると、リアルタイムで用語を絞り込むことができます。

<div class="glossary-container">
  <div class="glossary-search-wrapper">
    <input type="text" class="glossary-search" data-glossary-search placeholder="キーワードで用語を検索... (例: RAG, プロンプト)">
  </div>
  
  <div class="glossary-table-wrapper">
    <table class="glossary-table">
      <thead>
        <tr>
          <th scope="col" class="glossary-table__th-term">用語</th>
          <th scope="col" class="glossary-table__th-def">解説</th>
        </tr>
      </thead>
      <tbody class="glossary-list">
        <!-- アルファベット・英数字 -->
        <tr class="glossary-item" data-search-terms="aiエージェント agent えーじぇんと 自律型">
          <td class="glossary-table__term"><strong>AIエージェント (AI Agent)</strong></td>
          <td class="glossary-table__def">自律的に目標を設定し、思考し、ツールを使ってタスクを実行するAIシステムのことです。人間が細かく指示を出さなくても、「これをしておいて」と大まかな指示を出すだけで、自分で解決手段を考えて実行してくれます。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="api あぴ えーぴーあい 接続 外部連携">
          <td class="glossary-table__term"><strong>API (Application Programming Interface)</strong></td>
          <td class="glossary-table__def">ソフトウェアやプログラム同士が、機能やデータをやり取りするための「接続口」のことです。これを利用することで、自分が作ったシステムからChatGPTなどのAIモデルを呼び出して使うことができます。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="embedding 埋め込み うめこみ えんべでぃんぐ 意味">
          <td class="glossary-table__term"><strong>Embedding (埋め込み)</strong></td>
          <td class="glossary-table__def">言葉や文章の意味を、コンピューターが計算しやすいように「数字の集まり（ベクトル）」に変換する技術のことです。これによって、AIは言葉の「表面的な文字の一致」だけでなく、「意味の近さ」を判断できるようになります。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="llm 大規模言語モデル だいきぼげんごもでる gpt gemini claude">
          <td class="glossary-table__term"><strong>LLM (Large Language Model / 大規模言語モデル)</strong></td>
          <td class="glossary-table__def">膨大なテキストデータを学習し、人間のように自然な文章を理解・生成できるように設計されたAIモデルのことです。「GPT-4o」や「Gemini 1.5 Pro」、「Claude 3.5 Sonnet」などがこれに該当します。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="mcp model context protocol モデルコンテキストプロトコール 外部ツール 接続 規格">
          <td class="glossary-table__term"><strong>MCP (Model Context Protocol)</strong></td>
          <td class="glossary-table__def">AIモデル（Claudeなど）と、外部のツールやデータ（PC内のファイル、データベース、APIなど）を安全かつ簡単に接続するための共通ルール（規格）のことです。Anthropic社によって提唱されました。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="rag 検索拡張生成 けんさくかくちょうせいせい 社内データ 外部検索">
          <td class="glossary-table__term"><strong>RAG (Retrieval-Augmented Generation / 検索拡張生成)</strong></td>
          <td class="glossary-table__def">AIが質問に回答する際、社内文書やインターネット上の最新情報などを「検索」し、その検索結果を参考にして回答を組み立てる技術です。AIが学習していない独自のデータや、最新情報に基づいて正確な回答をさせたい時に利用されます。</td>
        </tr>
        <!-- カタカナ・日本語 -->
        <tr class="glossary-item" data-search-terms="カスタムgpt projects ぷろじぇくと じーぴーてぃー 専用ボット mygpt">
          <td class="glossary-table__term"><strong>カスタムGPT / Projects</strong></td>
          <td class="glossary-table__def">ChatGPT（カスタムGPT）やClaude（Projects）などのツールにおいて、特定の用途やルール、ファイルを持たせた「自分専用のAIチャットボット」を簡単に作成できる機能のことです。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="トークン token とーくん 文字数 料金 制限">
          <td class="glossary-table__term"><strong>トークン (Token)</strong></td>
          <td class="glossary-table__def">AIが文章を処理する際の、最小の「文字のカタマリ」の単位です。日本語の場合、およそ1文字〜数文字が「1トークン」としてカウントされます。AIの利用料金や、一度に処理できる情報の長さは、このトークン数で測られます。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="ハルシネーション hallucination はるしねーしょん 幻覚 嘘 まちがい">
          <td class="glossary-table__term"><strong>ハルシネーション (Hallucination / 幻覚)</strong></td>
          <td class="glossary-table__def">AIがもっともらしい嘘（事実とは異なる情報）を、まるで事実であるかのように自信満々に生成してしまう現象のことです。生成AIを利用する際は、このハルシネーションが発生する前提で、情報の裏付けをとる（ファクトチェック）ことが重要です。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="プロンプト prompt ぷろんぷと 指示文 質問 呪文">
          <td class="glossary-table__term"><strong>プロンプト (Prompt)</strong></td>
          <td class="glossary-table__def">AIに対して送る「指示文」や「質問」のことです。AIから精度の高い回答を引き出すために、プロンプトを工夫して設計する技術をプロンプトエンジニアリングと呼びます。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="ベクトルデータベース db べくとるでーたべーす 検索 高速">
          <td class="glossary-table__term"><strong>ベクトルデータベース</strong></td>
          <td class="glossary-table__def">データを「数字の集まり（ベクトル）」として保存し、意味が似ているデータを高速に検索できるように特化したデータベースのことです。主にRAGなどの仕組みにおいて、関連ドキュメントを素早く見つけるために使われます。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="マルチモーダルai multimodal まるちもーだる 画像認識 音声">
          <td class="glossary-table__term"><strong>マルチモーダルAI (Multimodal AI)</strong></td>
          <td class="glossary-table__def">テキスト（文字）だけでなく、画像、音声、動画など、複数の異なる種類の情報を同時に理解・処理できるAIのことです。例えば、画像のスケッチを見せて「これをWebページ用のHTMLコードにして」と指示できるのは、この機能のおかげです。</td>
        </tr>
        <tr class="glossary-item" data-search-terms="ローカルllm ろーかる インフラ セキュリティ 機密情報 オフライン">
          <td class="glossary-table__term"><strong>ローカルLLM</strong></td>
          <td class="glossary-table__def">インターネット上のサーバー（クラウド）を使わず、自身の持っているパソコン（ローカル環境）の内部だけで動作させるAIモデルのことです。データが外部に送信されないため、セキュリティや機密情報の観点で非常に優れています。</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p class="glossary-no-results" hidden>入力されたキーワードに一致する用語は見つかりませんでした。</p>
</div>
