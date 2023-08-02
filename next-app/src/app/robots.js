import config from "@config/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${config.siteUrl}sitemap.xml`,
  };
}
