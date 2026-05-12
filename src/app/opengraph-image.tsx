import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const alt = "WienCraft premium crochet brand presentation";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #faf3e7 0%, #f4ead8 55%, #eadac0 100%)",
          color: "#211814",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "64%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "74px",
                height: "74px",
                borderRadius: "999px",
                border: "3px solid #b8643e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b8643e",
                background: "rgba(184, 100, 62, 0.08)",
                fontSize: "34px",
                fontWeight: 700,
              }}
            >
              W
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: "42px", fontWeight: 700 }}>
                <span>Wien</span>
                <span style={{ color: "#b8643e" }}>Craft</span>
              </div>
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#8d7769",
                }}
              >
                Handmade Premium
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "18px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b8643e",
              }}
            >
              Premium Crochet Studio
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "72px",
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              <span>Kerajinan Rajut</span>
              <span>untuk Hadiah</span>
              <span>dan Custom Order</span>
            </div>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "28px",
                lineHeight: 1.45,
                color: "#5a4a42",
                maxWidth: "88%",
              }}
            >
              Tas, dompet, boneka, bouquet, dan produk handmade premium yang dibuat dengan detail dan sentuhan personal.
            </div>
          </div>
        </div>

        <div
          style={{
            width: "28%",
            borderRadius: "40px",
            background: "linear-gradient(180deg, rgba(184,100,62,0.14) 0%, rgba(184,100,62,0.04) 100%)",
            border: "2px solid rgba(184,100,62,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "34px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#9a664d",
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              fontFamily: "Arial, sans-serif",
              color: "#5a4a42",
            }}
          >
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#211814" }}>Handmade</div>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#211814" }}>Premium Yarn</div>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#211814" }}>Custom Request</div>
          </div>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              color: "#7b675c",
            }}
          >
            wiencraft.site
          </div>
        </div>
      </div>
    ),
    size,
  );
}
