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
