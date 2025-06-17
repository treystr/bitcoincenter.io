import './globals.css'
import siteMetadata from '../lib/seo.config'
import { Alegreya_SC } from 'next/font/google'
import VantaFog from './components/VantaFog'

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
      <body className="font-alegreya min-h-screen">
        <VantaFog />
        {children}
      </body>
    </html>
  )
} 