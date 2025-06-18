export default function Footer() {
  const basePath = process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : ''
  return (
    <footer className="py-6 border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-8 pt-8 text-center">
          <img src={`${basePath}/bust.png`} alt="Bust" className="mx-auto w-8 mb-2" />
          <p className="italic mb-4">&ldquo;I cannot tell a lie.&rdquo; <span className="not-italic">- George Washington, Founding Father &amp; Freedom Advocate</span></p>
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Bitcoin Academic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 