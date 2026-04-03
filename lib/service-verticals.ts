export type ServiceFeature = { title: string; description: string };

/** Optional narrative block (e.g. “How we help” / “What we build”) on vertical pages */
export type ServiceVerticalSection = {
  title: string;
  subhead?: string;
  items: ServiceFeature[];
};

export type ServiceVertical = {
  /** URL segment e.g. healthcare-websites */
  slug: string;
  /** Short label for nav */
  navLabel: string;
  pageTitle: string;
  headline: string;
  subhead: string;
  problemTitle: string;
  problemBody: string;
  solutionTitle: string;
  solutionBody: string;
  features: ServiceFeature[];
  /** How we partner with this sector (process, principles) */
  howWeHelp?: ServiceVerticalSection;
  /** Concrete sites, pages, and integrations we deliver */
  whatWeBuild?: ServiceVerticalSection;
  /** Override default “What you get” heading and blurb */
  featuresTitle?: string;
  featuresSubhead?: string;
};

export const healthcareVertical: ServiceVertical = {
  slug: "healthcare-websites",
  navLabel: "Healthcare websites",
  pageTitle: "Healthcare Website Development",

  // 🔥 HERO FIX (BIG IMPACT)
  headline: "Get More Patient Bookings With a Website Patients Trust",
  subhead:
    "We design fast, secure, and patient-friendly healthcare websites that help clinics and doctors build credibility and turn visitors into booked appointments.",

  // 🔥 PROBLEM (EMOTIONAL + REAL)
  problemTitle: "Why most healthcare websites fail",
  problemBody:
    "Patients judge your credibility within seconds. If your website looks outdated, loads slowly, or makes it hard to find booking information, they leave and choose another clinic. Most practices lose potential patients simply because their website doesn’t build trust or guide them to take action.",

  // 🔥 SOLUTION (OUTCOME-DRIVEN)
  solutionTitle: "How we help you get more patients",
  solutionBody:
    "We build healthcare websites focused on one goal — turning visitors into patients. From clear service pages and doctor profiles to fast mobile performance and easy booking flows, everything is designed to help patients trust you quickly and take action.",

  // 🔥 HOW YOU HELP (ADD RESULTS)
  howWeHelp: {
    title: "How we help healthcare practices grow",
    subhead:
      "We work the way busy clinics need — simple process, clear decisions, and outcomes focused on increasing patient bookings.",
    items: [
      {
        title: "Fast discovery, no wasted time",
        description:
          "We quickly understand your services, locations, and booking process — so your website reflects how your clinic actually operates and avoids unnecessary delays.",
      },
      {
        title: "Patient-focused structure",
        description:
          "We design clear journeys for new and returning patients — helping them quickly understand your services and take action without confusion.",
      },
      {
        title: "Trust-driven design",
        description:
          "We use clean layouts, readable typography, and professional visuals to build instant credibility — increasing the chances patients choose you.",
      },
      {
        title: "Launch & growth ready",
        description:
          "Your website is fast, mobile-optimized, and built for search visibility — helping you attract more local patients consistently.",
      },
    ],
  },

  // 🔥 WHAT YOU BUILD (ADD VALUE LINE)
  whatWeBuild: {
    title: "What we build for healthcare practices",
    subhead:
      "Everything we create is focused on helping patients trust your practice and take action — not just making your website look good.",
    items: [
      {
        title: "Clinic & practice websites",
        description:
          "A professional website that clearly explains your services, locations, and why patients should choose you — with strong calls to book or contact.",
      },
      {
        title: "Service & treatment pages",
        description:
          "Dedicated pages that help patients understand your treatments while improving your visibility on Google.",
      },
      {
        title: "Doctor & team profiles",
        description:
          "Professional profiles that build trust by showcasing credentials, expertise, and specialties.",
      },
      {
        title: "Location & contact experience",
        description:
          "Clear maps, hours, and contact details — making it easy for patients to reach you without frustration.",
      },
      {
        title: "Booking & patient flows",
        description:
          "Simple, visible pathways to booking systems or contact forms — reducing drop-offs and increasing appointments.",
      },
      {
        title: "Content & SEO pages (optional)",
        description:
          "Blogs, FAQs, and resources that help you rank on Google and answer common patient questions.",
      },
    ],
  },

  // 🔥 FEATURES (RENAMED FOR CONVERSION)
  featuresTitle: "Everything your website needs to convert patients",
  featuresSubhead:
    "We focus on the essentials that directly impact trust, patient experience, and appointment bookings.",

  features: [
    {
      title: "Trust-focused design",
      description:
        "Professional layouts and visuals that make patients feel confident choosing your practice.",
    },
    {
      title: "Clear services & providers",
      description:
        "Structured pages that help patients quickly understand what you offer and who they’ll see.",
    },
    {
      title: "Easy patient actions",
      description:
        "Clear calls-to-action that guide visitors toward booking, calling, or contacting you.",
    },
    {
      title: "Local SEO & performance",
      description:
        "Fast-loading pages optimized to help you appear in local search results and attract more patients.",
    },
  ],
};

