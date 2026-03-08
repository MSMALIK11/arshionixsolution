"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_SECTION_ID = "contact";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById(CONTACT_SECTION_ID);
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top + window.scrollY : Infinity;
      setVisible(scrollY > 400);
      setContactInView(contactTop < scrollY + window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById(CONTACT_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible || contactInView) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 md:bottom-8"
      role="complementary"
      aria-label="Quick action"
    >
      <Button
        onClick={scrollToContact}
        size="lg"
        className="rounded-full shadow-xl shadow-brand-500/30 px-6 gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Get a free quote
      </Button>
    </div>
  );
}
