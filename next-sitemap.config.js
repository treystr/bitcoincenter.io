/** @type {import('next-sitemap').IConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const siteUrl = `${siteOrigin}${basePath}`

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  // Prevent creation of an index sitemap if you prefer a single sitemap.xml
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  trailingSlash: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 