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
    check: <path d="m5 12 4 4 10-10" />,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.water}</svg>;
}

export function ServiceVisual({ kind }: { kind: string }) {
  return <div className={`service-visual visual-${kind}`} aria-hidden="true">
    <svg viewBox="0 0 440 260" fill="none">
      <circle cx="330" cy="80" r="110" stroke="currentColor" opacity=".13" />
      <circle cx="330" cy="80" r="80" stroke="currentColor" opacity=".13" />
      {kind === "pool" ? <g stroke="currentColor" strokeWidth="2"><path d="M55 110 260 60l125 70-210 68Z" /><path d="M55 110v36l120 70 210-51v-35M175 198v18" /><path d="M110 108 258 73l98 57-177 44-69-40Z" fill="currentColor" opacity=".08" /><path d="M132 139v-40q0-20 15-14m14 70v-42q0-20 15-14M132 112l29 17m-29-4 29 17" /><path d="m202 117 39-9m-28 25 40-10m23 18 40-10" opacity=".5" /></g> : kind === "water" || kind === "removal" ? <g stroke="currentColor" strokeWidth="2"><ellipse cx="220" cy="73" rx="82" ry="24" /><path d="M138 73v125c0 32 164 32 164 0V73" /><path d="M139 143c36 25 124 25 162 0v55c0 30-162 30-162 0Z" fill="currentColor" opacity=".12" /><path d="M139 143c36 25 124 25 162 0M139 176c36 25 124 25 162 0" opacity=".5" /><path d={kind === "water" ? "M220 91v44m-12-12 12 12 12-12" : "M302 165h34v-64m-12 12 12-12 12 12"} /></g> : <g stroke="currentColor" strokeWidth="2"><path d="M65 213h310M91 213V98h86v115m0 0V57h84v156m0 0V123h83v90M107 119h49m-49 24h49m-49 24h49m-49 24h49M195 81h47m-47 25h47m-47 25h47m-47 25h47m-47 25h47M277 145h50m-50 23h50m-50 23h50" /><path d="M92 99h84v114H92Zm170 25h82v89h-82Z" fill="currentColor" opacity=".06" /><path d="M47 232q34-12 69 0t69 0 69 0 69 0 69 0" opacity=".45" /></g>}
    </svg>
  </div>;
}
