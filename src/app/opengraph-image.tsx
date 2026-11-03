import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export const alt = `${portfolio.name} — ${portfolio.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The site's poster font. If it can't be read, the image falls back to the default font.
async function posterFont() {
  try {
    return await readFile(
      join(process.cwd(), "node_modules/@fontsource/dela-gothic-one/files/dela-gothic-one-latin-400-normal.woff"),
    );
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await posterFont();
  const poster = font ? "Dela Gothic One" : undefined;
  const [lead, ...rest] = portfolio.role.en.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f7fbff",
          background: "linear-gradient(135deg, #1d4d8d 0%, #123a6b 45%, #05070c 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 6, color: "#f4b390" }}>
          <div style={{ width: 48, height: 3, background: "#f4b390" }} />
          {portfolio.kicker.en.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: poster, fontSize: 84, lineHeight: 1, letterSpacing: -1 }}>{portfolio.name}</div>
          <div style={{ display: "flex", gap: 22, marginTop: 24, fontFamily: poster, fontSize: 60, lineHeight: 1 }}>
            <span>{lead}</span>
            <span style={{ color: "#f4b390" }}>{rest.join(" ")}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(247, 251, 255, 0.3)",
            paddingTop: 28,
            fontSize: 24,
            letterSpacing: 2,
            color: "rgba(247, 251, 255, 0.85)",
          }}
        >
          <span>{portfolio.disciplines.map((d) => d.en).join("  ·  ")}</span>
          <span>{portfolio.location.en.split(" · ")[0]}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Dela Gothic One", data: font, weight: 400, style: "normal" }] : [],
    },
  );
}
