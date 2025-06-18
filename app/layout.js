import './globals.css'
import siteMetadata from '../lib/seo.config'
import { Cardo } from 'next/font/google'
import VantaFog from './components/VantaFog'

const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cardo',
})

export const metadata = siteMetadata

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cardo.variable} antialiased`}>
      <body className="font-cardo min-h-screen">
        <VantaFog />
        {children}
      </body>
    </html>
  )
} 