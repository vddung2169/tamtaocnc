import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = "Tâm Táo CNC — độ SIM iPhone lock, CNC, thay pin tại TP HCM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0D0C",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#A8B0AA" }}>
          {site.tagline}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, letterSpacing: -1 }}>
            <span style={{ color: "#2BE85F" }}>Tâm Táo</span>
            <span style={{ color: "#FFFFFF", marginLeft: 16 }}>CNC</span>
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 44, color: "#FFFFFF" }}>
            {site.heroTitle}
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 26, color: "#A8B0AA" }}>
            Độ SIM vật lý • EID • CNC máy Lock • Thay pin dung lượng cao
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #128A3A",
            paddingTop: 28,
            fontSize: 28,
            color: "#FFFFFF",
          }}
        >
          <span>{site.storeAddress}</span>
          <span style={{ color: "#2BE85F", fontWeight: 700 }}>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
