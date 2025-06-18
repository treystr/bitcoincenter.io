// Compute canonical site URL dynamically so no hard-coded domain is required.
//   NEXT_PUBLIC_SITE_URL   → e.g. "https://bitcoinacademic.center" (no trailing slash)
//   NEXT_PUBLIC_BASE_PATH → e.g. "/app" (blank when deployed at root)
// During local development both can be omitted and we default to localhost.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Ensure we always have a protocol + host; fall back to localhost in dev.
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// Final canonical URL used across metadata configuration
const siteUrl = `${siteOrigin}${basePath}`

const siteMetadata = {
  // The canonical base URL for the application
  metadataBase: new URL(siteUrl),

  // General
  title: {
    default: 'Bitcoin Academic Center',
    template: '%s | Bitcoin Academic Center',
  },
  description:
    "The Bitcoin Academic Center: Pioneering Bitcoin scholarship in the US through interdisciplinary education, research, advocacy, and engagement with decision-makers to advance understanding, adoption, and innovation.",
  keywords: [
    'Bitcoin',
    'Blockchain',
    'Cryptocurrency',
    'Research',
    'George Washington',
    'University',
    'Education',
    'Policy',
    'Washington DC',
  ],
  creator: 'Bitcoin Academic Center',

  // OpenGraph
  openGraph: {
    title: 'Bitcoin Academic Center',
    description:
      "The Bitcoin Academic Center: Pioneering Bitcoin scholarship in the US through interdisciplinary education, research, advocacy, and engagement with decision-makers to advance understanding, adoption, and innovation.",
    url: siteUrl,
    siteName: 'Bitcoin Academic Center',
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Bitcoin Academic Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Academic Center',
    description:
      "The Bitcoin Academic Center: Pioneering Bitcoin scholarship in the US through interdisciplinary education, research, advocacy, and engagement with decision-makers to advance understanding, adoption, and innovation.",
    images: [`${siteUrl}/opengraph-image.png`],
    //creator: '@BitcoinAcademicCenter', // Update if you have a real handle
  },

  // Robots directives
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },

  // Favicon / icons
  icons: {
    icon: `${siteUrl}/favicon.ico`,
    shortcut: `${siteUrl}/favicon.ico`,
  },
}

export default siteMetadata 