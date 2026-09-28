/*
HTG Maps Wiki controller
Structured source edition

Source map
  WIKI-01  Data indexes, DOM bindings, and live state
  WIKI-02  Shared text helpers and view navigation
  WIKI-03  Filtering and rendering
  WIKI-04  Wiki interactions
  WIKI-05  Startup
*/

(function () {
    "use strict";

    // ============================================================================
    // [WIKI-01] DATA INDEXES + DOM BINDINGS + LIVE STATE
    // ============================================================================
    var data = window.HTGWikiData || {};
    var entries = Array.isArray(data.entries) ? data.entries.slice() : [];
    var byId = Object.create(null);
    entries.forEach(function (entry) {
        byId[entry.id] = entry;
    });

    var body = document.body;
    var navButtons = Array.prototype.slice.call(document.querySelectorAll("[data-app-view]"));
    var views = Array.prototype.slice.call(document.querySelectorAll("[data-view]"));
    var mapOnly = Array.prototype.slice.call(document.querySelectorAll("[data-map-only]"));
    var savedScroll = { wiki: 0, settings: 0 };
    var activeView = "maps";

    var searchInput = document.getElementById("wikiSearch");
    var clearSearch = document.getElementById("clearWikiSearch");
    var categoryFilters = document.getElementById("wikiCategoryFilters");
    var resultCount = document.getElementById("wikiResultCount");
    var activeCategoryLabel = document.getElementById("wikiActiveCategory");
    var results = document.getElementById("wikiResults");
    var emptyState = document.getElementById("wikiEmptyState");
    var article = document.getElementById("wikiArticle");
    var entryCount = document.getElementById("wikiEntryCount");
    var showTipsButton = document.getElementById("showTipsButton");

    var wikiCategory = "All";
    var activeEntryId = entries.length ? entries[0].id : null;

    // ============================================================================
    // [WIKI-02] TEXT HELPERS + VIEW NAVIGATION
    // ============================================================================
    function escapeHtml(value) {
        return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[character];
        });
    }

    function normalize(value) {
        return String(value || "")
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function searchableText(entry) {
        return [
            entry.title,
            entry.category,
            entry.type,
            entry.summary,
            (entry.details || []).join(" "),
            (entry.tags || []).join(" ")
        ].join(" ");
    }

    function activateView(nextView) {
        if (["maps", "wiki", "settings"].indexOf(nextView) === -1) {
            nextView = "maps";
        }

        if (activeView !== "maps") {
            savedScroll[activeView] = window.scrollY || 0;
        }

        activeView = nextView;
        body.setAttribute("data-active-view", nextView);

        views.forEach(function (view) {
            view.hidden = view.getAttribute("data-view") !== nextView;
        });

        navButtons.forEach(function (button) {
            var isActive = button.getAttribute("data-app-view") === nextView;
            button.classList.toggle("is-active", isActive);
            if (isActive) {
                button.setAttribute("aria-current", "page");
            } else {
                button.removeAttribute("aria-current");
            }
        });

        mapOnly.forEach(function (element) {
            element.hidden = nextView !== "maps";
        });

        if (nextView === "maps") {
            window.scrollTo(0, 0);
            window.requestAnimationFrame(function () {
                window.dispatchEvent(new Event("resize"));
            });
        } else {
            var restore = savedScroll[nextView] || 0;
            window.requestAnimationFrame(function () {
                window.scrollTo(0, restore);
            });
        }
    }

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            activateView(button.getAttribute("data-app-view"));
        });
    });

    /* Switch to Maps before app.js opens the existing map-tips tour. */
    if (showTipsButton) {
        showTipsButton.addEventListener("click", function () {
            activateView("maps");
        }, true);
    }

    // ============================================================================
    // [WIKI-03] FILTERING + RENDERING
    // ============================================================================
    function filteredEntries() {
        var query = searchInput ? normalize(searchInput.value.trim()) : "";
        return entries.filter(function (entry) {
            if (wikiCategory !== "All" && entry.category !== wikiCategory) {
                return false;
            }
            return !query || normalize(searchableText(entry)).indexOf(query) !== -1;
        });
    }

    function renderCategoryFilters() {
        if (!categoryFilters) return;
        var categories = ["All"].concat(Array.from(new Set(entries.map(function (entry) {
            return entry.category;
        }))).sort());

        categoryFilters.innerHTML = categories.map(function (category) {
            return '<button type="button" class="wiki-category-button' +
                (category === wikiCategory ? ' is-active' : '') +
                '" data-wiki-category="' + escapeHtml(category) + '">' +
                escapeHtml(category) +
                '</button>';
        }).join("");
    }

    function renderResults() {
        if (!results) return;
        var list = filteredEntries();

        if (resultCount) {
            resultCount.textContent = list.length + (list.length === 1 ? " result" : " results");
        }
        if (activeCategoryLabel) {
            activeCategoryLabel.textContent = wikiCategory === "All" ? "" : wikiCategory;
        }
        if (emptyState) {
            emptyState.hidden = list.length !== 0;
        }

        results.innerHTML = list.map(function (entry) {
            return '<button type="button" class="wiki-result-button' +
                (entry.id === activeEntryId ? ' is-active' : '') +
                '" data-wiki-entry="' + escapeHtml(entry.id) + '">' +
                '<span class="wiki-result-heading">' +
                    '<span class="wiki-result-title">' + escapeHtml(entry.title) + '</span>' +
                    '<span class="wiki-result-type">' + escapeHtml(entry.type || "") + '</span>' +
                '</span>' +
                '<span class="wiki-result-summary">' + escapeHtml(entry.summary || "") + '</span>' +
            '</button>';
        }).join("");
    }

    function renderArticle(entryId, moveIntoView) {
        if (!article) return;
        var entry = byId[entryId];
        if (!entry) {
            article.innerHTML = '<p class="wiki-empty">Choose an entry from the Wiki.</p>';
            return;
        }

        activeEntryId = entry.id;

        var details = (entry.details || []).map(function (detail) {
            return "<li>" + escapeHtml(detail) + "</li>";
        }).join("");

        var tags = (entry.tags || []).map(function (tag) {
            return '<span class="wiki-tag">' + escapeHtml(tag) + "</span>";
        }).join("");

        var related = (entry.related || []).map(function (relatedId) {
            var relatedEntry = byId[relatedId];
            if (!relatedEntry) return "";
            return '<button type="button" class="wiki-related-button" data-wiki-entry="' +
                escapeHtml(relatedEntry.id) + '">' + escapeHtml(relatedEntry.title) + "</button>";
        }).join("");

        article.innerHTML =
            '<p class="wiki-article-kicker">' +
                escapeHtml(entry.category || "Wiki") +
                (entry.type ? " · " + escapeHtml(entry.type) : "") +
            '</p>' +
            '<h2>' + escapeHtml(entry.title) + '</h2>' +
            '<p class="wiki-article-summary">' + escapeHtml(entry.summary || "") + '</p>' +
            (details ? '<ul class="wiki-detail-list">' + details + '</ul>' : '') +
            (tags ? '<div class="wiki-tags" aria-label="Tags">' + tags + '</div>' : '') +
            (related ? '<section class="wiki-related-section"><h3>Related</h3><div class="wiki-related-list">' + related + '</div></section>' : '');

        renderResults();

        if (moveIntoView && window.matchMedia("(max-width: 1023px)").matches) {
            article.scrollIntoView({ behavior: "auto", block: "start" });
        }
    }

    // ============================================================================
    // [WIKI-04] WIKI INTERACTIONS
    // ============================================================================
    if (categoryFilters) {
        categoryFilters.addEventListener("click", function (event) {
            var button = event.target.closest("[data-wiki-category]");
            if (!button) return;
            wikiCategory = button.getAttribute("data-wiki-category") || "All";
            renderCategoryFilters();
            renderResults();
        });
    }

    if (results) {
        results.addEventListener("click", function (event) {
            var button = event.target.closest("[data-wiki-entry]");
            if (!button) return;
            renderArticle(button.getAttribute("data-wiki-entry"), true);
        });
    }

    if (article) {
        article.addEventListener("click", function (event) {
            var button = event.target.closest("[data-wiki-entry]");
            if (!button) return;
            renderArticle(button.getAttribute("data-wiki-entry"), false);
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", renderResults);
    }

    if (clearSearch) {
        clearSearch.addEventListener("click", function () {
            if (!searchInput) return;
            searchInput.value = "";
            searchInput.focus();
            renderResults();
        });
    }

    // ============================================================================
    // [WIKI-05] STARTUP
    // ============================================================================
    if (entryCount) {
        entryCount.textContent = entries.length;
    }

    renderCategoryFilters();
    renderResults();
    if (activeEntryId) {
        renderArticle(activeEntryId, false);
    }

    activateView(body.getAttribute("data-active-view") || "maps");
})();
