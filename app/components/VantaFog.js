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
          minHeight: 500.0,
          minWidth: 500.0,
          highlightColor: 0xF7931A, // Bitcoin orange for the fog
          midtoneColor: 0x3F3C3C,  // Dark gray as requested
          lowlightColor: 0x2A2929, // Slightly darker variant of #3F3C3C for depth
          baseColor: 0x1F1E1E,     // Near #3F3C3C for a subtle gradient
          blurFactor: 0.5,         // Kept for subtlety
          speed: 0.4,
          zoom: 0.5,
        });
        setVantaEffect(instance);
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