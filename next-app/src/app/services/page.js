const { default: ServicesPage } = require("@modules/services");

require("dotenv").config();
export const metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}services`),
  title: "UX/UI design, Product design , Figma 1-on-1 training",
  description:
    "As a freelance UX/UI designer, I offer a range of design and consulting services to help businesses create effective digital experiences. Whether you need design work for your website, app, or other digital product, or want to consult on UX/UI best practices, I can provide the expertise you need. With a focus on user-centered design, I work closely with clients to ensure their digital products meet both user needs and business goals. Contact me today to learn more about my services and how I can help elevate your digital presence.",
  openGraph: {
    url: `${process.env.SITE_URL}projects`,
    title: "UX/UI design, Product design , Figma 1-on-1 training",
    description:
      "As a freelance UX/UI designer, I offer a range of design and consulting services to help businesses create effective digital experiences. Whether you need design work for your website, app, or other digital product, or want to consult on UX/UI best practices, I can provide the expertise you need. With a focus on user-centered design, I work closely with clients to ensure their digital products meet both user needs and business goals. Contact me today to learn more about my services and how I can help elevate your digital presence.",
  },
};

const Services = () => {
  return <ServicesPage />;
};

export default Services;
