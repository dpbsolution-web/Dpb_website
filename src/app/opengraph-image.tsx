import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DPB Solution - Telecommunications & IT Solutions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 45%, #4338ca 100%)',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Decorative blobs */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            zIndex: 10,
            padding: '0 80px',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
                fontWeight: 900,
                color: 'white',
              }}
            >
              D
            </div>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-2px',
              }}
            >
              DPB Solution
            </span>
          </div>

          {/* Tagline */}
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: 'rgba(191,219,254,1)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Empowering Digital Transformation
          </span>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.35)',
            }}
          />

          {/* Sub-description */}
          <span
            style={{
              fontSize: 22,
              color: 'rgba(219,234,254,1)',
              textAlign: 'center',
              maxWidth: 680,
              lineHeight: 1.45,
            }}
          >
            Telecommunications &amp; IT Solutions · OFC Infrastructure · Manpower Outsourcing
          </span>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 72, marginTop: 12 }}>
            {[
              { value: '80+', label: 'Clients' },
              { value: '100+', label: 'Team Members' },
              { value: '6+', label: 'Years Experience' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 38, fontWeight: 800, color: 'white' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: 15, color: 'rgba(147,197,253,1)', letterSpacing: '0.05em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #60a5fa)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
