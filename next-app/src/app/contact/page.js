import { openGraph } from "shared/sharedMetadata";
const { default: ContactPage } = require("@modules/contact");

require("dotenv").config();
export const metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}contact`),
  title: "Contact Antonio Vidakovic - Freelance UX/UI Designer for Hire",
  description:
    "Are you looking for a freelance UX/UI designer to help you improve your product and solve user problems? Let's collaborate! Contact me today to discuss your project and learn how I can help you achieve your goals.",
  openGraph: {
    ...openGraph,
    title: "Contact Antonio Vidakovic - Freelance UX/UI Designer for Hire",
    description:
      "Are you looking for a freelance UX/UI designer to help you improve your product and solve user problems? Let's collaborate! Contact me today to discuss your project and learn how I can help you achieve your goals.",
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
