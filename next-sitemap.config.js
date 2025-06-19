/** @type {import('next-sitemap').IConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL
if (!siteOrigin) {
  throw new Error('NEXT_PUBLIC_SITE_URL environment variable is not set.  \nMake sure it is provided in your CI/CD environment or .env files.');
}

const siteUrl = `${siteOrigin}${basePath}`

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  // Prevent creation of an index sitemap if you prefer a single sitemap.xml
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
} 