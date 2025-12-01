import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pokemon-lazarus.net"),
  title: {
    default: "Pokémon Lazarus | Ilios Region Fan Portal",
    template: "%s | Pokémon Lazarus",
  },
  description:
    "Explore Pokémon Lazarus with download help, Pokédex data, cheats, tools, and a vibrant community built for the Ilios region ROM hack.",
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
    title: "Pokémon Lazarus | Ilios Region Fan Portal",
    description:
      "Guides, Pokédex, tools, download support, and community updates for the Pokémon Lazarus ROM hack.",
    url: "https://pokemon-lazarus.net/",
    siteName: "Pokémon Lazarus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Lazarus | Ilios Region Fan Portal",
    description:
      "Download instructions, guides, Pokédex, and community updates for the Pokémon Lazarus ROM hack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
