// ============================================================
// Flybird 小郑 · 全站数据（工具库 / 视频 / 课程）
// 日常维护只改这个文件：code=邀请码 link=专属链接 video=YouTube视频ID
// ============================================================

const CATEGORIES = [
  { id: "exchange", name: "加密货币交易所", icon: "₿", page: "exchange.html", desc: "买币、交易、出金，新手从这开始" },
  { id: "broker",   name: "券商与美股港股", icon: "📈", page: "broker.html", desc: "大陆身份也能开的美股港股账户" },
  { id: "bank",     name: "银行与跨境支付", icon: "🏦", page: "bank.html", desc: "多币种账户、虚拟卡、跨境转账" },
  { id: "wallet",   name: "硬件钱包",       icon: "🔐", page: "wallet.html", desc: "大额资产冷存储，私钥不出设备" },
  { id: "esim",     name: "eSIM 与海外号码", icon: "📱", page: "esim.html", desc: "低成本保号，收全球验证码" },
  { id: "ai",       name: "AI 订阅与效率工具", icon: "🤖", page: "ai.html", desc: "免海外卡订阅 AI、矩阵运营工具" },
];

const TOOLS = [
  // ---------- 加密货币交易所 ----------
  { cat: "exchange", name: "OKX 欧易", initials: "OK", tag: "全球主流交易所 · 新手入门首选", perk: "专属链接注册", code: "76590941", link: "https://www.okx.com/zh-hans/join/76590941", video: "D28s9FjRsBw" },
  { cat: "exchange", name: "Bitget", initials: "BG", tag: "跟单功能强 · 手续费全网低", perk: "专属链接注册", code: "", link: "https://partner.hdmune.cn/bg/8wzgp2lu", video: "5vLgE5qg_04" },
  { cat: "exchange", name: "Kraken 海妖", initials: "KR", tag: "老牌合规交易所 · 出金到银行卡友好", perk: "邀请码注册享奖励", code: "b4hp7wsp", link: "https://invite.kraken.com/JDNW/bqca3hqx", video: "KlEArpD1JSU" },

  // ---------- 券商与美股港股 ----------
  { cat: "broker", name: "BiyaPay", initials: "BY", tag: "USDT 直接买美股港股 · 大陆身份证开户", perk: "充值 50U 送 30U 手续费抵扣，30 天内汇款再得 10U", code: "30524729", link: "https://register.biyapay.com/fastreg?invite=30524729", video: "FYQvmJdu_7Q" },
  { cat: "broker", name: "BIT", initials: "BIT", tag: "美股终身 0 佣金 · 支持 USDT/USDC 出入金", perk: "看教程按步骤开户", code: "", link: "", video: "L52ZhjtnKSA" },
  { cat: "broker", name: "IBKR 盈透证券", initials: "IB", tag: "全球顶级券商 · 机构级平台", perk: "看教程按步骤开户", code: "", link: "", video: "4FmXZbLn-ds" },

  // ---------- 银行与跨境支付 ----------
  { cat: "bank", name: "Wise", initials: "W", tag: "多币种账户 · 跨境转账 0 隐藏费用", perk: "专属链接注册", code: "", link: "https://wise.com/invite/dic/qvs12vn", video: "PKQCmUSA37Y" },
  { cat: "bank", name: "StarryBlu", initials: "SB", tag: "新加坡多币种账户 · 护照+地址证明过审", perk: "填邀请码注册", code: "MHQK00K", link: "", video: "k65ySsr3Ops" },
  { cat: "bank", name: "Wovia 沃维亚", initials: "WV", tag: "虚拟银行卡 · 11.1U 低成本开卡", perk: "填邀请码注册", code: "HIoh6jqdyh", link: "https://app.wovia.global/?ref=HIoh6jqdyh", video: "8vjc4oX_ULo" },
  { cat: "bank", name: "Bitget Wallet × Fiat24", initials: "BW", tag: "U 卡 · 加密资产线下消费", perk: "开卡送 5U 奖励（见教程）", code: "", link: "", video: "MC1oLpL0wEw" },

  // ---------- 硬件钱包 ----------
  { cat: "wallet", name: "OneKey", initials: "1K", tag: "国产开源硬件钱包 · 代码 100% 开源", perk: "专属链接 9 折 + 手续费返还", code: "astin16888", link: "https://onekey.so/r/astin16888/shop", video: "zo7hCqgkk74" },

  // ---------- eSIM 与海外号码 ----------
  { cat: "esim", name: "ClubSIM", initials: "CS", tag: "香港号码 · 一年保号只要 6 港币", perk: "实体卡 / eSIM 两种形式", code: "", link: "", video: "g5RKvxCiHlo" },
  { cat: "esim", name: "Xesim + Eskimo", initials: "XE", tag: "eSIM 写卡器 + 全球流量方案", perk: "保号 + 一机多号组合", code: "", link: "", video: "BPszmXbbjTI" },
  { cat: "esim", name: "海外手机号避坑指南", initials: "📱", tag: "giffgaff 之后用什么？全方案对比", perk: "先看指南再下手", code: "", link: "", video: "Ob8utfMXnhE" },

  // ---------- AI 订阅与效率工具 ----------
  { cat: "ai", name: "Flybirdshop小店", initials: "🛒", tag: "AI / 社媒成品号 · 博主自营", perk: "博主自营店铺", code: "", link: "https://flybirdshop.com/", video: "" },
  { cat: "ai", name: "DuoPlus 云手机", initials: "DP", tag: "跨境电商 / TikTok 矩阵运营", perk: "海外账号批量管理", code: "", link: "", video: "sJ_CWdkcKz0" },
  { cat: "ai", name: "账号星球店铺", initials: "🛒", tag: "AI / 社媒成品号", perk: "第三方店铺", code: "", link: "https://accboy7flybird.acceboy.com/", video: "" },
];