export const businessVertical: ServiceVertical = {
  slug: "business-websites",
  navLabel: "Business websites",
  pageTitle: "Business Website Development",
  headline: "Business websites that bring leads",
  subhead:
    "Local and growing businesses need a site that explains what you do, why you’re different, and how to hire you — in seconds.",
  problemTitle: "The problem",
  problemBody:
    "If your site is slow, vague, or only works on desktop, you lose leads to competitors. Social profiles alone don’t replace a proper home base on the web.",
  solutionTitle: "Our approach",
  solutionBody:
    "We build focused business sites: strong homepage, service pages, proof (reviews, logos, case snippets), and obvious contact — tuned for clarity and conversions.",
  features: [
    {
      title: "Clear offer",
      description: "Headlines and sections that say what you sell and who it’s for.",
    },
    {
      title: "Service pages",
      description: "Dedicated pages for each main offering so Google and humans both understand.",
    },
    {
      title: "Trust signals",
      description: "Testimonials, certifications, and team — whatever makes you credible.",
    },
    {
      title: "Speed & contact",
      description: "Fast load times, click-to-call, maps, and forms that work on phones.",
    },
  ],
};

export const personalBrandingVertical: ServiceVertical = {
  slug: "personal-branding-websites",
  navLabel: "Personal branding",
  pageTitle: "Personal Branding Websites",
  headline: "Personal branding sites that tell your story",
  subhead:
    "Coaches, creators, consultants, and experts need one place that ties together your story, work, and how to work with you.",
  problemTitle: "The problem",
  problemBody:
    "A scattered presence across LinkedIn, Linktree, and PDFs makes you forgettable. Without a flagship site, you’re harder to refer and harder to trust at a glance.",
  solutionTitle: "Our approach",
  solutionBody:
    "We craft a single narrative-led site: your positioning, selected work, media or speaking, and one primary CTA (book, subscribe, or apply) — aligned with your brand voice.",
  features: [
    {
      title: "Story & positioning",
      description: "Above-the-fold clarity on who you help and the outcome you deliver.",
    },
    {
      title: "Portfolio & proof",
      description: "Case highlights, logos, press, or video — structured for skimming.",
    },
    {
      title: "One main CTA",
      description: "Calendar, waitlist, or contact — we reduce decision fatigue.",
    },
    {
      title: "Newsletter & social",
      description: "Hooks to email and the platforms you actually use.",
    },
  ],
};

export const schoolVertical: ServiceVertical = {
  slug: "school-websites",
  navLabel: "School websites",
  pageTitle: "School & Education Website Development",
  headline: "School websites parents and students can rely on",
  subhead:
    "Schools, colleges, and training programs need a site that’s easy to navigate, reflects your values, and surfaces admissions, calendars, and contact without friction.",
  problemTitle: "The problem",
  problemBody:
    "Outdated PDFs, buried phone numbers, and cluttered menus frustrate parents and staff. If your site isn’t mobile-friendly or clear about how to apply or visit, you lose trust before anyone steps on campus.",
  solutionTitle: "Our approach",
  solutionBody:
    "We structure education sites around real journeys: prospective families, current parents, and students. Clear IA, accessible design, fast performance, and CTAs that match how you actually enroll and communicate.",
  features: [
    {
      title: "Admissions & programs",
      description: "Dedicated paths for applications, fees, and what you offer at each level.",
    },
    {
      title: "Trust & community",
      description: "Leadership, faculty, values, and news — presented so new families feel welcome.",
    },
    {
      title: "Mobile & accessibility",
      description: "Readable type, contrast, and layouts that work on phones — where parents live.",
    },
    {
      title: "Your stack",
      description: "We integrate with forms, portals, or calendars you already use where possible.",
    },
  ],
};

export const serviceVerticals: ServiceVertical[] = [
  healthcareVertical,
  businessVertical,
  personalBrandingVertical,
  schoolVertical,
];

export function getVerticalBySlug(slug: string): ServiceVertical | undefined {
  return serviceVerticals.find((v) => v.slug === slug);
}

export const serviceVerticalPaths = serviceVerticals.map((v) => `/${v.slug}` as const);
