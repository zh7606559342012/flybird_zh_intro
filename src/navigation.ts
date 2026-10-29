import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: '关于我', href: getPermalink('/about') },
    { text: '业务服务', links: [
      { text: '自媒体增长', href: getPermalink('/zimeiti') },
      { text: '社群与创业', href: getPermalink('/chuangye') },
      { text: '投资交易', href: getPermalink('/jinrongtouzi') },
      { text: 'AI 与建站', href: getPermalink('/jianzhan') },
    ]},
    { text: '内容频道', href: getPermalink('/videos') },
    { text: '联系合作', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    { title: '业务服务', links: [
      { text: '自媒体增长', href: getPermalink('/zimeiti') },
      { text: '社群与创业', href: getPermalink('/chuangye') },
      { text: '投资交易', href: getPermalink('/jinrongtouzi') },
    ]},
    { title: '内容与连接', links: [
      { text: 'YouTube 频道', href: 'https://www.youtube.com/@Benz_ZH' },
      { text: 'Telegram', href: 'https://t.me/flybird_home' },
      { text: '联系合作', href: getPermalink('/contact') },
    ]},
  ],
  secondaryLinks: [
    { text: '服务条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/flybird_home' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@Benz_ZH' },
  ],
  footNote: 'FlyBird 小郑 · 认真做事，长期连接。',
};
