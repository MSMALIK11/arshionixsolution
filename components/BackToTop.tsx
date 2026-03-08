"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className="fixed bottom-6 right-6 z-40 rounded-full w-12 h-12 shadow-lg md:bottom-8 md:right-8"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}
