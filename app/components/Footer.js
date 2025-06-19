import assetPath from '@/lib/assetPath'

export default function Footer() {
  return (
    <footer className="py-6 border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-8 pt-8 text-center">
          <img src={assetPath('/bust.png')} alt="Bust" className="mx-auto w-8 mb-2" />
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Bitcoin Academic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 