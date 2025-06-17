'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Dynamically import the Vanta fog script so it only loads in the browser.
const vantaEffectPromise = () => import('vanta/dist/vanta.fog.min')

export default function VantaFog() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      let isMounted = true
      vantaEffectPromise().then((VANTA) => {
        if (!isMounted || !vantaRef.current) return
        const effect = VANTA.default || VANTA
        const instance = effect({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xfaab14,
          midtoneColor: 0x393433,
          lowlightColor: 0x0,
          baseColor: 0xe0646,
          blurFactor: 0.41,
          speed: 0.4,
          zoom: 0.5,
        })
        setVantaEffect(instance)
      })
      return () => {
        isMounted = false
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  // The wrapper needs to be fixed so it fills the viewport and stays behind other content.
  return <div ref={vantaRef} className="fixed inset-0 -z-10" />
} 