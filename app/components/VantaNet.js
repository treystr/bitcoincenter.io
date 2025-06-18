'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Dynamically import the Vanta net script so it only loads in the browser.
const vantaEffectPromise = () => import('vanta/dist/vanta.net.min')

export default function VantaNet() {
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
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            minHeight: 100.0,
            minWidth: 100.0,
            scale: 0.5,
            scaleMobile: 1.0,
            color: 0xF7931A, // Bitcoin orange
            backgroundColor: 0x3F3C3C, // Dark gray
            points: 21.00,
            maxDistance: 21.00,
            spacing: 21.00,
            showDots: true,
            speed: 0.7,
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