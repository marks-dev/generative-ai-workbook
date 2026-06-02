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

  document.addEventListener("click", function (event) {
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
        bq.className = "alert alert--" + alertType.toLowerCase();
        
        // [!TIP] の文字列のみを除去（<p>タグは維持）
        var newHtml = html.replace(/\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i, "");
        var icon = "💡";
        var label = "TIP";
        
        if (alertType === "NOTE") { icon = "ℹ️"; label = "NOTE"; }
        else if (alertType === "IMPORTANT") { icon = "📢"; label = "IMPORTANT"; }
        else if (alertType === "WARNING") { icon = "⚠️"; label = "WARNING"; }
        else if (alertType === "CAUTION") { icon = "🚨"; label = "CAUTION"; }
        
        bq.innerHTML = "<div class='alert__header'><span class='alert__icon' aria-hidden='true'>" + icon + "</span><span class='alert__label'>" + label + "</span></div><div class='alert__content'>" + newHtml + "</div>";
      }
    });
  }

  // スマホ表示時のサイドバーアコーディオン初期化
  var sidebarDetails = document.querySelector(".content-sidebar__details");
  if (sidebarDetails && window.innerWidth <= 720) {
    sidebarDetails.removeAttribute("open");
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

  applyExternalLinks();
  applyAlertStyles();
  applyGlossarySearch();
  updateCompletionButtons();
  renderPanel();
  applyCompletionTooltipScroll();
})();
