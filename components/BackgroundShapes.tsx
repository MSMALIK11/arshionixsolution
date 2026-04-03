"use client";

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Large soft blobs with gentle float animation */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08] dark:opacity-[0.06] blur-3xl shape-float"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        }}
      />
      <div
        className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full opacity-[0.06] dark:opacity-[0.05] blur-3xl shape-float-slow"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.05] dark:opacity-[0.04] blur-3xl shape-float"
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%)",
        }}
      />
      {/* Small geometric orbs - extra shape design */}
      <div
        className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full opacity-[0.06] dark:opacity-[0.05] blur-2xl shape-float-slow"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)" }}
      />
      <div
        className="absolute bottom-[30%] right-[20%] w-40 h-40 rounded-full opacity-[0.05] dark:opacity-[0.04] blur-2xl shape-float"
        style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)" }}
      />
      {/* Subtle grid/dots for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(238, 84%, 67%) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
