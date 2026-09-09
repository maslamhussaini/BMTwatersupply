import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const alt = "Basma Al Madina Transport LLC — Water Supply & Tanker Delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";
export default async function Image() {
  const logo = await readFile(path.join(process.cwd(), "public/bmt-logo.svg"));
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#0a2638", color: "#ffffff", display: "flex", padding: 70, alignItems: "center", gap: 60 }}>
    <div style={{ display: "flex", background: "#ffffff", borderRadius: 24, padding: 20 }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders embedded image bytes. */}
      <img src={`data:image/svg+xml;base64,${logo.toString("base64")}`} width={260} height={260} alt="BMT" />
    </div><div style={{ display: "flex", flexDirection: "column", flex: 1 }}><div style={{ fontSize: 21, color: "#8cddd7", marginBottom: 28 }}>BASMA AL MADINA TRANSPORT LLC</div><div style={{ fontSize: 66, lineHeight: 1.1, marginBottom: 30 }}>Water where you need it.</div><div style={{ fontSize: 27, color: "#c9dce4" }}>Water supply & tanker delivery</div><div style={{ fontSize: 22, color: "#8cddd7", marginTop: 22 }}>Dubai & UAE</div></div>
  </div>, size);
}
