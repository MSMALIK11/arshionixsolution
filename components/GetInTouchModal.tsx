"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Phone, Mail, Check } from "lucide-react";
import { site } from "@/lib/site";

const AUTO_HIDE_MS = 10_000;

const PRIMARY_TEL = "+917300519548";
const PRIMARY_DISPLAY = "+91 73005 19548";
const WHATSAPP_NUMBER = "917300519548";

export default function GetInTouchModal() {
  const [visible, setVisible] = useState(true);

  const close = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(close, AUTO_HIDE_MS);
    return () => clearTimeout(t);
  }, [visible, close]);

  const scrollToContact = () => {
    close();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/contact";
  };

  const email = (site as { company?: { email?: string } }).company?.email ?? "info@shoaibi.com";
  const calendly = (site as { calendly?: string }).calendly ?? "";

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        aria-hidden
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-in-touch-title"
        className="fixed left-1/2 top-1/2 z-[101] w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 card-webteck shadow-2xl shadow-brand-500/20"
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white hover:bg-brand-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 pt-10 pb-8">
          {/* Stars + Badge */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl text-amber-400">★</span>
            <span className="text-2xl text-amber-400">★</span>
            <div className="mx-1 flex flex-col items-center rounded-lg bg-gradient-to-r from-brand-500 to-violet-600 px-3 py-1.5 text-white shadow-lg shadow-brand-500/30">
              <span className="text-xs font-bold uppercase leading-tight">Same day response</span>
              <span className="text-[10px] font-medium uppercase">Guaranteed</span>
            </div>
            <span className="text-2xl text-amber-400">★</span>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-500/25 hover:opacity-95"
            id="get-in-touch-title"
          >
            Get in touch
          </button>

          {/* Intro text */}
          <div className="mt-4 rounded-xl border border-border bg-secondary/80 px-4 py-3 text-left text-sm leading-relaxed text-foreground">
            Let&apos;s talk about your project! No Spam, No Upselling! Just a detailed discussion.
          </div>

          {/* Contact options */}
          <div className="mt-4 flex items-center justify-center gap-0 divide-x divide-border rounded-lg border border-border bg-muted/50">
            {calendly ? (
              <a
                href={calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50"
              >
                <Phone className="h-5 w-5 text-brand-400" />
                <span className="text-xs font-medium">Book a Call</span>
              </a>
            ) : (
              <a
                href={`tel:${PRIMARY_TEL}`}
                className="flex flex-1 flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50"
              >
                <Phone className="h-5 w-5 text-brand-400" />
                <span className="text-xs font-medium">Book a Call</span>
              </a>
            )}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <svg className="h-5 w-5 text-brand-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex flex-1 flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <Mail className="h-5 w-5 text-brand-400" />
              <span className="text-xs font-medium">Email Us</span>
            </a>
          </div>

          {/* Primary phone number */}
          <a
            href={`tel:${PRIMARY_TEL}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/10 py-3 px-4 text-foreground hover:bg-brand-500/20"
          >
            <Phone className="h-5 w-5 shrink-0 text-brand-400" />
            <span className="font-semibold tabular-nums">{PRIMARY_DISPLAY}</span>
            <span className="text-sm text-muted-foreground">(India)</span>
          </a>

          {/* Book discovery call */}
          <a
            href={calendly || `tel:${PRIMARY_TEL}`}
            target={calendly ? "_blank" : undefined}
            rel={calendly ? "noopener noreferrer" : undefined}
            className="mt-5 block w-full rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 py-3.5 text-center text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-500/25 hover:opacity-95"
          >
            Book a discovery call now
          </a>

          {/* Assurance */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-400" aria-hidden />
              100% Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-400" aria-hidden />
              We sign NDA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
