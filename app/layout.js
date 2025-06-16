import './globals.css'

export const metadata = {
  title: 'Bitcoin Academic Center',
  description: 'Advancing Bitcoin research, education, and policy in the heart of the nation\'s capital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  )
} 