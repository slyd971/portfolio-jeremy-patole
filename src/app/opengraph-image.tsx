import { ImageResponse } from "next/og";
import { portfolioConfig } from "@/data/config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background:
            "radial-gradient(circle at 80% 20%, rgba(96,165,250,0.42), transparent 32%), linear-gradient(135deg, #030712 0%, #050816 48%, #0B1524 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            color: "#BFDBFE",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            {portfolioConfig.identity.initials}
          </div>
          {portfolioConfig.identity.fullName}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 880,
              fontSize: 78,
              lineHeight: 0.98,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            <span>Data Analyste</span>
            <span>& ingénierie aéronautique</span>
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 780,
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.74)",
            }}
          >
            Python, SQL, Power BI, Tableau et projets data orientés décision.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
