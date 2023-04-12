import "./globals.scss";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@context/context";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["cyrillic"], weights: ["400", "500", "600"] });

export const metadata = {
  charSet: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    siteName: "Antonio Vidakovic - UI/UX Designer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
