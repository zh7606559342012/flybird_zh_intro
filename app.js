// Flybird 小郑工具站 · 多页渲染逻辑（原创实现）

// ---------- 顶部滚动播报 ----------
(function renderTicker() {
  const track = document.getElementById("tickerTrack");
  if (!track) return;
  const items = TICKER_ITEMS.map(t => `<span class="ticker-item">▸ ${t}</span>`).join("");
  track.innerHTML = items + items;
})();

// ---------- 导航高亮 ----------
(function highlightNav() {
  const page = (location.pathname.split("/").pop() || "index.html").replace(/\/$/, "") || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
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

function bindCopyButtons(root) {
  root.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(btn.dataset.copy); }
      catch (e) {
        const ta = document.createElement("textarea");
        ta.value = btn.dataset.copy; document.body.appendChild(ta);
        ta.select(); document.execCommand("copy"); ta.remove();
      }
      showToast(`已复制：${btn.dataset.copy}`);
    });
  });
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

// 分类页：渲染某个分类的全部工具
document.querySelectorAll("[data-tools-cat]").forEach(el => {
  const tools = TOOLS.filter(t => t.cat === el.dataset.toolsCat);
  el.innerHTML = `<div class="tool-grid">${tools.map(toolCard).join("")}</div>`;
  bindCopyButtons(el);
});

// 首页：精选工具（有邀请码或专属链接的优先）
const featuredEl = document.querySelector("[data-tools-featured]");
if (featuredEl) {
  const featured = TOOLS.filter(t => t.code || t.link).slice(0, 6);
  featuredEl.innerHTML = `<div class="tool-grid">${featured.map(toolCard).join("")}</div>`;
  bindCopyButtons(featuredEl);
}

// ---------- 视频卡（点击封面才加载播放器） ----------
function videoCard(v) {
  return `
  <article class="video-card">
    <div class="video-thumb" data-vid="${v.id}">
      <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" loading="lazy">
      <span class="play-badge">▶</span>
    </div>
    <h3>${v.title}</h3>
    ${v.desc ? `<p>${v.desc}</p>` : ""}
  </article>`;
}

function bindVideoThumbs(root) {
  root.querySelectorAll(".video-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const id = thumb.dataset.vid;
      thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="YouTube 教程视频" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    });
  });
}

// 任意视频组：<div data-videos="all|exchange|invest|training" data-limit="6">
document.querySelectorAll("[data-videos]").forEach(el => {
  const group = el.dataset.videos;
  let list = VIDEOS;
  if (group === "invest") list = INVEST_VIDEOS;
  else if (group === "training") list = TRAINING_VIDEOS;
  else if (group !== "all") list = VIDEOS.filter(v => v.cat === group);
  const limit = parseInt(el.dataset.limit || "0", 10);
  if (limit > 0) list = list.slice(0, limit);
  el.innerHTML = `<div class="video-grid">${list.map(videoCard).join("")}</div>`;
  bindVideoThumbs(el);
});

// ---------- 课程列表（投资页） ----------
function courseList(el, lessons, label) {
  el.innerHTML = `
    <div class="course-box">
      <h3>${label}</h3>
      ${lessons.map((l, i) => `
        <a class="course-item" href="https://www.youtube.com/watch?v=${l.id}" target="_blank" rel="noopener">
          <span class="course-num">${i + 1}</span>
          <span>${l.title}</span>
          <span class="course-play">▶ 观看</span>
        </a>`).join("")}
    </div>`;
}
document.querySelectorAll("[data-course]").forEach(el => {
  if (el.dataset.course === "stock") courseList(el, STOCK_COURSE, "📊 A股股票入门课 · 全 5 课");
  if (el.dataset.course === "fund") courseList(el, FUND_COURSE, "💰 支付宝基金入门课 · 全 5 课");
});

// ---------- 打赏页：USDT 地址 ----------
const usdtEl = document.getElementById("usdtAddr");
if (usdtEl && typeof DONATE !== "undefined") {
  usdtEl.textContent = DONATE.usdt_trc20;
  const btn = document.getElementById("usdtCopy");
  if (btn) btn.dataset.copy = DONATE.usdt_trc20;
  bindCopyButtons(document);
  const wx = document.getElementById("wxQr");
  const ali = document.getElementById("aliQr");
  if (wx) wx.src = DONATE.wechat_qr;
  if (ali) ali.src = DONATE.alipay_qr;
}
