module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL}sitemap.xml`,
      `${process.env.SITE_URL}server-sitemap.xml`,
    ],
  },
};
