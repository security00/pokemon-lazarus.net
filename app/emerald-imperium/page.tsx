import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon Emerald Imperium Guide | Patch, Features, QoL",
  description:
    "Authorized summary of Pokémon Emerald Imperium: Radical Red-style Emerald hack with Gen 1-9 roster, custom Megas, QoL upgrades, Minimal Grinding Mode, and online patcher links.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/emerald-imperium",
  },
};

const quickLinks = [
  {
    label: "Online ROM patcher",
    href: "https://danayatsuta.github.io/emerald-imperium-patcher/",
    description: "Pre-loaded BPS patch; upload a clean Emerald .gba and click Apply Patch.",
    badge: "Recommended",
  },
  {
    label: "Direct download",
    href: "https://drive.google.com/drive/folders/1BL1n5kBVmkXwCphP2-EqFx9VwKqhm3QZ?usp=drive_link",
    description: "Google Drive folder with the current and previous Emerald Imperium patches.",
    badge: "Mirror",
  },
  {
    label: "Docs bundle",
    href: "https://drive.google.com/drive/folders/1auRPBg8Ts50NByIskMy6b2XHnmNqIKtV?usp=drive_link",
    description: "Boss sheets, encounters, item lists, bugs, and Radical Red differences.",
    badge: "Notes",
  },
  {
    label: "Discord server",
    href: "https://discord.gg/kKVpPndTwG",
    description: "Updates, bug reports, feedback, and balance discussion with the dev.",
    badge: "Community",
  },
];

const featureHighlights = [
  "Gen 1-9 roster available (most Legendaries already added).",
  "Modern battle engine with level caps and smarter AI lifted from Radical Red.",
  "Custom Mega Evolutions including Gen 4 starters and Gigantamax forms converted to Megas.",
  "Built-in randomizer for species and abilities, plus configurable difficulty modes.",
  "Over 100 tuned boss battles: gyms, Elite Four, rivals, Aqua/Magma, and optional mini-bosses.",
  "DexNav, toggleable following Pokémon, HG/SS-style Pokédex and party menu with EV/IV view.",
  "Gen 4 NPCs appear (Dawn, gym leaders, etc.) alongside new post-game legendary events.",
  "Balance changes mirror Radical Red (types, stats, learnsets) so RR calc and dex still apply.",
];

const qolItems = [
  "No HM teaching required; reusable TMs and restored held items after battles.",
  "Expanded bag with Mega Stone pocket, pocket sorting, and multiple key item registration.",
  "PokeVial with infinite uses and PC access from anywhere for quick heals and swaps.",
  "Time changer plus toggleable Infinite Repel and Auto Run for faster routing.",
  "Mauville NPCs: Stat Editor, IV Perfecter, Hidden Power changer, nature/gender swaps, level cap setter.",
  "Ability Capsules and Patches are available to swap abilities freely.",
  "Quick-throw Poké Ball option with L-button scrolling for faster captures.",
  "Move tutor attacks converted to TMs so you can teach them anywhere.",
];

const modeCards = [
  {
    title: "Minimal Grinding Mode",
    points: [
      "Matches Radical Red: perfect IVs for all Pokémon, EVs disabled for you and NPCs.",
      "With MGM off: IVs are random, EVs are enabled, NPCs stay fully trained.",
      "Stat Editor rules adjust based on MGM to keep progression fair.",
    ],
  },
  {
    title: "Difficulty modes",
    points: [
      "Normal: intended balance, bag disabled in trainer battles, forced Set battle style.",
      "Easy: -2 levels on boss teams, bag allowed, Shift style available (Set by default).",
      "Harder mode may arrive later per dev notes; watch the Discord for updates.",
    ],
  },
  {
    title: "Randomizer",
    points: [
      "Toggle in-game: full, scaled, or legendary-aware species randomization.",
      "Independent ability randomization with curated allowed/blocked ability list.",
      "Boss trainers stay fixed so challenge pacing remains intact.",
    ],
  },
];

const patchSteps = [
  "Provide your own clean Pokémon Emerald .gba (unmodified).",
  "Open the Emerald Imperium online patcher (pre-loaded BPS) and upload the ROM.",
  "Click “Apply Patch,” download the output, and load it in a modern emulator.",
];

const emulatorTips = [
  "Use mGBA on PC; PizzaBoy, Lemuroid, or RetroArch + mGBA core on mobile.",
  "Avoid VBA/MyBoy due to known visual bugs and crashes.",
  "Keep fast-forward modest during scripted fights to avoid soft-locks.",
];

const compareCards = [
  {
    title: "Stay on-topic",
    description:
      "Emerald Imperium is a Radical Red-style Emerald remix with modern mechanics, extra bosses, and a Gen 1-9 roster.",
    href: "https://danayatsuta.github.io/emerald-imperium-patcher/",
    cta: "Open patcher",
  },
  {
    title: "Try Pokémon Lazarus",
    description:
      "Our Ilios region hack leans into Greek myth, Mythic forms, and long-run stability with built-in download and cheat guides.",
    href: "/download",
    cta: "Download Lazarus",
  },
];

