import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D00010",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
