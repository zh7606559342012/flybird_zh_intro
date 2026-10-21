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
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
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

// 页面里静态的复制按钮（如联系页）统一绑定
bindCopyButtons(document);

// ---------- 深蓝星空背景：闪烁星野 + 偶发流星（原创实现） ----------
(function starfield() {
  const canvas = document.getElementById("starCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, stars = [], meteor = null;
  function makeStars() {
    stars = [];
    const n = Math.min(240, Math.floor(W * H / 7000));
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random() * 0.55 + 0.25,
        sp: Math.random() * 0.012 + 0.003,
        ph: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.22,
        drift: Math.random() * 0.05 + 0.008,
      });
    }
  }
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    makeStars();
  }
  resize();
  window.addEventListener("resize", resize);
  function drawStar(s, t) {
    const tw = reduced ? 1 : 0.72 + 0.28 * Math.sin(t * s.sp * 60 + s.ph);
    if (s.r > 1.05) { // 大星加一层柔光晕
      ctx.globalAlpha = s.a * 0.16 * tw;
      ctx.fillStyle = s.gold ? "#ffd479" : "#9cc8ff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 4.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = s.a * tw;
    ctx.fillStyle = s.gold ? "#ffd479" : "#cfe2ff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  function drawMeteor() {
    if (!meteor) return;
    const m = meteor;
    const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 9, m.y - m.vy * 9);
    grad.addColorStop(0, "rgba(230,242,255,0.95)");
    grad.addColorStop(1, "rgba(230,242,255,0)");
    ctx.globalAlpha = 1;
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x - m.vx * 9, m.y - m.vy * 9);
    ctx.stroke();
    m.x += m.vx; m.y += m.vy; m.life--;
    if (m.life <= 0 || m.x > W + 60 || m.y > H + 60) meteor = null;
  }
  let last = 0;
  function frame(ts) {
    requestAnimationFrame(frame);
    if (ts - last < 33) return;
    last = ts;
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      drawStar(s, ts / 1000);
      if (!reduced) {
        s.y += s.drift; s.x -= s.drift * 0.35;
        if (s.y > H + 2) { s.y = -2; s.x = Math.random() * W; }
        if (s.x < -2) s.x = W + 2;
      }
    }
    ctx.globalAlpha = 1;
    if (!reduced) {
      if (!meteor && Math.random() < 0.0035) {
        meteor = { x: Math.random() * W * 0.6, y: Math.random() * H * 0.3, vx: 7 + Math.random() * 4, vy: 3.4 + Math.random() * 2, life: 46 };
      }
      drawMeteor();
    }
  }
  requestAnimationFrame(frame);
})();
