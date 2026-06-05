(function () {
  var storageKey = "generative-ai-workbook.learningProgress.v1";
  var emptyState = {
    version: 1,
    completed: {}
  };

  function cloneEmptyState() {
    return {
      version: emptyState.version,
      completed: {}
    };
  }

  function readState() {
    try {
      var rawValue = window.localStorage.getItem(storageKey);
      if (!rawValue) {
        return cloneEmptyState();
      }

      var parsedValue = JSON.parse(rawValue);
      if (!parsedValue || typeof parsedValue !== "object" || typeof parsedValue.completed !== "object") {
        return cloneEmptyState();
      }

      return {
        version: 1,
        completed: parsedValue.completed || {}
      };
    } catch (error) {
      return cloneEmptyState();
    }
  }

  function writeState(state) {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function getCompletedItems(state) {
    return Object.keys(state.completed)
      .filter(function (completionId) {
        return state.completed[completionId] && state.completed[completionId].completed === true;
      })
      .map(function (completionId) {
        return {
          id: completionId,
          title: state.completed[completionId].title || completionId,
          updatedAt: state.completed[completionId].updatedAt || ""
        };
      })
      .sort(function (a, b) {
        return b.updatedAt.localeCompare(a.updatedAt);
      });
  }

  function isCompleted(completionId) {
    var state = readState();
    return Boolean(state.completed[completionId] && state.completed[completionId].completed);
  }

  function getCompletionIdFromUrl(url) {
    if (!url) return "";
    // プレフィックスやドメインを削除してパスにする
    var path = url;
    // ローカルプレビュー環境や本番環境どちらのパス構造でも一貫して completionId にマッピングする
    path = path.replace(/^(https?:\/\/[^\/]+)?\/generative-ai-workbook/, "");
    // ドメイン直下の場合の考慮
    if (path.indexOf("http") === 0) {
      path = new URL(path).pathname;
    }
    return path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  }

  function updateCompletionButtons() {
    var buttons = document.querySelectorAll("[data-completion-id]");
    buttons.forEach(function (button) {
      var completionId = button.getAttribute("data-completion-id");
      var completed = isCompleted(completionId);

      button.setAttribute("aria-pressed", completed ? "true" : "false");
      button.dataset.completionState = completed ? "completed" : "todo";
      button.textContent = completed ? "完了済み" : "完了にする";
    });

    // 個別の詳細教材用：自身が完了している場合のみ表示
    var singleCheckElements = document.querySelectorAll("[data-completion-check-id]");
    singleCheckElements.forEach(function (el) {
      var completionId = el.getAttribute("data-completion-check-id");
      var completed = isCompleted(completionId);
      
      el.textContent = completed ? "✅" : "";
      el.dataset.completionState = completed ? "completed" : "todo";
      
      var card = el.closest(".learning-card");
      if (card) {
        card.classList.toggle("is-completed", completed);
      }
    });

    // 親カテゴリ用：紐づくすべての所属教材が完了している場合のみ表示
    var groupCheckElements = document.querySelectorAll("[data-completion-check-ids]");
    groupCheckElements.forEach(function (el) {
      var rawIds = el.getAttribute("data-completion-check-ids") || "";
      var completionIds = rawIds.split(",").filter(Boolean);
      
      var allCompleted = completionIds.length > 0 && completionIds.every(function (id) {
        return isCompleted(id);
      });

      el.textContent = allCompleted ? "✅" : "";
      el.dataset.completionState = allCompleted ? "completed" : "todo";

      var card = el.closest(".learning-card");
      if (card) {
        card.classList.toggle("is-completed", allCompleted);
      }
    });

    // サイドバーの教材用：URLから動的に判定して完了時のみ ✅ を表示
    var sidebarStatusElements = document.querySelectorAll("[data-completion-status-url]");
    sidebarStatusElements.forEach(function (el) {
      var url = el.getAttribute("data-completion-status-url");
      var completionId = getCompletionIdFromUrl(url);
      if (completionId) {
        var completed = isCompleted(completionId);
        el.textContent = completed ? "✅" : "";
        el.dataset.completionState = completed ? "completed" : "todo";
      }
    });
  }

  function toggleCompletion(button) {
    var completionId = button.getAttribute("data-completion-id");
    if (!completionId) {
      return;
    }

    var title = button.getAttribute("data-completion-title") || document.title || completionId;
    var state = readState();
    var completed = Boolean(state.completed[completionId] && state.completed[completionId].completed);

    if (completed) {
      delete state.completed[completionId];
    } else {
      state.completed[completionId] = {
        completed: true,
        title: title,
        updatedAt: new Date().toISOString()
      };

      // 完了にした（チェックを入れた）タイミングでサイドバーを自動で開く
      var sidebarDetails = document.querySelector(".content-sidebar__details");
      if (sidebarDetails) {
        sidebarDetails.setAttribute("open", "");
      }
    }

    writeState(state);
    updateCompletionButtons();
    renderPanel();

    // 完了ボタン押下時にツールチップが表示中であれば非表示にする
    var tooltip = document.querySelector("[data-completion-tooltip]");
    if (tooltip) {
      tooltip.classList.remove("is-visible");
      tooltip.setAttribute("aria-hidden", "true");
    }
  }

  function renderPanel() {
    var list = document.querySelector("[data-learning-progress-list]");
    var summary = document.querySelector("[data-learning-progress-summary]");
    if (!list || !summary) {
      return;
    }

    var state = readState();
    var completedItems = getCompletedItems(state);

    summary.textContent = completedItems.length
      ? "完了済み教材: " + completedItems.length + "件"
      : "完了済みの教材はまだありません。";

    list.innerHTML = "";

    completedItems.forEach(function (item) {
      var listItem = document.createElement("li");
      listItem.className = "learning-progress-panel__item";

      var title = document.createElement("span");
      title.className = "learning-progress-panel__item-title";
      title.textContent = item.title;

      var status = document.createElement("span");
      status.className = "learning-progress-panel__item-status";
      status.textContent = "完了";

      listItem.appendChild(title);
      listItem.appendChild(status);
      list.appendChild(listItem);
    });
  }

  function setPanelOpen(open) {
    var panel = document.querySelector("[data-learning-progress-panel]");
    if (!panel) {
      return;
    }

    panel.hidden = !open;
    document.documentElement.classList.toggle("is-learning-progress-open", open);

    if (open) {
      renderPanel();
      var closeButton = panel.querySelector(".learning-progress-panel__close");
      if (closeButton) {
        closeButton.focus();
      }
    }
  }

  function showMessage(message) {
    var messageElement = document.querySelector("[data-learning-progress-message]");
    if (messageElement) {
      messageElement.textContent = message;
    }
  }
  function exportJson() {
    var state = readState();
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var link = document.createElement("a");
    var url = URL.createObjectURL(blob);

    link.href = url;
    link.download = "generative-ai-workbook-learning-progress.json";
    link.click();
    URL.revokeObjectURL(url);
    showMessage("学習状況をJSONでエクスポートしました。");
  }

  function importJson(file) {
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.addEventListener("load", function () {
      try {
        var importedState = JSON.parse(String(reader.result || ""));
        if (!importedState || typeof importedState !== "object" || typeof importedState.completed !== "object") {
          throw new Error("Invalid learning progress JSON.");
        }

        writeState({
          version: 1,
          completed: importedState.completed
        });
        updateCompletionButtons();
        renderPanel();
        showMessage("学習状況をJSONからインポートしました。");
      } catch (error) {
        showMessage("JSONを読み込めませんでした。エクスポートした学習状況ファイルを選択してください。");
      }
    });
    reader.readAsText(file);
  }

  function resetState() {
    if (!window.confirm("学習状況をすべてリセットしますか？\nこの操作は取り消せません。")) {
      return;
    }

    try {
      writeState(cloneEmptyState());
      updateCompletionButtons();
      renderPanel();
      showMessage("学習状況をリセットしました。");
    } catch (error) {
      showMessage("リセットに失敗しました。");
    }
  }

  document.addEventListener("click", function (event) {
    var tooltip = event.target.closest("[data-completion-tooltip]");
    if (tooltip) {
      tooltip.classList.remove("is-visible");
      tooltip.setAttribute("aria-hidden", "true");
      return;
    }

    var completionButton = event.target.closest("[data-completion-id]");
    if (completionButton) {
      toggleCompletion(completionButton);
      return;
    }

    if (event.target.closest("[data-learning-progress-open]")) {
      setPanelOpen(true);
      return;
    }

    if (event.target.closest("[data-learning-progress-close]")) {
      setPanelOpen(false);
      return;
    }

    if (event.target.closest("[data-learning-progress-export]")) {
      exportJson();
      return;
    }

    if (event.target.closest("[data-learning-progress-reset]")) {
      resetState();
    }
  });
  document.addEventListener("change", function (event) {
    if (event.target.matches("[data-learning-progress-import]")) {
      importJson(event.target.files[0]);
      event.target.value = "";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setPanelOpen(false);
    }
  });

  // 外部リンクを別タブで開く処理
  function applyExternalLinks() {
    var links = document.querySelectorAll("a[href^='http']");
    links.forEach(function (link) {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  // GitHub-style Alertsの変換処理
  function applyAlertStyles() {
    var blockquotes = document.querySelectorAll("blockquote");
    blockquotes.forEach(function (bq) {
      var html = bq.innerHTML;
      // <p> タグの開始を許容する正規表現パターンに修正
      var match = html.match(/^\s*(?:<p>)?\s*\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i);
      if (match) {
        var alertType = match[1].toUpperCase();
        
        // [!TIP] の文字列のみを除去（<p>タグは維持）
        var cleanHtml = html.replace(/\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i, "");
        var icon = "💡";
        var label = "TIP";
        var svgIcon = "";
        
        var chatBubblePath = "M12 2C6.5 2 2 6.5 2 12c0 2.2.7 4.2 2 5.8L3 21l3.2-1c1.8 1.3 3.9 2 5.8 2 5.5 0 10-4.5 10-10S17.5 2 12 2z";
        
        if (alertType === "NOTE") {
          icon = "ℹ️";
          label = "NOTE";
          svgIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="' + chatBubblePath + '" fill="currentColor"/>' +
            '<circle cx="12" cy="8" r="1.5" fill="#FFF"/>' +
            '<rect x="11" y="11" width="2" height="6" rx="1" fill="#FFF"/>' +
            '</svg>';
        }
        else if (alertType === "IMPORTANT") {
          icon = "📢";
          label = "IMPORTANT";
          svgIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="' + chatBubblePath + '" fill="currentColor"/>' +
            '<rect x="11" y="7" width="2" height="6" rx="1" fill="#FFF"/>' +
            '<circle cx="12" cy="15.5" r="1.5" fill="#FFF"/>' +
            '</svg>';
        }
        else if (alertType === "WARNING") {
          icon = "⚠️";
          label = "WARNING";
          svgIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="' + chatBubblePath + '" fill="currentColor"/>' +
            '<rect x="11" y="7" width="2" height="6" rx="1" fill="#FFF"/>' +
            '<circle cx="12" cy="15.5" r="1.5" fill="#FFF"/>' +
            '</svg>';
        }
        else if (alertType === "CAUTION") {
          icon = "🚨";
          label = "CAUTION";
          svgIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="' + chatBubblePath + '" fill="currentColor"/>' +
            '<rect x="11" y="7" width="2" height="6" rx="1" fill="#FFF"/>' +
            '<circle cx="12" cy="15.5" r="1.5" fill="#FFF"/>' +
            '</svg>';
        }
        else {
          // TIP
          svgIcon = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="' + chatBubblePath + '" fill="currentColor"/>' +
            '<path d="M12 6c-2.2 0-4 1.8-4 4 0 1.4.7 2.6 1.7 3.3V15c0 .6.4 1 1 1h2.6c.6 0 1-.4 1-1v-1.7c1-.7 1.7-1.9 1.7-3.3 0-2.2-1.8-4-4-4zm1.5 11h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" fill="#FFF"/>' +
            '</svg>';
        }
        
        // トリガーバッジの作成
        var trigger = document.createElement("span");
        trigger.className = "alert-trigger alert-trigger--" + alertType.toLowerCase();
        trigger.setAttribute("tabindex", "0");
        trigger.setAttribute("role", "button");
        trigger.setAttribute("aria-label", label + "の情報を表示");

        // 吹き出し要素の作成
        var tooltip = document.createElement("span");
        tooltip.className = "alert-tooltip alert-tooltip--" + alertType.toLowerCase();
        tooltip.innerHTML = "<span class='alert-tooltip__header'><span class='alert-tooltip__icon'>" + icon + "</span><span class='alert-tooltip__label'>" + label + "</span></span><span class='alert-tooltip__content'>" + cleanHtml + "</span>";
        
        var iconSpan = document.createElement("span");
        iconSpan.className = "alert-trigger__icon";
        iconSpan.innerHTML = svgIcon;

        trigger.appendChild(iconSpan);
        trigger.appendChild(tooltip);

        // 衝突検知と動的ポジショニングの追加
        function updateTooltipPosition() {
          if (window.innerWidth <= 720) return; // モバイル表示時は処理をスキップ

          var triggerRect = trigger.getBoundingClientRect();
          var headerHeight = 108; // 固定ヘッダーの高さ (64px site-header + 44px context-header)
          var spaceAbove = triggerRect.top - headerHeight;
          var tooltipHeight = tooltip.offsetHeight || 150;

          if (spaceAbove < tooltipHeight + 10) {
            tooltip.classList.add("alert-tooltip--bottom");
          } else {
            tooltip.classList.remove("alert-tooltip--bottom");
          }
        }

        trigger.addEventListener("mouseenter", updateTooltipPosition);
        trigger.addEventListener("focusin", updateTooltipPosition);

        // 挿入先要素の検証（上方向に遡って最も近い見出しを探す）
        var heading = null;
        var prev = bq.previousElementSibling;
        while (prev) {
          var tagName = prev.tagName.toUpperCase();
          if (tagName === "H2" || tagName === "H3" || tagName === "H4") {
            heading = prev;
            break;
          }
          prev = prev.previousElementSibling;
        }

        if (heading) {
          heading.appendChild(trigger);
        } else {
          // 見出しがない場合は元の位置にスタンドアロンバッジとして挿入する
          trigger.classList.add("alert-trigger--standalone");
          bq.parentNode.insertBefore(trigger, bq);
        }

        // 元の blockquote は非表示にする
        bq.style.display = "none";
      }
    });
  }

  // サイドバーアコーディオン展開時のバックドロップ制御
  var sidebarDetails = document.querySelector(".content-sidebar__details");
  if (sidebarDetails) {
    if (window.innerWidth <= 720) {
      sidebarDetails.removeAttribute("open");
    }

    // バックドロップ要素を動的に作成してサイドバーの直前に挿入
    var sidebarBackdrop = document.createElement("div");
    sidebarBackdrop.className = "content-sidebar__backdrop";
    sidebarDetails.parentNode.insertBefore(sidebarBackdrop, sidebarDetails);

    // detailsのトグル（開閉）イベントを監視
    sidebarDetails.addEventListener("toggle", function () {
      if (sidebarDetails.open) {
        sidebarBackdrop.classList.add("is-visible");
      } else {
        sidebarBackdrop.classList.remove("is-visible");
      }
    });

    // バックドロップクリック時にサイドバーを閉じる
    sidebarBackdrop.addEventListener("click", function () {
      sidebarDetails.removeAttribute("open");
    });
  }

  // 用語集のインクリメンタル検索機能
  function applyGlossarySearch() {
    var searchInput = document.querySelector("[data-glossary-search]");
    var glossaryItems = document.querySelectorAll(".glossary-item");
    var noResultsMessage = document.querySelector(".glossary-no-results");
    var glossaryTableWrapper = document.querySelector(".glossary-table-wrapper");
    
    if (!searchInput) return;

    searchInput.addEventListener("input", function (event) {
      var query = event.target.value.toLowerCase().trim();
      var hasVisibleItems = false;

      glossaryItems.forEach(function (item) {
        var title = item.querySelector(".glossary-table__term").textContent.toLowerCase();
        var content = item.querySelector(".glossary-table__def").textContent.toLowerCase();
        var searchTerms = item.getAttribute("data-search-terms") || "";
        
        // タイトル、解説、または検索用タグのいずれかにヒットする場合に表示
        if (title.indexOf(query) !== -1 || content.indexOf(query) !== -1 || searchTerms.toLowerCase().indexOf(query) !== -1) {
          item.hidden = false;
          hasVisibleItems = true;
        } else {
          item.hidden = true;
        }
      });

      if (noResultsMessage) {
        noResultsMessage.hidden = hasVisibleItems;
      }
      if (glossaryTableWrapper) {
        glossaryTableWrapper.hidden = !hasVisibleItems;
      }
    });
  }

  // スクロール最下部検知と完了誘導ツールチップ表示
  function applyCompletionTooltipScroll() {
    var tooltip = document.querySelector("[data-completion-tooltip]");
    var button = document.querySelector(".completion-button[data-completion-id]");
    if (!tooltip || !button) return;

    var completionId = button.getAttribute("data-completion-id");
    // すでに完了している場合はスクロール検知・誘導を行わない
    if (isCompleted(completionId)) return;

    var hasShown = false;

    function onScroll() {
      if (hasShown) return;

      var scrollHeight = document.documentElement.scrollHeight;
      var scrollPosition = window.innerHeight + window.scrollY;

      // ページ最下部から 30px 以内に到達したか判定
      if (scrollHeight - scrollPosition <= 30) {
        hasShown = true;
        showTooltip();
        window.removeEventListener("scroll", onScroll);
      }
    }

    function showTooltip() {
      // ユーザーが最下部到達前に完了済みにした場合は表示しない
      if (isCompleted(completionId)) return;

      tooltip.classList.add("is-visible");
      tooltip.setAttribute("aria-hidden", "false");

      // 3秒後に自動非表示
      setTimeout(function () {
        hideTooltip();
      }, 3000);
    }

    function hideTooltip() {
      tooltip.classList.remove("is-visible");
      tooltip.setAttribute("aria-hidden", "true");
    }

    window.addEventListener("scroll", onScroll);
  }

  // コードブロックへのコピーボタン自動配置とイベントバインド
  function applyCodeBlockCopyButtons() {
    var codeBlocks = document.querySelectorAll("pre");
    codeBlocks.forEach(function (pre) {
      // 親がすでにラッパーになっているか、あるいはスライドなどの対象外かチェック
      if (pre.parentElement.classList.contains("code-block-wrapper") || pre.closest(".slide")) return;

      // ラッパーの作成
      var wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";

      // コピーボタンの作成
      var copyBtn = document.createElement("button");
      copyBtn.className = "code-block__copy-btn";
      copyBtn.type = "button";
      copyBtn.setAttribute("aria-label", "コードをコピー");
      copyBtn.innerHTML = '<span class="code-block__copy-icon">📋</span>コピー';

      // DOMの再構成: preの前にwrapperを置き、その中にpreとcopyBtnを格納
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(copyBtn);

      // コピー処理
      copyBtn.addEventListener("click", function () {
        var codeEl = pre.querySelector("code");
        var codeText = codeEl ? codeEl.innerText : pre.innerText;

        navigator.clipboard.writeText(codeText).then(function () {
          var originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="code-block__copy-icon">✅</span>コピー完了';
          copyBtn.classList.add("code-block__copy-btn--copied");
          setTimeout(function () {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove("code-block__copy-btn--copied");
          }, 2000);
        }).catch(function (err) {
          console.error("Failed to copy code: ", err);
        });
      });
    });
  }

  applyExternalLinks();
  applyAlertStyles();
  applyGlossarySearch();
  updateCompletionButtons();
  renderPanel();
  applyCompletionTooltipScroll();
  applyCodeBlockCopyButtons();
})();
