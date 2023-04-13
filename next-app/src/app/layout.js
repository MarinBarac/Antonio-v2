import "./globals.scss";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@context/context";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer";
import GoogleImage from '@assets/images/google.png';
import Script from "next/script";

const inter = Inter({ subsets: ["cyrillic"], weights: ["400", "500", "600"] });

export const generateMetadata = () => {
  require("dotenv").config();
  return {
    charSet: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    keywords: [
      "UX/UI",
      "Antonio Vidakovic Design",
      "Antonio Vidakovic",
      "UX/UI design",
      "Website design",
    ],
    formatDetection: {
      telephone: false,
    },
  };
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Antonio Vidakovic Design",
    image: GoogleImage.src,
    description:
      "As a UX/UI designer, I create quality user experiences and interfaces that solve problems and improve products. Learn more about my process and see examples of my work. Contact me today to collaborate on your next project.",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCMT73Z');`,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D0WMT17P9R"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D0WMT17P9R');`,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11119722550"
        />
        <Script
          id="analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11119722550');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCMT73Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeContextProvider>
          <Navbar />
          <div className="content">
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
