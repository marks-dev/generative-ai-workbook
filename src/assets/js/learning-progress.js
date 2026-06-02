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

    var statusElements = document.querySelectorAll("[data-completion-status]");
    statusElements.forEach(function (statusElement) {
      var completionId = statusElement.getAttribute("data-completion-status");
      statusElement.textContent = isCompleted(completionId) ? "完了" : "未実施";
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

  applyExternalLinks();
  applyAlertStyles();
  updateCompletionButtons();
  renderPanel();
})();
