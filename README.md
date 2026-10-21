# Flybird 小郑 · 出海工具站（黑客帝国科技风）

多页静态站（零构建，Vercel 直接部署）：顶部福利滚动播报 + 全站导航，内容全部来自 Flybird 小郑自己的频道与旧站。

## 页面结构

| 页面 | 内容 |
| --- | --- |
| `index.html` | 首页：栏目入口、热门福利、精选专题、最新教程 |
| `exchange.html` / `broker.html` / `bank.html` / `wallet.html` / `esim.html` / `ai.html` | 六大工具分类页：品牌卡（邀请码一键复制 + 专属链接 + 教程） |
| `videos.html` | 全部教程视频（点开即播） |
| `invest.html` | 投资专区：A股入门课 5 课、基金入门课 5 课、资产配置精选、投资社群 |
| `training.html` | 自媒体 / YouTube 培训：陪跑服务 + 频道干货视频 |
| `services.html` | 业务合作：陪跑、社群、投资交易、账号购买、IT 支持、付费咨询 |
| `donate.html` | 打赏页：微信赞赏码、支付宝码、USDT (TRC20) 地址 |
| `about.html` | 关于小郑 |
| `contact.html` | 联系页：私人 TG、TG 交流群/频道/机器人、QQ、微信 |

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `data.js` | **全站数据**：工具、邀请码、视频、课程、打赏信息——日常维护只改这个文件 |
| `app.js` | 渲染与交互（工具卡、视频、课程、复制按钮） |
| `styles.css` | 全部样式（深色主题） |
| `vercel.json` | 静态部署配置（无构建、根目录直出、cleanUrls） |

> 打赏二维码与头像图片引用仓库内旧 Astro 项目的图片：`src/assets/images/wechat_pay.jpg`、`alipay1.jpg`、`person_logo.png`，请勿删除这三个文件。
> 旧版 Astro 源码（src/、astro.config.ts 等）保留在仓库中备查，当前线上生效的是本静态站（vercel.json 已配置为静态部署）。

## 日常维护

改邀请码/加工具/加视频：编辑 `data.js` 后提交，Vercel 自动重新部署。`video` 填 YouTube 链接中 `v=` 后面的 ID。
