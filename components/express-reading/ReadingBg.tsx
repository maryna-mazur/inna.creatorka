"use client";

export default function ReadingBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Top-left warm glow */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          left: "-10%",
          width: "55%",
          height: "45%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(212,191,176,0.8) 0%, rgba(212,191,176,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Center-right teal glow */}
      <div
        className="absolute"
        style={{
          top: "25%",
          right: "-5%",
          width: "40%",
          height: "35%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(43,90,116,0.55) 0%, rgba(43,90,116,0) 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Bottom-left warm glow */}
      <div
        className="absolute"
        style={{
          bottom: "-5%",
          left: "-5%",
          width: "45%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(160,82,45,0.4) 0%, rgba(160,82,45,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom-right teal glow */}
      <div
        className="absolute"
        style={{
          bottom: "10%",
          right: "-10%",
          width: "50%",
          height: "35%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(43,90,116,0.45) 0%, rgba(43,90,116,0) 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
