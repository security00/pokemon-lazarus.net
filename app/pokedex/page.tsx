import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokédex | Pokémon Lazarus",
  description:
    "Browse Mythic Ilios Pokédex entries, locations, and encounter tips for the Pokémon Lazarus ROM hack.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/pokedex",
  },
};

const dexEntries = [
  {
    name: "Gryphon Arcanine",
    type: "Fire/Flying",
    location: "Sky Pillars (dawn/dusk)",
    role: "Late-game sweeper with burn immunity",
  },
  {
    name: "Medusa Milotic",
    type: "Water/Fairy",
    location: "Ilios Coast (evening)",
    role: "Charm-into-stall specialist",
  },
  {
    name: "Ares Scizor",
    type: "Bug/Steel",
    location: "Temple of Hephaestus (arena)",
    role: "Mega-ready pivot with Forge ability",
  },
  {
    name: "Chimera Hydreigon",
    type: "Dark/Dragon",
    location: "Elite hunt after Badge 6",
    role: "Mixed attacker with mythic coverage",
  },
  {
    name: "Nymph Gardevoir",
    type: "Psychic/Fairy",
    location: "Forest of Echoes",
    role: "Support with wish + mist veil",
  },
  {
    name: "Atlas Torterra",
    type: "Grass/Ground",
    location: "Mount Ilios ascent",
    role: "Bulky terrain setter for weather quests",
  },
];

const encounterTips = [
  {
    title: "Dupes clause ready",
    detail: "Track first encounters and skip repeats on routes to keep runs fresh.",
  },
  {
    title: "Time-of-day spawns",
    detail: "Dusk opens mythic encounters, dawn reveals fast movers for speedruns.",
  },
  {
    title: "Weather gating",
    detail: "Rain boosts Coast spawns; sandstorms unlock Fossil ambush events.",
  },
  {
    title: "Mythic rerolls",
    detail: "Use incense drops in ruins to reroll Titan birds once per badge.",
  },
];

export default function PokedexPage() {
  return (
    <div className="page-shell bg-ruins-dusk">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Pokédex</p>
            <h1 className="text-3xl font-black text-white">Mythic Ilios Compendium</h1>
            <p className="text-sm text-[#d4e0ff]">
              Locations, roles, and safe-mode notes for signature Lazarus forms.
            </p>
          </div>
          <div className="btn-row">
            <Link className="pixel-btn secondary" href="/">
              Home
            </Link>
            <Link className="btn-ghost" href="/tools">
              Tools
            </Link>
          </div>
        </header>
        <div className="greek-line" />

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Spotlight entries</p>
              <h2 className="section-title">Custom mythic forms</h2>
              <p className="section-subtitle">
                Quick read cards to prep for boss fights, Hardcore runs, and story-first playthroughs.
              </p>
            </div>
            <span className="pill gold">Spoiler light</span>
          </div>
          <div className="grid-3">
            {dexEntries.map((entry) => (
              <div key={entry.name} className="pixel-card flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-white">{entry.name}</h3>
                  <span className="pill">{entry.type}</span>
                </div>
                <p className="text-sm text-[#d4e0ff]">{entry.role}</p>
                <p className="text-xs uppercase tracking-wide text-[#c7d6ff]">
                  {entry.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Encounters</p>
              <h2 className="section-title">Route prep</h2>
              <p className="section-subtitle">
                Know when to hunt, what to avoid, and how to respect soft-lock triggers.
              </p>
            </div>
            <Link className="btn-primary" href="/community">
              Ask for seeds
            </Link>
          </div>
          <div className="grid-2">
            {encounterTips.map((tip) => (
              <div key={tip.title} className="pixel-card">
                <h4 className="text-lg font-black text-white">{tip.title}</h4>
                <p className="text-sm text-[#d4e0ff]">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Checklist</p>
              <h2 className="section-title">Run-starter favorites</h2>
              <p className="section-subtitle">
                Starters, tanks, and early utility picks to keep your first hours stable.
              </p>
            </div>
            <Link className="btn-ghost" href="/tools">
              Open team builder
            </Link>
          </div>
          <div className="grid-auto">
            {["Litten", "Chespin", "Sprigatito", "Rowlet", "Froakie", "Fuecoco"].map(
              (starter) => (
                <div
                  key={starter}
                  className="pixel-frame text-center"
                >
                  <p className="text-sm uppercase tracking-wide text-[#c7d6ff]">Starter</p>
                  <h4 className="text-lg font-black text-white">{starter}</h4>
                  <p className="text-sm text-[#d4e0ff]">Mythic ready</p>
                </div>
              ),
            )}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/community">Community</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Data compiled for the Pokémon Lazarus Ilios region ROM hack. Always patch from a legally
            sourced Pokémon Emerald ROM and keep backups of your saves.
          </p>
        </footer>
      </div>
    </div>
  );
}
