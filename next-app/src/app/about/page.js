import AboutPage from "@modules/about";
import OGImage from "@assets/images/opengraph-image.png";

require("dotenv").config();
export const metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}about`),
  title: "Experienced UX/UI Designer with a Business Mindset",
  description:
    "With a bachelor's in Business economics and master's in Marketing and communication, I bring a unique perspective to UX/UI design. My focus is on creating quality experiences and interfaces that solve user problems and improve your product. Contact me to learn more.",
  openGraph: {
    images: [OGImage.src],
    url: `${process.env.SITE_URL}about`,
    title: "Experienced UX/UI Designer with a Business Mindset",
    description:
      "With a bachelor's in Business economics and master's in Marketing and communication, I bring a unique perspective to UX/UI design. My focus is on creating quality experiences and interfaces that solve user problems and improve your product. Contact me to learn more.",
  },
};

const About = () => {
  return <AboutPage />;
};

export default About;
