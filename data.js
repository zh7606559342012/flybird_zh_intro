// ============================================================
// Flybird 小郑 · 工具库数据
// 修改方法：改邀请码改 code，改链接改 link，改教程改 video（YouTube 视频 ID）
// video 填 YouTube 链接 v= 后面的那串字符即可
// ============================================================

const CATEGORIES = [
  { id: "exchange", name: "加密货币交易所", icon: "₿" },
  { id: "broker",   name: "券商与美股港股", icon: "📈" },
  { id: "bank",     name: "银行与跨境支付", icon: "🏦" },
  { id: "wallet",   name: "硬件钱包",       icon: "🔐" },
  { id: "esim",     name: "eSIM 与海外号码", icon: "📱" },
  { id: "ai",       name: "AI 订阅与效率工具", icon: "🤖" },
];

const TOOLS = [
  // ---------- 加密货币交易所 ----------
  {
    cat: "exchange", name: "OKX 欧易", initials: "OK",
    tag: "全球主流交易所 · 新手入门首选",
    perk: "专属链接注册",
    code: "76590941",
    link: "https://www.okx.com/zh-hans/join/76590941",
    video: "D28s9FjRsBw",
  },
  {
    cat: "exchange", name: "Bitget", initials: "BG",
    tag: "跟单功能强 · 手续费全网低",
    perk: "专属链接注册",
    code: "",
    link: "https://partner.hdmune.cn/bg/8wzgp2lu",
    video: "5vLgE5qg_04",
  },
  {
    cat: "exchange", name: "Kraken 海妖", initials: "KR",
    tag: "老牌合规交易所 · 出金到银行卡友好",
    perk: "邀请码注册享奖励",
    code: "b4hp7wsp",
    link: "https://invite.kraken.com/JDNW/bqca3hqx",
    video: "KlEArpD1JSU",
  },

  // ---------- 券商与美股港股 ----------
  {
    cat: "broker", name: "BiyaPay", initials: "BY",
    tag: "USDT 直接买美股港股 · 大陆身份证开户",
    perk: "充值 50U 送 30U 手续费抵扣，30 天内汇款再得 10U",
    code: "30524729",
    link: "https://register.biyapay.com/fastreg?invite=30524729",
    video: "FYQvmJdu_7Q",
  },
  {
    cat: "broker", name: "BIT", initials: "BIT",
    tag: "美股终身 0 佣金 · 支持 USDT/USDC 出入金",
    perk: "看教程按步骤开户",
    code: "",
    link: "",
    video: "L52ZhjtnKSA",
  },
  {
    cat: "broker", name: "IBKR 盈透证券", initials: "IB",
    tag: "全球顶级券商 · 机构级平台",
    perk: "看教程按步骤开户",
    code: "",
    link: "",
    video: "4FmXZbLn-ds",
  },

  // ---------- 银行与跨境支付 ----------
  {
    cat: "bank", name: "Wise", initials: "W",
    tag: "多币种账户 · 跨境转账 0 隐藏费用",
    perk: "专属链接注册",
    code: "",
    link: "https://wise.com/invite/dic/qvs12vn",
    video: "PKQCmUSA37Y",
  },
  {
    cat: "bank", name: "StarryBlu", initials: "SB",
    tag: "新加坡多币种账户 · 护照+地址证明过审",
    perk: "填邀请码注册",
    code: "MHQK00K",
    link: "",
    video: "k65ySsr3Ops",
  },
  {
    cat: "bank", name: "Wovia 沃维亚", initials: "WV",
    tag: "虚拟银行卡 · 11.1U 低成本开卡",
    perk: "填邀请码注册",
    code: "HIoh6jqdyh",
    link: "https://app.wovia.global/?ref=HIoh6jqdyh",
    video: "8vjc4oX_ULo",
  },
  {
    cat: "bank", name: "LocalCard", initials: "LC",
    tag: "加密出金卡 · 消费出金一体",
    perk: "专属链接注册",
    code: "",
    link: "https://www.localcard.hk/#/pages/H5/login?code=alml0HjT",
    video: "PKjr-AFScjU",
  },
  {
    cat: "bank", name: "Bitget Wallet × Fiat24", initials: "BW",
    tag: "U 卡 · 加密资产线下消费",
    perk: "开卡送 5U 奖励（见教程）",
    code: "",
    link: "",
    video: "MC1oLpL0wEw",
  },

  // ---------- 硬件钱包 ----------
  {
    cat: "wallet", name: "OneKey", initials: "1K",
    tag: "国产开源硬件钱包 · 代码 100% 开源",
    perk: "专属链接 9 折 + 手续费返还",
    code: "astin16888",
    link: "https://onekey.so/r/astin16888/shop",
    video: "zo7hCqgkk74",
  },

  // ---------- eSIM 与海外号码 ----------
  {
    cat: "esim", name: "ClubSIM", initials: "CS",
    tag: "香港号码 · 一年保号只要 6 港币",
    perk: "实体卡 / eSIM 两种形式",
    code: "",
    link: "",
    video: "g5RKvxCiHlo",
  },
  {
    cat: "esim", name: "Xesim + Eskimo", initials: "XE",
    tag: "eSIM 写卡器 + 全球流量方案",
    perk: "保号 + 一机多号组合",
    code: "",
    link: "",
    video: "BPszmXbbjTI",
  },
  {
    cat: "esim", name: "海外手机号避坑指南", initials: "📱",
    tag: "giffgaff 之后用什么？全方案对比",
    perk: "先看指南再下手",
    code: "",
    link: "",
    video: "Ob8utfMXnhE",
  },

  // ---------- AI 订阅与效率工具 ----------
  {
    cat: "ai", name: "GamsGo", initials: "GG",
    tag: "ChatGPT/Claude 订阅合租 · 支付宝付款",
    perk: "结账填优惠码",
    code: "RT7J6",
    link: "https://www.gamsgo.com/?promote=sTtvC",
    video: "1xXUOGc2UGM",
  },
  {
    cat: "ai", name: "PPToken", initials: "PP",
    tag: "AI 中转站 · 低成本用大模型",
    perk: "专属链接注册",
    code: "",
    link: "https://www.pptoken.org/?promo=PP4R8",
    video: "",
  },
  {
    cat: "ai", name: "DuoPlus 云手机", initials: "DP",
    tag: "跨境电商 / TikTok 矩阵运营",
    perk: "海外账号批量管理",
    code: "",
    link: "",
    video: "sJ_CWdkcKz0",
  },
  {
    cat: "ai", name: "账号购买小店", initials: "🛒",
    tag: "AI / 社媒成品号 · 博主自营",
    perk: "博主自营店铺",
    code: "",
    link: "https://accboy7flybird.acceboy.com/",
    video: "",
  },
];

