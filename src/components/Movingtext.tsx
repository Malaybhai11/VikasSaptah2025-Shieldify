import React from "react";

// Ultra-professional tech stack with premium SVG icons
const techStack = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 180 180" fill="none" className="w-full h-full">
        <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="m149.508 157.52-69.142-75.738-33.486 33.486L149.508 157.52z" fill="url(#paint0_linear_408_134)" />
          <rect x="115.5" y="54" width="12" height="108" rx="6" fill="url(#paint1_linear_408_134)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_408_134" x1="121.5" y1="54" x2="120.5" y2="106.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#ffffff",
    glow: "#ffffff"
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12.17 1.272s-.184-.008-.5-.008c-1.24 0-2.331.14-3.268.416C6.708 2.1 6 2.956 6 4.28v2.24h6v.75H6v3.25c0 1.324.708 2.18 2.402 2.6.936.276 2.028.416 3.268.416.316 0 .5-.008.5-.008V11.47h-3V10.72h4.5c1.324 0 2.18-.708 2.6-2.402.276-.936.416-2.028.416-3.268 0-.316-.008-.5-.008-.5H14.23v2H12.17z" fill="url(#python1)" />
        <path d="M11.83 22.728s.184.008.5.008c1.24 0 2.331-.14 3.268-.416 1.694-.42 2.402-1.276 2.402-2.6V17.48h-6v-.75h6v-3.25c0-1.324-.708-2.18-2.402-2.6-.936-.276-2.028-.416-3.268-.416-.316 0-.5.008-.5.008v2.058h3v.75H9.5c-1.324 0-2.18.708-2.6 2.402-.276.936-.416 2.028-.416 3.268 0 .316.008.5.008.5h2.448v-2h2.06z" fill="url(#python2)" />
        <defs>
          <linearGradient id="python1" x1="6" y1="1.264" x2="6" y2="12.75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="python2" x1="18" y1="22.736" x2="18" y2="11.25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE052" />
            <stop offset="1" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#3776AB",
    glow: "#FFD43B"
  },
  {
    name: "Flask",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1.5-4h-3l1.5 4h3zm0-6l1.5-4h3l-1.5 4h-3zm6 6h-3l1.5-4h3L16 17z" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
        <path d="M8.5 8.5h7l-1 2h-5l-1-2z" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    color: "#000000",
    glow: "#ffffff"
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M5.333 21.121c-.667 0-1.208-.541-1.208-1.208V4.087c0-.667.541-1.208 1.208-1.208h13.334c.667 0 1.208.541 1.208 1.208v15.826c0 .667-.541 1.208-1.208 1.208H5.333z" fill="url(#mysql-bg)" />
        <path d="M7.5 6h9v2h-9V6zm0 3h9v2h-9V9zm0 3h9v2h-9v-2zm0 3h6v2h-6v-2z" fill="white" />
        <circle cx="17.5" cy="16" r="1.5" fill="url(#mysql-accent)" />
        <defs>
          <linearGradient id="mysql-bg" x1="5.333" y1="2.879" x2="18.667" y2="21.121" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00758F" />
            <stop offset="1" stopColor="#004A5A" />
          </linearGradient>
          <linearGradient id="mysql-accent" x1="16" y1="14.5" x2="19" y2="17.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F29111" />
            <stop offset="1" stopColor="#E68619" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#00758F",
    glow: "#F29111"
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C15.613 7.181 14.478 6.036 12 6.036zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.819 9.522 17.964 12 17.964c2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="url(#tailwind-gradient)" />
        <defs>
          <linearGradient id="tailwind-gradient" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#06B6D4",
    glow: "#0EA5E9"
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186z" fill="url(#docker-blue)" />
        <path d="M11.029 8.364h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186z" fill="url(#docker-blue)" />
        <path d="M5.136 8.364h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186z" fill="url(#docker-blue)" />
        <path d="M16.022 11.078h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185z" fill="url(#docker-blue)" />
        <defs>
          <linearGradient id="docker-blue" x1="2" y1="3.389" x2="22" y2="11.893" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D63ED" />
            <stop offset="1" stopColor="#2496ED" />
          </linearGradient>
        </defs>
        <path d="M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.827-1.24-2.654-1.558-2.964v-.297c0-.746-.472-1.52-1.257-1.52-.784 0-1.257.774-1.257 1.52v.297c-.318.31-1.31 1.137-1.558 2.964-.334-.06-.672-.09-1.01-.09-1.282 0-1.889.459-1.954.51L8.466 9.89s-.621.63-.621 1.18c0 .55.621 1.18.621 1.18l3.734-.01c1.48.621 2.856.621 4.336 0l3.734.01s.621-.63.621-1.18-.621-1.18-.621-1.18z" fill="url(#docker-whale)" />
        <defs>
          <linearGradient id="docker-whale" x1="8.466" y1="4.209" x2="23.763" y2="12.25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2496ED" />
            <stop offset="1" stopColor="#1D63ED" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#2496ED",
    glow: "#1D63ED"
  }
];

const MarqueeRow = ({ direction = "left", speed = 40, size = "4rem" }) => {
  // Triple the icons for seamless infinite scroll
  const repeatedIcons = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="marquee-wrapper">
        <div
          className={`marquee-track ${direction}`}
          style={{
            '--animation-duration': `${speed}s`,
            '--icon-size': size
          } as React.CSSProperties}
        >
        {repeatedIcons.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="tech-icon-wrapper"
            style={{
              '--primary-color': tech.color,
              '--glow-color': tech.glow,
            } as React.CSSProperties}
          >
            <div className="tech-icon">
              {tech.icon}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 5rem;
          width: max-content;
          animation: smooth-scroll-left var(--animation-duration) linear infinite;
        }

        .marquee-track.right {
          animation: smooth-scroll-right var(--animation-duration) linear infinite;
        }

        .tech-icon-wrapper {
          flex: 0 0 auto;
          position: relative;
          padding: 1rem;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .tech-icon {
          width: var(--icon-size);
          height: var(--icon-size);
          color: var(--primary-color);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: 
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.1))
            drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          transform-origin: center center;
        }

        .tech-icon-wrapper:hover .tech-icon {
          transform: scale(1.15) translateY(-4px);
          filter: 
            drop-shadow(0 0 25px var(--glow-color))
            drop-shadow(0 0 50px var(--primary-color))
            drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
          color: var(--glow-color);
        }

        /* Premium glow effect */
        .tech-icon-wrapper:hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          background: radial-gradient(
            circle at center,
            var(--glow-color)20 0%,
            var(--glow-color)10 30%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0.6;
          z-index: -1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes smooth-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes smooth-scroll-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .marquee-track {
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .marquee-track {
            gap: 3rem;
          }
          
          .tech-icon-wrapper {
            padding: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .marquee-track {
            gap: 2.5rem;
          }
          
          .tech-icon-wrapper {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default function UltraProfessionalTechMarquee() {
  return (
    <div className="w-full bg-black min-h-[250px] flex flex-col justify-center overflow-hidden">
      <div className="space-y-12">
        {/* First layer - Large icons, slower movement */}
        <MarqueeRow
          direction="left"
          speed={50}
          size="5.5rem"
        />

        {/* Second layer - Medium icons, faster movement, opposite direction */}
        <MarqueeRow
          direction="right"
          speed={40}
          size="4.5rem"
        />
      </div>
    </div>
  );
}
