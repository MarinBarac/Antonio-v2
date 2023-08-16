import HomePage from "@modules/home";
import { openGraph } from "shared/sharedMetadata";

export const generateMetadata = () => {
  return {
    title:
      "Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design",
    description:
      "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
    openGraph: {
      ...openGraph,
      title:
        "Antonio Vidakovic - UX/UI Designer | Problem-Solving User Experience and Interface Design",
      description:
        "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
    },
  };
};

export default function Home(props) {
  return <HomePage />;
}
