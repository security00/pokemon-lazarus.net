import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Pokémon Lazarus",
  description:
    "Privacy note for the Pokémon Lazarus fan site. We avoid collecting personal data; third-party embeds may set their own cookies.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="page-shell bg-ruins-dusk">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Privacy</p>
            <h1 className="text-3xl font-black text-white">How we handle data</h1>
            <p className="text-sm text-[#d4e0ff]">
              Community-run, minimal data — basic analytics and external embeds may set their own cookies.
            </p>
          </div>
          <div className="btn-row">
            <Link className="pixel-btn secondary" href="/">
              Home
            </Link>
            <Link className="btn-ghost" href="/terms">
              Terms
            </Link>
          </div>
        </header>
        <div className="greek-line" />

        <section className="glass p-5 space-y-4">
          <div>
            <p className="tag">What we collect</p>
            <p className="text-sm text-[#d4e0ff]">
              We do not ask for account sign-ups. Standard server logs and basic analytics (if enabled) may capture
              anonymized visit data such as IP, user agent, and page paths for performance and abuse prevention.
            </p>
          </div>
          <div>
            <p className="tag">Third-party content</p>
            <p className="text-sm text-[#d4e0ff]">
              Outbound links (MediaFire, Mega, Ko-fi, YouTube, Reddit, etc.) and embedded media follow their own privacy
              policies and may set cookies. Check those providers directly if you have concerns.
            </p>
          </div>
          <div>
            <p className="tag">Cookies</p>
            <p className="text-sm text-[#d4e0ff]">
              We aim to keep cookies minimal. Third-party embeds or analytics may place cookies for functionality or
              usage insights.
            </p>
          </div>
          <div>
            <p className="tag">Your choices</p>
            <ul className="mt-2 space-y-2 text-sm text-[#d4e0ff]">
              <li>• Use private/incognito browsing if you want to limit cookie persistence.</li>
              <li>• Avoid clicking third-party links if you do not wish to interact with their trackers.</li>
              <li>• You can request log removal where feasible; reach out via email below.</li>
            </ul>
          </div>
          <div>
            <p className="tag">Contact</p>
            <p className="text-sm text-[#d4e0ff]">
              Privacy questions: <a href="mailto:support@pokemon-lazarus.net">support@pokemon-lazarus.net</a>
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/download">Download</Link>
            <Link href="/pokedex">Pokédex</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/community">Community</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Privacy note for the Pokémon Lazarus fan site — minimal data by default; third-party services set their own
            policies.
          </p>
        </footer>
      </div>
    </div>
  );
}
