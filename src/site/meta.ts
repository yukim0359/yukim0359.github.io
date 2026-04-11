import { socialProfiles } from "./social.ts";

export const siteBaseUrl = "https://yukim0359.github.io/";

export const siteMeta = {
  htmlLang: "ja",
  titleTab: "Yuki Maeda | Portfolio",
  titleSocial: "Yuki Maeda（前田 優希）| Portfolio",
  description:
    "前田 優希（Yuki Maeda）のポートフォリオ。東京大学大学院 情報理工学系研究科。研究・制作物・スキルを紹介しています。",
  author: "Yuki Maeda",
  siteName: "Yuki Maeda",
  canonical: siteBaseUrl,
  robots: "index,follow",
  ogType: "website" as const,
  ogLocalePrimary: "ja_JP",
  ogLocaleAlternate: "en_US",
  noscript:
    "前田 優希（Yuki Maeda）のポートフォリオです。研究・経歴・作品については、JavaScript を有効にしてご覧ください。",
  jsonLdPerson: {
    "@context": "https://schema.org",
    "@type": "Person" as const,
    name: "Yuki Maeda",
    alternateName: "前田 優希",
    url: siteBaseUrl,
    sameAs: socialProfiles.map((p) => p.href),
    affiliation: {
      "@type": "CollegeOrUniversity" as const,
      name: "東京大学",
      sameAs: "https://www.u-tokyo.ac.jp/",
    },
  },
} as const;

export function buildSiteMetaHead(): string {
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");

  const ld = JSON.stringify(siteMeta.jsonLdPerson).replace(/</g, "\\u003c");

  return [
    `<title>${esc(siteMeta.titleTab)}</title>`,
    `<meta name="description" content="${esc(siteMeta.description)}" />`,
    `<meta name="author" content="${esc(siteMeta.author)}" />`,
    `<meta name="robots" content="${esc(siteMeta.robots)}" />`,
    `<link rel="canonical" href="${esc(siteMeta.canonical)}" />`,
    `<meta property="og:type" content="${esc(siteMeta.ogType)}" />`,
    `<meta property="og:locale" content="${esc(siteMeta.ogLocalePrimary)}" />`,
    `<meta property="og:locale:alternate" content="${esc(siteMeta.ogLocaleAlternate)}" />`,
    `<meta property="og:url" content="${esc(siteMeta.canonical)}" />`,
    `<meta property="og:site_name" content="${esc(siteMeta.siteName)}" />`,
    `<meta property="og:title" content="${esc(siteMeta.titleSocial)}" />`,
    `<meta property="og:description" content="${esc(siteMeta.description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(siteMeta.titleSocial)}" />`,
    `<script type="application/ld+json">${ld}</script>`,
  ].join("\n    ");
}

export function buildSiteNoscript(): string {
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  return `<noscript>\n      <p>${esc(siteMeta.noscript)}</p>\n    </noscript>`;
}
