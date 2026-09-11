import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070b12 0%, #0c1424 55%, #071018 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#7dd3fc",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Enterprise engineering → AI systems
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 68,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Building enterprise software for the AI era.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 32, color: "#94a3b8" }}>
          Navod PM — Senior Software Engineer, UAE
        </div>
      </div>
    ),
    { ...size }
  );
}
