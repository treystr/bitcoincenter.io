import './globals.css'
import siteMetadata from '../lib/seo.config'

export const metadata = siteMetadata

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  )
} 