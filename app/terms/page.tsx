import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Pokémon Lazarus",
  description:
    "Community-run terms for the Pokémon Lazarus fan site. No ROMs hosted; patch at your own risk and keep backups.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="page-shell bg-ruins-dusk">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Terms</p>
            <h1 className="text-3xl font-black text-white">Site terms & community rules</h1>
            <p className="text-sm text-[#d4e0ff]">
              Fan-run portal for Pokémon Lazarus. We share patches, guides, and community resources — not ROMs.
            </p>
          </div>
          <div className="btn-row">
            <Link className="pixel-btn secondary" href="/">
              Home
            </Link>
            <Link className="btn-ghost" href="/privacy">
              Privacy
            </Link>
          </div>
        </header>
        <div className="greek-line" />

        <section className="glass p-5 space-y-4">
          <div>
            <p className="tag">Disclaimer</p>
            <p className="text-sm text-[#d4e0ff]">
              Pokémon Lazarus is a fan-made ROM hack based on Pokémon Emerald. This site does not host or distribute
              original ROMs. Users must supply their own legally obtained base game.
            </p>
          </div>
          <div>
            <p className="tag">Use at your own risk</p>
            <p className="text-sm text-[#d4e0ff]">
              Patching and emulator setup are performed by users on their own devices. Keep backups of saves and verify
              downloads before use.
            </p>
          </div>
          <div>
            <p className="tag">Content ownership</p>
            <p className="text-sm text-[#d4e0ff]">
              Pokémon and related trademarks are owned by Nintendo/Creatures Inc./GAME FREAK. This site is community-run
              and not affiliated with those companies.
            </p>
          </div>
          <div>
            <p className="tag">Conduct</p>
            <ul className="mt-2 space-y-2 text-sm text-[#d4e0ff]">
              <li>• No sharing of copyrighted ROMs or commercial game files.</li>
              <li>• Keep spoilers tagged and avoid harassment in community spaces.</li>
              <li>• Only post cheat codes and links that are verified safe for emulators.</li>
            </ul>
          </div>
          <div>
            <p className="tag">Contact</p>
            <p className="text-sm text-[#d4e0ff]">
              Questions or takedown requests: <a href="mailto:support@pokemon-lazarus.net">support@pokemon-lazarus.net</a>
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
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Fan site terms for Pokémon Lazarus — no ROM hosting, patch at your own risk, keep backups, and respect IP
            owners.
          </p>
        </footer>
      </div>
    </div>
  );
}