// ---------- 教程视频（视频页 + 分类页引用） ----------
const VIDEOS = [
  { id: "D28s9FjRsBw", title: "加密货币新手入门全教程", desc: "欧易注册、买币、C2C 全流程避坑", cat: "exchange" },
  { id: "5vLgE5qg_04", title: "Bitget 交易所小白入门", desc: "性价比之王，开户入金保姆级教程", cat: "exchange" },
  { id: "KlEArpD1JSU", title: "Kraken 海妖交易所教程", desc: "注册使用 + 安全出金到国内银行卡", cat: "exchange" },
  { id: "FYQvmJdu_7Q", title: "BiyaPay 注册使用教程", desc: "大陆身份开户，USDT 买美股港股", cat: "broker" },
  { id: "L52ZhjtnKSA", title: "BIT 开户教程", desc: "美股终身 0 佣金，大陆身份证可开", cat: "broker" },
  { id: "4FmXZbLn-ds", title: "盈透证券 IBKR 买美股教程", desc: "海外券商收紧后的稳妥选择", cat: "broker" },
  { id: "PKQCmUSA37Y", title: "Wise 注册教程", desc: "一个账户等于多个海外银行账户", cat: "bank" },
  { id: "k65ySsr3Ops", title: "StarryBlu 注册实操全流程", desc: "从下载到 KYC，一次过审拿新加坡账户", cat: "bank" },
  { id: "MC1oLpL0wEw", title: "Bitget Wallet 虚拟卡开卡教程", desc: "开卡送 5U，坑全给你说清楚", cat: "bank" },
  { id: "zo7hCqgkk74", title: "OneKey 冷钱包开箱实测", desc: "激活、使用新手教程，资产保险库", cat: "wallet" },
  { id: "g5RKvxCiHlo", title: "ClubSIM 申请全攻略", desc: "一年 6 港币永久保住香港号码", cat: "esim" },
  { id: "BPszmXbbjTI", title: "Xesim + Eskimo 组合方案", desc: "保号 + 一机多号，eSIM 还是实体卡", cat: "esim" },
  { id: "1xXUOGc2UGM", title: "微信 支付宝订阅海外 AI 大模型", desc: "人民币订阅 ChatGPT", cat: "ai" },
  { id: "sJ_CWdkcKz0", title: "DuoPlus 云手机实测", desc: "跨境电商、TikTok 矩阵运营必备", cat: "ai" },
];

