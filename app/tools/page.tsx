import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools | Pokémon Lazarus",
  description:
    "Utilities for the Pokémon Lazarus ROM hack: team builder, encounter tracker, cheat safe-mode, and patch verifier.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/tools",
  },
};

const tools = [
  {
    title: "Team Builder",
    detail: "Coverage heatmap, synergy pairing, and EV presets tuned for Lazarus battles.",
    extras: "Import/export via JSON, Hardcore toggle, ability filters.",
  },
  {
    title: "Encounter Tracker",
    detail: "Route-by-route logging with dupes clause, shiny odds, and time-of-day spawns.",
    extras: "Exports to shareable links for streams and challenges.",
  },
  {
    title: "Cheat Safe-Mode",
    detail: "Verified codes for mGBA, RetroArch, Delta with emulator-safe notes.",
    extras: "Rare Candy, Master Ball, Walk Through Walls, Money Max.",
  },
  {
    title: "Patch Verifier",
    detail: "Checksum helper so your v1.1 UPS patch sits on a clean Emerald base.",
    extras: "Stops soft-locks, supports manual and automatic checks.",
  },
];

const roadmaps = [
  {
    title: "Live builder + Pokédex sync",
    note: "One-click add to team from Pokédex rows without spoilers.",
  },
  {
    title: "Challenge presets",
    note: "Nuzlocke, Hardcore, and Speedrun presets with rules baked in.",
  },
  {
    title: "Cloud saves helper",
    note: "Step-by-step iCloud/Drive sync for playing on mobile + desktop.",
  },
];

export default function ToolsPage() {
  return (
    <div className="page-shell bg-acropolis-trail">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Tools</p>
            <h1 className="text-3xl font-black text-white">Utility deck for Ilios</h1>
            <p className="text-sm text-[#d4e0ff]">
              Build smarter teams, log encounters, and keep your Pokémon Lazarus run stable.
            </p>
          </div>
          <div className="btn-row">
            <Link className="pixel-btn secondary" href="/">
              Home
            </Link>
            <Link className="btn-ghost" href="/pokedex">
              Pokédex
            </Link>
          </div>
        </header>
        <div className="greek-line" />

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Utility suite</p>
              <h2 className="section-title">Plan, track, and verify</h2>
              <p className="section-subtitle">
                No-install guidance so you can use these workflows with the emulator you already have.
              </p>
            </div>
            <span className="pill gold">Ready today</span>
          </div>
          <div className="grid-2">
            {tools.map((tool) => (
              <div key={tool.title} className="pixel-card flex flex-col gap-2">
                <h3 className="text-lg font-black text-white">{tool.title}</h3>
                <p className="text-sm text-[#d4e0ff]">{tool.detail}</p>
                <p className="text-xs uppercase tracking-wide text-[#c7d6ff]">
                  {tool.extras}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Roadmap</p>
              <h2 className="section-title">What we are building next</h2>
              <p className="section-subtitle">
                Feature roadmap to keep you engaged and returning for new utilities.
              </p>
            </div>
            <Link className="btn-primary" href="/community">
              Vote in community
            </Link>
          </div>
          <div className="grid-3">
            {roadmaps.map((item) => (
              <div key={item.title} className="pixel-card">
                <h4 className="text-lg font-black text-white">{item.title}</h4>
                <p className="text-sm text-[#d4e0ff]">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Download guardrails</p>
              <h2 className="section-title">Crash-free checklist</h2>
              <p className="section-subtitle">
                Keep your playthrough intact with these safety steps before every session.
              </p>
            </div>
            <Link className="btn-secondary" href="/download">
              Official mirror
            </Link>
          </div>
          <div className="grid-auto">
            {[
              "Verify UPS checksum before loading your save.",
              "Keep emulator rewind off to avoid event desyncs.",
              "Back up .sav to cloud each gym badge.",
              "Turn off cheats before Gym and Elite battles.",
            ].map((item) => (
              <div key={item} className="pixel-card">
                <p className="text-sm text-[#d4e0ff]">• {item}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/pokedex">Pokédex</Link>
            <Link href="/community">Community</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Tools and checklists are community-created for the Pokémon Lazarus ROM hack. Keep backups of
            saves and use cheats responsibly to avoid soft-locks.
          </p>
        </footer>
      </div>
    </div>
  );
}
