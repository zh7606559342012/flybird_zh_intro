// Flybird 小郑工具站 · 渲染逻辑（原创实现）

// ---------- 顶部滚动播报 ----------
(function renderTicker() {
  const track = document.getElementById("tickerTrack");
  const items = TICKER_ITEMS.map(t => `<span class="ticker-item">▸ ${t}</span>`).join("");
  track.innerHTML = items + items; // 复制一份实现无缝滚动
})();

// ---------- 工具卡 ----------
function toolCard(tool) {
  const codeBlock = tool.code
    ? `<div class="code-row">
         <span class="code-label">邀请码</span>
         <code>${tool.code}</code>
         <button class="copy-btn" data-copy="${tool.code}">复制</button>
       </div>`
    : "";
  const mainBtn = tool.link
    ? `<a class="tool-btn" href="${tool.link}" target="_blank" rel="noopener">专属链接 →</a>`
    : "";
  const videoBtn = tool.video
    ? `<a class="tool-btn ghost" href="https://www.youtube.com/watch?v=${tool.video}" target="_blank" rel="noopener">▶ 教程视频</a>`
    : "";
  return `
  <article class="tool-card">
    <div class="tool-head">
      <span class="tool-avatar">${tool.initials}</span>
      <div>
        <h3>${tool.name}</h3>
        <p class="tool-tag">${tool.tag}</p>
      </div>
    </div>
    <p class="tool-perk">🎁 ${tool.perk}</p>
    ${codeBlock}
    <div class="tool-actions">${mainBtn}${videoBtn}</div>
  </article>`;
}

// ---------- 分类渲染 + 筛选 ----------
let activeCat = "all";
const toolSections = document.getElementById("toolSections");
const filterBar = document.getElementById("filterBar");

function renderFilters() {
  const cats = [{ id: "all", name: "全部", icon: "🗂️" }, ...CATEGORIES];
  filterBar.innerHTML = cats
    .map(c => `<button class="filter-btn ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}">${c.icon} ${c.name}</button>`)
    .join("");
  filterBar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => { activeCat = btn.dataset.cat; renderFilters(); renderTools(); });
  });
}

function renderTools() {
  toolSections.innerHTML = CATEGORIES
    .filter(cat => activeCat === "all" || cat.id === activeCat)
    .map(cat => {
      const tools = TOOLS.filter(t => t.cat === cat.id);
      if (!tools.length) return "";
      return `
      <div class="cat-block">
        <h3 class="cat-title">${cat.icon} ${cat.name}</h3>
        <div class="tool-grid">${tools.map(toolCard).join("")}</div>
      </div>`;
    })
    .join("");
  bindCopyButtons();
}

function bindCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(btn.dataset.copy); }
      catch (e) {
        const ta = document.createElement("textarea");
        ta.value = btn.dataset.copy; document.body.appendChild(ta);
        ta.select(); document.execCommand("copy"); ta.remove();
      }
      showToast(`邀请码 ${btn.dataset.copy} 已复制`);
    });
  });
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

renderFilters();
renderTools();

// ---------- 教程视频（点击封面才加载播放器，页面更快） ----------
const videoGrid = document.getElementById("videoGrid");
videoGrid.innerHTML = VIDEOS.map(v => `
  <article class="video-card">
    <div class="video-thumb" data-vid="${v.id}">
      <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy">
      <span class="play-badge">▶</span>
    </div>
    <h3>${v.title}</h3>
    <p>${v.desc}</p>
  </article>`).join("");

videoGrid.querySelectorAll(".video-thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const id = thumb.dataset.vid;
    thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="YouTube 教程视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    thumb.classList.add("playing");
  });
});