// ---------- 投资课程（投资页） ----------
const STOCK_COURSE = [
  { id: "agx784w9gxg", title: "第一课 · 股市基本概念科普大全" },
  { id: "mc55nmOeFIE", title: "第二课 · 指数全解 + 国债逆回购绝招" },
  { id: "b8Lp87NrlbE", title: "第三课 · 同花顺看盘全攻略" },
  { id: "hbURquzb2Ek", title: "第四课 · 10 分钟看懂 K 线图" },
  { id: "ymbiUQJ9fCM", title: "第五课 · 均线、MACD、布林线实战" },
];
const FUND_COURSE = [
  { id: "sSGy0ZYHlzs", title: "第一课 · 基金基本概念与分类" },
  { id: "LtD94IbANtk", title: "第二课 · 股票/债券/混合基金怎么选" },
  { id: "nRpXwhoiXV4", title: "第三课 · 支付宝选基保姆级教程" },
  { id: "imraBTOUGog", title: "第四课 · 深度拆解基金的稳赚逻辑" },
  { id: "cNdKBYMaMNY", title: "第五课 · 支付宝指数基金实操" },
];
const INVEST_VIDEOS = [
  { id: "yZl5997e0Vs", title: "普通人投资赚钱的七级天梯", desc: "从货币基金到期货期权，一步步教你" },
  { id: "syxxhbH0UsM", title: "构建“三层世界”资产天梯", desc: "从 A股到美股 IBKR 的资产配置实测" },
  { id: "6SSRKQP0lHw", title: "美股定投 2 个月实战经验", desc: "长期定投躺赢攻略" },
  { id: "ZuXh-sB_1os", title: "四位一体财富版图", desc: "美股+加密货币+大宗商品组合" },
];

// ---------- 自媒体培训视频（培训页） ----------
const TRAINING_VIDEOS = [
  { id: "ZttGqUaMn9Y", title: "从零做 YouTube 赚美金", desc: "1 年半踩坑总结的完整变现路线图" },
  { id: "5GMLcrPe5OY", title: "YPP 知识全分享", desc: "开通收益要注意的细节和坑" },
  { id: "nNbUJQP8mNQ", title: "油管运营避坑指南", desc: "帮你少走四年弯路" },
  { id: "gWIjWwTSv7M", title: "2026 年做油管还能赚钱吗", desc: "18 个月真实收入复盘" },
  { id: "Pjk-nzUOQCU", title: "做油管和投资一样靠长期主义", desc: "4 万粉大号收入归零后的复盘" },
  { id: "JZf78Fw3nfU", title: "自媒体赚钱新玩法拆解", desc: "三个频道的赚钱方式震撼了我" },
];

// ---------- 顶部滚动播报 ----------
const TICKER_ITEMS = [
  "BiyaPay 邀请码 30524729 · 充值50U送30U手续费抵扣",
  "OneKey 邀请码 astin16888 · 专属链接享9折",
  "Kraken 海妖 邀请码 b4hp7wsp",
  "StarryBlu 邀请码 MHQK00K",
  "Wovia 邀请码 HIoh6jqdyh · 11.1U开卡",
  "OKX / Bitget / Wise 专属注册链接在工具库",
];

// ---------- 打赏信息（旧站 coffee 页） ----------
const DONATE = {
  usdt_trc20: "TXEn8yg6AxiRynigkEc1HGhKLZnAXJF4k5",
  wechat_qr: "src/assets/images/wechat_pay.jpg",
  alipay_qr: "src/assets/images/alipay1.jpg",
};
