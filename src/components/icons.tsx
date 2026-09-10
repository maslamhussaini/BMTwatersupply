export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    phone: <path d="m5 3 4 1 1 5-3 2a15 15 0 0 0 6 6l2-3 5 1 1 4c-1 5-8 2-12-2S2 5 5 3Z" />,
    chat: <><path d="M21 11a9 9 0 0 1-13 8l-5 2 1-5a9 9 0 1 1 17-5Z" /><path d="M8 9h8M8 13h5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    pool: <><path d="M7 15V5a2 2 0 0 1 4 0m3 10V5a2 2 0 0 1 4 0M7 8h7M7 12h7M2 18q2-3 5 0t5 0 5 0 5 0M2 22q2-3 5 0t5 0 5 0 5 0" /></>,
    water: <><path d="M12 2C9 7 5 10 5 15a7 7 0 0 0 14 0c0-5-4-8-7-13Z" /><path d="M9 15a3 3 0 0 0 3 3" /></>,
    site: <><path d="M3 20h18M5 16l4-11h6l4 11M7 11h10M6 16h12" /><path d="M3 20v-4h18v4" /></>,
    removal: <><path d="M4 4v15h16V4M8 8l4 4 4-4m-4-6v10M4 16h16" /></>,
    construction: <><path d="M3 21h18M5 21V8h8v13M13 21V3h6v18M8 11h2m-2 4h2m6-8h1m-1 4h1m-1 4h1" /></>,
    bulk: <><rect x="2" y="5" width="13" height="11" rx="3" /><path d="M15 9h4l3 4v5h-3M2 16v2h2m4 0h7" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    irrigation: <><path d="M12 3C8 8 5 12 5 16a7 7 0 0 0 10.5 6" /><path d="M12 3c4 5 7 9 7 13a7 7 0 0 1-3 5.8" /><path d="M17 9a5 5 0 0 1 0 8" /></>,
    rain: <><path d="M7 12a5 5 0 0 1 1-9.9A6 6 0 0 1 19 6a4 4 0 0 1-1 8H7Z" /><path d="M8 17v3m4-3v4m4-4v3" /></>,
    check: <path d="m5 12 4 4 10-10" />,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.water}</svg>;
}

export function ServiceVisual({ kind }: { kind: string }) {
  return <div className={`service-visual visual-${kind}`} aria-hidden="true">
    <svg viewBox="0 0 440 260" fill="none">
      <circle cx="330" cy="80" r="110" stroke="currentColor" opacity=".13" />
      <circle cx="330" cy="80" r="80" stroke="currentColor" opacity=".13" />
      {kind === "pool" ? <g stroke="currentColor" strokeWidth="2"><path d="M55 110 260 60l125 70-210 68Z" /><path d="M55 110v36l120 70 210-51v-35M175 198v18" /><path d="M110 108 258 73l98 57-177 44-69-40Z" fill="currentColor" opacity=".08" /><path d="M132 139v-40q0-20 15-14m14 70v-42q0-20 15-14M132 112l29 17m-29-4 29 17" /><path d="m202 117 39-9m-28 25 40-10m23 18 40-10" opacity=".5" /></g> : kind === "water" || kind === "removal" ? <g stroke="currentColor" strokeWidth="2"><ellipse cx="220" cy="73" rx="82" ry="24" /><path d="M138 73v125c0 32 164 32 164 0V73" /><path d="M139 143c36 25 124 25 162 0v55c0 30-162 30-162 0Z" fill="currentColor" opacity=".12" /><path d="M139 143c36 25 124 25 162 0M139 176c36 25 124 25 162 0" opacity=".5" /><path d={kind === "water" ? "M220 91v44m-12-12 12 12 12-12" : "M302 165h34v-64m-12 12 12-12 12 12"} /></g> : kind === "site" ? <g stroke="currentColor" strokeWidth="2"><path d="M55 190h230v-80a10 10 0 0 0-10-10H150l-40 40H65a10 10 0 0 0-10 10v40Z" /><path d="M118 100v40M150 100l-32 40" opacity=".5" /><path d="M65 140h220M65 160h220" opacity=".3" /><circle cx="110" cy="205" r="20" /><circle cx="255" cy="205" r="20" /><circle cx="110" cy="205" r="5" fill="currentColor" /><circle cx="255" cy="205" r="5" fill="currentColor" /><path d="M300 168q9 14 0 24M317 162q11 17 0 30M334 173q7 11 0 20" opacity=".55" /><path d="M40 228h360" opacity=".45" /></g> : kind === "construction" ? <g stroke="currentColor" strokeWidth="2"><path d="M70 220v-90h70v90" /><path d="M85 145h10m-10 20h10m-10 20h10m20-40h10m-10 20h10m-10 20h10" opacity=".5" /><path d="M230 220V60M230 60l60 28M230 60l-70 24" /><path d="M255 76v42m0 0-11 11m11-11 11 11" opacity=".6" /><path d="M172 84h32" opacity=".6" /><path d="M40 225h360" opacity=".45" /></g> : kind === "irrigation" ? <g stroke="currentColor" strokeWidth="2"><path d="M100 190Q60 120 130 60Q210 120 160 190Q125 210 100 190Z" fill="currentColor" opacity=".08" /><path d="M130 60Q150 130 150 190" opacity=".5" /><path d="M290 70Q330 130 290 175Q250 175 250 130Q250 100 290 70Z" fill="currentColor" opacity=".08" /><path d="M235 100a75 75 0 0 1 110-25m0 0-14 3m14-3-5 13" opacity=".55" /><path d="M345 150a75 75 0 0 1-110 25m0 0 14-3m-14 3 5-13" opacity=".55" /><path d="M40 228h360" opacity=".45" /></g> : kind === "rain" ? <g stroke="currentColor" strokeWidth="2"><path d="M120 130a45 45 0 0 1 40-70 55 55 0 0 1 100 18 40 40 0 0 1-8 80H150a40 40 0 0 1-30-28Z" fill="currentColor" opacity=".08" /><path d="M165 168v28m40-28v40m40-40v28" opacity=".6" /><path d="M330 190h60m-60 12h60m-60 12h60" opacity=".45" /><path d="M360 138v56m-12-12 12 12 12-12" /><path d="M40 233h280" opacity=".45" /></g> : <g stroke="currentColor" strokeWidth="2"><path d="M70 230v-90a30 15 0 0 1 60 0v90" /><path d="M70 140a30 15 0 0 0 60 0" opacity=".5" /><path d="M170 230V110a35 16 0 0 1 70 0v120" /><path d="M170 110a35 16 0 0 0 70 0" opacity=".5" /><path d="M280 230v-80a25 13 0 0 1 50 0v80" /><path d="M280 150a25 13 0 0 0 50 0" opacity=".5" /><path d="M40 233h360" opacity=".45" /></g>}
    </svg>
  </div>;
}
