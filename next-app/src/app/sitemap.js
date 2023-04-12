export default function sitemap() {
  require("dotenv").config();
  const dateString = "April 7, 2023 18:00:00";

  return [
    {
      url: process.env.SITE_URL,
      lastModified: new Date(dateString),
    },
    {
      url: `${process.env.SITE_URL}about`,
      lastModified: new Date(dateString),
    },
    {
        url: `${process.env.SITE_URL}contact`,
        lastModified: new Date(dateString),
      },
    {
      url: `${process.env.SITE_URL}projects`,
      lastModified: new Date(dateString),
    },
    {
        url: `${process.env.SITE_URL}services`,
        lastModified: new Date(dateString),
      },
  ];
}
