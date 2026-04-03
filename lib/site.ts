/**
 * Site-wide links. Set in .env or replace placeholders.
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com",
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://twitter.com",
  },
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
};

/** URLs for JSON-LD `sameAs` — only full profile URLs (skips unset or generic site roots). */
export function organizationSameAsUrls(): string[] {
  const raw = [
    process.env.NEXT_PUBLIC_GITHUB_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_TWITTER_URL,
  ];
  return raw.filter((u): u is string => {
    if (typeof u !== "string" || !u.startsWith("http")) return false;
    try {
      const path = new URL(u).pathname.replace(/\/$/, "") || "/";
      return path !== "/";
    } catch {
      return false;
    }
  });
}
