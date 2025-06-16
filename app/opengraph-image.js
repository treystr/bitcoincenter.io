import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const siteUrl = process.env.NODE_ENV === 'production'
    ? 'https://treystr.github.io/bitcoincenter.io'
    : 'http://localhost:3000'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Background hero image */}
        <img
          src={`${siteUrl}/hero.jpg`}
          alt="Hero background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dark gradient overlay for readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom right, rgba(15,23,42,0.9), rgba(30,41,59,0.8))',
          }}
        />

        {/* Centered title */}
        <h1
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.1,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          Bitcoin Academic
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #fbbf24, #f97316)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Center
          </span>
        </h1>
      </div>
    ),
    {
      ...size,
    }
  )
} 