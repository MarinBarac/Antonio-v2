import config from "@config/site";
import { openGraph } from "shared/sharedMetadata";

const { default: ProjectsPage } = require("@modules/projects");

export const metadata = {
  metadataBase: new URL(`${config.siteUrl}projects`),
  title:
    "Antonio Vidakovic - UX/UI Design Portfolio | Saas Platforms, Web Shops, Marketing Sites, and More",
  description:
    "Explore my portfolio of UX/UI design work, including projects for Saas platforms, web shops, marketing sites, and more. See how I transform quality user experience flows into user interfaces backed by research and psychology. Contact me to discuss your next project.",
  openGraph: {
    ...openGraph,
    title:
      "Antonio Vidakovic - UX/UI Design Portfolio | Saas Platforms, Web Shops, Marketing Sites, and More",
    description:
      "Explore my portfolio of UX/UI design work, including projects for Saas platforms, web shops, marketing sites, and more. See how I transform quality user experience flows into user interfaces backed by research and psychology. Contact me to discuss your next project.",
  },
};

const Projects = async () => {
  return <ProjectsPage />;
};

export default Projects;
