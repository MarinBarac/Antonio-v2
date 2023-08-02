import config from "@config/site";
import { getPages } from "@services/pages";

export default async function sitemap() {
  require("dotenv").config();
  const pages = await getPages();
  const lastModified = new Date("7/23/2023");

  return pages?.map((page) => ({
    url: `${config.siteUrl}${page.href}`,
    lastModified,
  }));
}
