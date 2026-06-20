import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
      text: '兴趣社群',
      links: [
        {
          text: '自媒体',
          href: getPermalink('/homes/saas'),
        },
        {
          text: '金融投资',
          href: getPermalink('/homes/startup'),
        },
        {
          text: '创业',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: '私董会',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: '投资交易',
      links: [
        {
          text: '基金',
          href: getPermalink('/#features'),
        },
        {
          text: 'A股',
          href: getPermalink('/services'),
        },
        {
          text: '美股',
          href: getPermalink('/pricing'),
        },
        {
          text: '加密货币',
          href: getPermalink('/about'),
        },
        // {
        //   text: 'Contact',
        //   href: getPermalink('/contact'),
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: '账号购买',
      links: [
        {
          text: 'AI大模型',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: '网站账号购买',
          href: getPermalink('/landing/sales'),
        },
        {
          text: '个人建站支持',
          href: getPermalink('/landing/sales'),
        },
        // {
        //   text: 'Click-Through',
        //   href: getPermalink('/landing/click-through'),
        // },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      text: '联系我',
      links: [
        {
          text: '微信',
          href: getBlogPermalink(),
        },
        {
          text: 'QQ',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Telegram',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Telegram交流群',
          href: getPermalink('tutorials', 'category'),
        },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/astin4355526862' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/spider_asmr' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCrue9puceK0-TT5_JYY448A?sub_confirmation=1' },
    // { ariaLabel: 'Wechat', icon: 'tabler:brand-wechat', href: '#' },
    // { ariaLabel: 'QQ', icon: 'tabler:brand-qq', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    FlyBird 小郑 · All rights reserved.
  `,
};
