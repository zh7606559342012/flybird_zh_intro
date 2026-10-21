# Flybird 小郑 · 出海工具站

仿照工具导航站版式、为 Flybird 小郑量身重构的静态网站：顶部福利滚动播报、精选专题、六大分类工具库（邀请码一键复制）、YouTube 教程视频点开即播、业务合作与关于板块。纯静态，零构建，部署到 Vercel 后秒开。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面结构（板块文案在这里改） |
| `data.js` | **工具库数据**：所有品牌、邀请码、链接、教程视频都在这里，日常维护只改这个文件 |
| `app.js` | 渲染与交互逻辑（筛选、复制邀请码、视频加载） |
| `styles.css` | 全部样式（深色主题，配色变量在文件顶部 `:root`） |
| `vercel.json` | Vercel 配置 |

## 部署到 Vercel（两种方式，任选其一）

**方式 A：GitHub 导入（推荐，后续改代码自动更新网站）**
1. 把本文件夹的全部文件传到一个 GitHub 仓库（可以新建仓库，也可以替换旧仓库 `flybird_zh_intro` 的内容）。
2. 打开 vercel.com → Add New → Project → 选择该仓库 → Framework Preset 选 `Other` → Deploy。

**方式 B：拖拽部署（最快）**
1. 打开 vercel.com/new，把整个 `flybird-site` 文件夹拖进去即可。

## 日常维护（改邀请码 / 加新工具）

打开 `data.js`，在 `TOOLS` 数组里找到对应品牌改 `code`（邀请码）和 `link`（链接）；新增工具就复制一段改内容。`video` 填 YouTube 链接中 `v=` 后面的 ID。改完提交到 GitHub，Vercel 会自动重新部署。

## 已收录（来自频道视频说明区，2026-10 整理）

- 交易所：OKX（76590941）、Bitget、Kraken（b4hp7wsp）
- 券商：BiyaPay（30524729）、BIT、IBKR 盈透
- 银行支付：Wise、StarryBlu（MHQK00K）、Wovia（HIoh6jqdyh）、LocalCard、Bitget Wallet × Fiat24
- 硬件钱包：OneKey（astin16888，9 折）
- eSIM：ClubSIM、Xesim + Eskimo、海外手机号避坑指南
- AI 工具：GamsGo（RT7J6）、PPToken、DuoPlus、账号购买小店

> BIT、IBKR、ClubSIM、DuoPlus 等暂未在视频说明区找到专属邀请链接，卡片暂时只挂了教程视频；拿到链接后在 `data.js` 里填上 `link` 即可，按钮会自动出现。