export default function EmeraldImperiumPage() {
  return (
    <div className="page-shell bg-campus-b">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">ROM hack spotlight</p>
            <h1 className="text-3xl font-black text-white">Pokémon Emerald Imperium</h1>
            <p className="text-sm text-[#d4e0ff]">
              Authorized summary of the Radical Red-inspired Emerald hack: Gen 1-9 roster, custom Megas, modern QoL,
              and built-in randomizer/difficulty options.
            </p>
            <div className="badge-row pt-2">
              <span className="chip">Status: Completed v1.0</span>
              <span className="chip">Base: Pokémon Emerald</span>
              <span className="chip">Style: Radical Red-inspired difficulty</span>
            </div>
          </div>
          <div className="btn-row">
            <a
              className="pixel-btn"
              href="https://danayatsuta.github.io/emerald-imperium-patcher/"
              target="_blank"
              rel="noreferrer"
            >
              Patch now
            </a>
            <a
              className="btn-secondary"
              href="https://drive.google.com/drive/folders/1BL1n5kBVmkXwCphP2-EqFx9VwKqhm3QZ?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Direct mirror
            </a>
            <Link className="btn-ghost" href="/download">
              Check Pokémon Lazarus
            </Link>
          </div>
        </header>

        <div className="greek-line" />

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Links</p>
              <h2 className="section-title">Official resources</h2>
              <p className="section-subtitle">
                Everything referenced in the top Google result: patcher, mirrors, docs, and Discord for Emerald Imperium.
              </p>
            </div>
            <span className="pill gold">Verified by PokeCommunity</span>
          </div>
          <div className="grid-auto">
            {quickLinks.map((link) => (
              <div key={link.label} className="pixel-card flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-black text-white">{link.label}</h3>
                  <span className="pill">{link.badge}</span>
                </div>
                <p className="text-sm text-[#d4e0ff]">{link.description}</p>
                <a className="btn-secondary" href={link.href} target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Overview</p>
              <h2 className="section-title">Why players search “pokemon emerald imperium”</h2>
              <p className="section-subtitle">
                The hack lifts Radical Red’s mechanics into Hoenn with new bosses, custom Megas, and QoL that cut grind
                without removing challenge.
              </p>
            </div>
            <span className="pill">Challenge-first</span>
          </div>
          <div className="grid-auto">
            {featureHighlights.map((item) => (
              <div key={item} className="pixel-card">
                <p className="text-sm text-[#d4e0ff]">• {item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">QoL</p>
              <h2 className="section-title">Quality-of-life upgrades</h2>
              <p className="section-subtitle">
                Borrowed directly from the official thread: faster routing, IV/EV control, and modern convenience items.
              </p>
            </div>
            <span className="pill gold">Less grind</span>
          </div>
          <div className="grid-auto">
            {qolItems.map((item) => (
              <div key={item} className="pixel-card">
                <p className="text-sm text-[#d4e0ff]">• {item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Modes</p>
              <h2 className="section-title">How Emerald Imperium handles difficulty</h2>
              <p className="section-subtitle">
                Toggle Minimal Grinding Mode, pick a difficulty, or switch on the built-in randomizer without extra tools.
              </p>
            </div>
            <span className="pill">Configurable</span>
          </div>
          <div className="grid-3">
            {modeCards.map((mode) => (
              <div key={mode.title} className="pixel-card flex flex-col gap-2">
                <h3 className="text-lg font-black text-white">{mode.title}</h3>
                <ul className="space-y-2 text-sm text-[#d4e0ff]">
                  {mode.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Install</p>
              <h2 className="section-title">Patch and play safely</h2>
              <p className="section-subtitle">
                Steps lifted from the PokeCommunity post plus emulator advice to avoid crashes.
              </p>
            </div>
            <span className="pill">New release</span>
          </div>
          <div className="grid-2">
            <div className="pixel-card flex flex-col gap-3">
              <h3 className="text-lg font-black text-white">Fast patch path</h3>
              <ol className="space-y-2 text-sm text-[#d4e0ff] list-decimal list-inside">
                {patchSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="text-xs uppercase tracking-wide text-[#c7d6ff]">
                Uses the new pre-loaded patcher shared in the official thread.
              </p>
            </div>
            <div className="pixel-card flex flex-col gap-3">
              <h3 className="text-lg font-black text-white">Emulator picks</h3>
              <ul className="space-y-2 text-sm text-[#d4e0ff]">
                {emulatorTips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-wide text-[#c7d6ff]">
                Keep saves backed up before swapping versions or devices.
              </p>
            </div>
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Docs & community</p>
              <h2 className="section-title">Where to learn more</h2>
              <p className="section-subtitle">
                Jump into the documentation, known-bugs list, and Discord to stay current with updates.
              </p>
            </div>
            <span className="pill">Author: iriv24</span>
          </div>
          <div className="grid-auto">
            {quickLinks.map((link) => (
              <div key={link.href} className="pixel-card flex flex-col gap-2">
                <p className="tag">{link.badge}</p>
                <h3 className="text-lg font-black text-white">{link.label}</h3>
                <p className="text-sm text-[#d4e0ff]">{link.description}</p>
                <a className="btn-secondary" href={link.href} target="_blank" rel="noreferrer">
                  Go
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Stay playing</p>
              <h2 className="section-title">Emerald Imperium or Pokémon Lazarus?</h2>
              <p className="section-subtitle">
                Pick the vibe you want: Hoenn challenge remix or Ilios mythic adventure. Both installs are one click away.
              </p>
            </div>
            <span className="pill gold">Cross-recommended</span>
          </div>
          <div className="grid-2">
            {compareCards.map((card) => (
              <div key={card.title} className="pixel-card flex flex-col gap-3">
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="text-sm text-[#d4e0ff]">{card.description}</p>
                <div className="btn-row pt-2">
                  {card.href.startsWith("http") ? (
                    <a className="btn-primary" href={card.href} target="_blank" rel="noreferrer">
                      {card.cta}
                    </a>
                  ) : (
                    <Link className="btn-primary" href={card.href}>
                      {card.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/pokedex">Pokédex</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/community">Community</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Pokémon Emerald Imperium summary sourced from the official PokeCommunity release post with permission. Patch
            your own clean Emerald ROM, keep backups, and follow the recommended emulators for the smoothest run.
          </p>
        </footer>
      </div>
    </div>
  );
}
