import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pokemon-lazarus.net"),
  title: {
    default: "Pokémon Lazarus Download | Ilios Region ROM Hack Hub",
    template: "%s | Pokémon Lazarus ROM Hack",
  },
  description:
    "Download Pokémon Lazarus safely, browse the Ilios Pokédex and mythic forms, grab cheats, tools, and guides to beat the ROM hack without crashes.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/",
  },
  keywords: [
    "pokemon lazarus",
    "ilios region",
    "pokemon lazarus download",
    "pokemon lazarus pokedex",
    "rom hack tools",
    "pokemon cheats",
  ],
  openGraph: {
    title: "Pokémon Lazarus Download | Ilios Region ROM Hack Hub",
    description:
      "Download Pokémon Lazarus safely, browse the Ilios Pokédex and mythic forms, grab cheats, tools, and guides to beat the ROM hack without crashes.",
    url: "https://pokemon-lazarus.net/",
    siteName: "Pokémon Lazarus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Lazarus Download | Ilios Region ROM Hack Hub",
    description:
      "Download Pokémon Lazarus safely, browse the Ilios Pokédex and mythic forms, grab cheats, tools, and guides to beat the ROM hack without crashes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WYWPPEJEWL";
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "uelx2g1wbc";

  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
