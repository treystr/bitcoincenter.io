import './globals.css'
import siteMetadata from '../lib/seo.config'
import { Alegreya_SC } from 'next/font/google'

const alegreya = Alegreya_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-alegreya-sc',
})

export const metadata = siteMetadata

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${alegreya.variable} antialiased`}>
      <body className="font-alegreya min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  )
} 