// ---------- 教程视频精选（点开即播） ----------
const VIDEOS = [
  { id: "D28s9FjRsBw", title: "加密货币新手入门全教程", desc: "欧易注册、买币、C2C 全流程避坑" },
  { id: "5vLgE5qg_04", title: "Bitget 交易所小白入门", desc: "性价比之王，开户入金保姆级教程" },
  { id: "FYQvmJdu_7Q", title: "BiyaPay 注册使用教程", desc: "大陆身份开户，USDT 买美股港股" },
  { id: "PKQCmUSA37Y", title: "Wise 注册教程", desc: "一个账户等于多个海外银行账户" },
  { id: "zo7hCqgkk74", title: "OneKey 冷钱包开箱实测", desc: "激活、使用新手教程，资产保险库" },
  { id: "4FmXZbLn-ds", title: "盈透证券 IBKR 买美股教程", desc: "海外券商收紧后的稳妥选择" },
];

// ---------- 顶部滚动播报 ----------
const TICKER_ITEMS = [
  "BiyaPay 邀请码 30524729 · 充值50U送30U手续费抵扣",
  "OneKey 邀请码 astin16888 · 专属链接享9折",
  "Kraken 海妖 邀请码 b4hp7wsp",
  "GamsGo 优惠码 RT7J6 · AI订阅合租",
  "StarryBlu 邀请码 MHQK00K",
  "Wovia 邀请码 HIoh6jqdyh · 11.1U开卡",
  "OKX / Bitget / Wise 专属注册链接在工具库",
];
