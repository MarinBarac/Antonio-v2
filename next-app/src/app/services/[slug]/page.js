import Service from "@modules/services/Service";
import { getService } from "@services/services";
import { openGraph } from "shared/sharedMetadata";

export const generateMetadata = async ({ params: { slug } }) => {
  const pageInfo = await getService(slug);
  return {
    title: `Antonio Vidakovic - Services | ${pageInfo.title}`,
    description: pageInfo.description,
    openGraph: {
      ...openGraph,
      title: `Antonio Vidakovic - Services | ${pageInfo.title}`,
      description: pageInfo.description,
    },
  };
};

const ServicePage = ({ params: { slug } }) => {
  return <Service slug={slug} />;
};

export default ServicePage;
