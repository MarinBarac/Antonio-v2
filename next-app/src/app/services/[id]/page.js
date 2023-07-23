import Service from "@modules/services/Service";
import { getService } from "@services/services";

export const generateMetadata = async ({ params: { id } }) => {
  const pageInfo = await getService(id);
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

const ServicePage = ({ params: { id } }) => {
  return <Service id={id} />;
};

export default ServicePage;
