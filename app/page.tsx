import Link from "next/link";
import { CatalogSection } from "./components/CatalogSection";
import { FaqAccordion } from "./components/FaqAccordion";
import { Icon, type IconName } from "./components/Icon";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { ShareButton } from "./components/ShareButton";

type SpotlightCard = {
  title: string;
  description: string;
  meta: string;
  tag?: string;
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Play", href: "#play-online" },
  { label: "Pokédex", href: "#pokedex" },
  { label: "Guides", href: "#guides" },
  { label: "Tools", href: "#tools" },
  { label: "Community", href: "#community" },
  { label: "Download", href: "/download" },
  { label: "ROM Hacks", href: "#romhacks" },
];

const ASSET_HOST =
  process.env.NEXT_PUBLIC_ASSET_HOST || "https://static.pokemon-lazarus.net";

const latestUpdates: SpotlightCard[] = [
  {
    title: "v1.1 Ilios Dawn",
    description: "New day-night balance for Pokémon Lazarus, overworld polish, and stability fixes for long runs.",
    meta: "Released Nov 14 — recommended for Nuzlocke players.",
    tag: "Patch",
  },
  {
    title: "New Mythic Encounters",
    description: "Track down Titan Zapdos and Aegis Lugia inside the Pokémon Lazarus Temple of Athena questline.",
    meta: "Adds 3 side quests, 2 mythic cutscenes, and badge buffs.",
    tag: "Story",
  },
  {
    title: "Creator tips on Ko-fi",
    description: "Official download mirrors, checksum guidance, and controller settings.",
    meta: "Verified by community feedback.",
    tag: "Download",
  },
];

const featurePillars = [
  {
    title: "GBC Retro Graphics",
    description: "Pixel-perfect retro art that keeps the Pokémon Lazarus handheld feel of Ilios ruins and coasts.",
    icon: "pokeball" as IconName,
  },
  {
    title: "Greek Mythology Theme",
    description: "A mythic storyline in Pokémon Lazarus grounded in Greek legends, temples, and hero trials.",
    icon: "medusa" as IconName,
  },
  {
    title: "Custom Mega Evolutions",
    description: "Ilios-tuned Mega forms with bespoke balance and abilities.",
    icon: "dna" as IconName,
  },
  {
    title: "Legendary Quest",
    description: "Titan birds, Aegis Lugia, and multi-phase legendary questlines.",
    icon: "compass" as IconName,
  },
];

const pokedexSpotlight = [
  {
    title: "Gryphon Arcanine",
    description: "Fire/Flying | Pressure — excels as a late-game sweeper.",
    meta: "Route: Sky Pillars | Weather boost ready",
  },
  {
    title: "Medusa Milotic",
    description: "Water/Fairy | Gaze — punishes switch-ins with charm venom.",
    meta: "Hidden in Ilios Coast at dusk",
  },
  {
    title: "Ares Scizor",
    description: "Bug/Steel | Forge — gains burn immunity and +10 Atk.",
    meta: "Arena challenge: Temple of Hephaestus",
  },
  {
    title: "Chimera Hydreigon",
    description: "Dark/Dragon | Chimera — mixed attacker with mythic coverage.",
    meta: "Elite hunt after Badge 6",
  },
];

const toolPreviews = [
  {
    title: "Team Builder",
    description: "Synergy heatmap, coverage checks, and EV quick presets.",
    meta: "Great for Hardcore / Nuzlocke planning.",
    icon: "battle" as IconName,
  },
  {
    title: "Encounter Tracker",
    description: "Route-by-route log with shiny odds, time-gated spawns, and dupes clause.",
    meta: "Syncs with Pokédex entries.",
    icon: "compass" as IconName,
  },
  {
    title: "Cheat Safe-Mode",
    description: "Tested GameShark codes with stability notes for emulators.",
    meta: "Highlighted: Rare Candy, Master Ball, Walk Through Walls.",
    icon: "pokedex" as IconName,
  },
  {
    title: "Patch Verifier",
    description: "Checksum helper to confirm your Lazarus ROM is clean before play.",
    meta: "Prevents soft-locks and crash loops.",
    icon: "download" as IconName,
  },
];

const heroHighlights = [
  "400+ Pokémon with custom Mythic forms",
  "Greek-inspired Ilios region and ruins",
  "Mega Evolutions, day/night, weather quests",
  "Controller-friendly, mobile-ready build",
];

const guides = [
  {
    title: "How to Patch & Start",
    steps: [
      "Grab a clean Pokémon Emerald ROM and back it up.",
      "Apply the Lazarus v1.1 UPS patch with Floating IPS or Rom Patcher JS.",
      "Use mGBA, RetroArch, or Delta — set save type to Flash 128K.",
      "Copy the save to cloud for mobile/desktop play between devices.",
    ],
  },
  {
    title: "Cheats & Codes (stability-checked)",
    steps: [
      "Rare Candy: BFF956FA 2F9EC50D (toggle after use).",
      "Master Ball: 128898B6 EDA43037 (keep under 20 to avoid flags).",
      "Walk Through Walls: 7881A409 E2026E0C / 8E883EFF 92E9660D.",
      "Money Max: 29C78059 96542194 — disable before Gym battles.",
    ],
  },
];

const downloadPlatforms = [
  {
    title: "Windows / macOS / Linux",
    icon: "download" as IconName,
    steps: [
      "Install mGBA or RetroArch; set saves to Flash 128K.",
      "Patch a clean Pokémon Emerald ROM with the Lazarus v1.1 UPS before loading.",
      "Disable rewind; keep fast-forward modest to avoid desync.",
      "Back up .sav to cloud (OneDrive/iCloud/Drive) every badge.",
    ],
  },
  {
    title: "Android",
    icon: "compass" as IconName,
    steps: [
      "Use mGBA/RetroArch or a trusted GBA emulator from Play Store.",
      "Patch on device with Rom Patcher JS; rename the output to Pokémon Lazarus.",
      "Load the patched ROM, set autosave interval short, and keep cheats off by default.",
      "Sync saves to cloud so you can continue on desktop if needed.",
    ],
  },
  {
    title: "iOS (Delta)",
    icon: "pokedex" as IconName,
    steps: [
      "Import a clean Emerald ROM into Delta, then patch with Rom Patcher (web) and re-import.",
      "Enable 128K save type; map shoulder buttons for menu/navigation.",
      "Use iCloud sync to keep phone/tablet saves aligned.",
      "Toggle off fast-forward when entering cutscenes to avoid event skips.",
    ],
  },
];

const gameDetails = [
  { label: "Game Name", value: "Pokémon Lazarus" },
  { label: "Creator", value: "Nemo622" },
  { label: "Base Game", value: "Pokémon Emerald" },
  { label: "Genre", value: "RPG" },
  { label: "Region", value: "USA" },
  { label: "Platform", value: "Game Boy Advance" },
  { label: "Language", value: "English" },
  { label: "Release Date", value: "November 14, 2025" },
  { label: "Version", value: "v1.1 (Full Release)" },
  { label: "Status", value: "Completed" },
  { label: "Price", value: "Completely Free" },
];

const cheatCodes = [
  {
    title: "Rare Candy",
    code: "BFF956FA 2F9EC50D",
    note: "Toggle off after use to keep flags clean.",
  },
  {
    title: "Master Ball",
    code: "128898B6 EDA43037",
    note: "Keep under 20 in bag to avoid odd triggers.",
  },
  {
    title: "Walk Through Walls",
    code: "7881A409 E2026E0C / 8E883EFF 92E9660D",
    note: "Turn off before cutscenes or gym scripts.",
  },
  {
    title: "Money Max",
    code: "29C78059 96542194",
    note: "Disable before Gym/Elite fights to avoid rule breaks.",
  },
];

const safetyReminders = [
  "Always patch from a legal, clean Pokémon Emerald ROM and keep a backup.",
  "Download only from the official mirror; avoid pre-patched ROMs from random sites.",
  "Verify UPS checksum before loading existing saves to prevent soft-locks.",
  "Stick to one emulator version per save to reduce event desync.",
];

const faqItems = [
  {
    question: "Is Pokémon Lazarus official?",
    answer: "It is a fan-made ROM hack based on Pokémon Emerald, not an official release.",
  },
  {
    question: "Can I play on Android?",
    answer: "Yes. Install a trusted GBA emulator (mGBA/RetroArch), patch on-device, and load the Lazarus ROM.",
  },
  {
    question: "Is the download free and safe?",
    answer:
      "The patch is free. Stay safe by downloading from the official mirror and patching your own clean ROM.",
  },
  {
    question: "Do saves carry between versions?",
    answer: "Keep saves on the same version (v1.1 to v1.1). Mixing with v1.0 can cause event issues.",
  },
  {
    question: "Where can I report bugs or get help?",
    answer:
      "Message the community hub or email support@pokemon-lazarus.net with emulator version, platform, and a screenshot.",
  },
];

const communityThreads = [
  {
    title: "Speedrun route: 4-badge Ilios split",
    meta: "Guide • 12:43 best by Bloomy",
    description: "Optimized starter picks, XP thresholds, and movement tech.",
    icon: "compass" as IconName,
  },
  {
    title: "Mythic quest spoilers (hidden legendary path)",
    meta: "Story • Safe tagging enforced",
    description: "Full route to Titan Zapdos with optional dusk-only alt path.",
    icon: "column" as IconName,
  },
  {
    title: "Arena loadouts for Mega Trials",
    meta: "Strategy • Updated for v1.1",
    description: "Team comps for Mega Scizor, Tyranitar, and Garchomp with cheap items.",
    icon: "battle" as IconName,
  },
];

const romHackList = [
  {
    title: "Pokémon Emerald Imperium",
    meta: "Radical Red-inspired Emerald hack with Gen 1-9 roster, custom Megas, and online patcher.",
    icon: "compass" as IconName,
    href: "/emerald-imperium",
  },
  {
    title: "Pokémon Emerald Seaglass",
    meta: "Exploration-heavy ROM hack with QoL and event reroutes.",
    icon: "compass" as IconName,
  },
  {
    title: "Pokémon Unbound",
    meta: "Challenge tiers, mission board, and deep post-game.",
    icon: "battle" as IconName,
  },
  {
    title: "Pokémon Radical Red",
    meta: "Boss rush experience with hardcore toggle and smarter AI.",
    icon: "flame" as IconName,
  },
  {
    title: "Pokémon GS Chronicles",
    meta: "Johto remake with new events, fairy typing, and modern balance.",
    icon: "column" as IconName,
  },
  {
    title: "Pokémon Infinity",
    meta: "Open-world feel with crafting and optional quests.",
    icon: "pokedex" as IconName,
  },
  {
    title: "Pokémon Gaia",
    meta: "Relic discovery storyline with diverse regional dex.",
    icon: "laurel" as IconName,
  },
];

const onlinePlayUrl =
  "https://ext.minijuegos.com/pokemon-lazarus/emujs/play.php?c=gba&f=lazarus1.gba&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=255482&mp_game_uid=pokemon-lazarus&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fgame%2Fpokemon-lazarus&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=Asia%2FShanghai&mp_view_type=";

export default function Home() {
  const logoSrc = `${ASSET_HOST}/logo.webp`;
  const heroSrc = `${ASSET_HOST}/hero-index.avif`;

  return (
    <div id="top" className="page-shell bg-acropolis-trail">
      <div className="inner">
        <header className="mb-6">
          <div className="nav-bar flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={logoSrc}
                fallback="/logo.webp"
                alt="Pokémon Lazarus crest"
                width={54}
                height={54}
                className="rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.06)] p-1"
                priority
              />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c8d4ff]">
                  Mythical Ilios Region
                </p>
                <h1 className="text-xl font-black text-white">Pokémon Lazarus</h1>
              </div>
            </div>
            <nav className="hidden items-center gap-4 text-sm font-semibold text-[#cfd9ff] md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
              <Link href="/pokedex" className="hover:text-white">
                Pokédex
              </Link>
              <Link href="/tools" className="hover:text-white">
                Tools
              </Link>
              <Link href="/community" className="hover:text-white">
                Community
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link className="pixel-btn secondary" href="/community">
                Join
              </Link>
              <Link className="pixel-btn" href="/download">
                Download
              </Link>
            </div>
          </div>
          <div className="greek-line mt-3" />
        </header>

        <main className="space-y-12">
          <section
            id="play-online"
            className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)]"
          >
            <div
              className="relative w-full rounded-2xl"
              style={{ minHeight: "calc(100vh - 140px)" }}
            >
              <iframe
                title="Play Pokémon Lazarus online"
                src={onlinePlayUrl}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; camera; clipboard-read; clipboard-write"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(9,12,26,0.35)] via-[rgba(9,12,26,0.2)] to-[rgba(9,12,26,0.5)]" />
            </div>
          </section>

          <section id="overview" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Latest news</p>
                <h2 className="section-title">Stay ahead of v1.1 changes</h2>
                <p className="section-subtitle">
                  Fresh Pokémon Lazarus patch info, mythic quest unlocks, and download health so you always play the most stable build.
                </p>
              </div>
              <div className="btn-row">
                <a className="btn-secondary" href="#guides">
                  Download guide
                </a>
                <a
                  className="btn-ghost"
                  href="https://www.pokeharbor.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse ROM hacks
                </a>
              </div>
            </div>
            <div className="grid-3">
              {latestUpdates.map((item) => (
                <div key={item.title} className="pixel-card flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={item.tag === "Patch" ? "download" : item.tag === "Story" ? "column" : "pokedex"} />
                    </span>
                    {item.tag && <span className="tag">{item.tag}</span>}
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[#d0dbff]">{item.description}</p>
                  <p className="text-sm text-[#b5c6ff]">{item.meta}</p>
                  <div className="btn-row pt-2">
                    <Link className="btn-secondary" href="/community">
                      View community talk
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid-auto">
              {featurePillars.map((feature) => (
                <div key={feature.title} className="pixel-card">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={feature.icon} />
                    </span>
                    <h3 className="text-lg font-black text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-[#d4e0ff]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <CatalogSection pokedex={pokedexSpotlight} tools={toolPreviews} />

          <section id="guides" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Guides & cheats</p>
                <h2 className="section-title">How to play and stay crash-free</h2>
                <p className="section-subtitle">
                  Pokémon Lazarus download instructions, tested cheat codes, and safety notes to keep your run stable across PC and mobile.
                </p>
              </div>
              <div className="btn-row">
                <Link className="btn-primary" href="/download">
                  Download guide
                </Link>
                <Link className="btn-ghost" href="/community">
                  Ask the community
                </Link>
              </div>
            </div>
            <div className="grid-2">
              {guides.map((guide) => (
                <div key={guide.title} className="pixel-card flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={guide.title.includes("Cheat") ? "pokedex" : "download"} />
                    </span>
                    <h3 className="text-xl font-black text-white">{guide.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#d4e0ff]">
                    {guide.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="pixel-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="tag">FAQ</p>
                    <h3 className="text-lg font-black text-white">Common questions</h3>
                  </div>
                  <span className="pill">Spoiler safe</span>
                </div>
                <FaqAccordion items={faqItems} />
              </div>
              <div className="pixel-card">
                <p className="tag">Loading indicator</p>
                <h3 className="text-lg font-black text-white">Patch prep monitor</h3>
                <p className="text-sm text-[#d4e0ff]">
                  We track the steps you complete so nothing breaks mid-run.
                </p>
                <div className="mt-3 space-y-2 text-sm text-[#d4e0ff]">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#d4af37] border-t-transparent" />
                    Downloading patch & checksum tips
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[#4ade80]" />
                    Emulator profile loaded (mGBA / Delta)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[#60a5fa]" />
                    Cheats set to safe-mode
                  </div>
                </div>
                <div className="btn-row pt-4">
                  <Link className="btn-secondary" href="/download">
                    Open patch guide
                  </Link>
                  <a
                    className="btn-ghost"
                    href="https://www.reddit.com/r/PokemonROMhacks/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit thread
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="game-info" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Game info</p>
                <h2 className="section-title">What you are downloading</h2>
                <p className="section-subtitle">
                  Quick facts for Pokémon Lazarus v1.1 so new visitors know the build, platform, and status.
                </p>
              </div>
              <div className="btn-row">
                <Link className="btn-secondary" href="/download">
                  Go to downloads
                </Link>
                <a className="btn-ghost" href="mailto:support@pokemon-lazarus.net">
                  Email support
                </a>
              </div>
            </div>
            <div className="glass p-5">
              <div className="grid-2">
                <div className="pixel-card">
                  <table className="table">
                    <tbody>
                      {gameDetails.map((row) => (
                        <tr key={row.label}>
                          <th>{row.label}</th>
                          <td className="text-[#d4e0ff]">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pixel-card flex flex-col gap-3">
                  <p className="tag">At a glance</p>
                  <h3 className="text-lg font-black text-white">v1.1 full release</h3>
                  <p className="text-sm text-[#d4e0ff]">
                    Fan-made ROM hack set in the Ilios region with Greek myth themes, built on Pokémon Emerald and
                    tuned for GBA emulators across PC and mobile.
                  </p>
                  <div className="btn-row pt-2">
                    <a
                      className="btn-primary"
                      href="/download"
                    >
                      Official mirror
                    </a>
                    <Link className="btn-ghost" href="/community">
                      Ask community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="download" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Download</p>
                <h2 className="section-title">Install Pokémon Lazarus in minutes</h2>
                <p className="section-subtitle">
                  Platform-specific steps and the official Pokémon Lazarus mirror so you can start safely on any device.
                </p>
              </div>
              <div className="btn-row">
                <a
                  className="btn-primary"
                  href="/download"
                >
                  Official mirror
                </a>
                <a className="btn-ghost" href="mailto:support@pokemon-lazarus.net">
                  Email support
                </a>
              </div>
            </div>
            <div className="grid-3">
              {downloadPlatforms.map((platform) => (
                <div key={platform.title} className="pixel-card flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={platform.icon} />
                    </span>
                    <h3 className="text-lg font-black text-white">{platform.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#d4e0ff]">
                    {platform.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="glass mt-4 p-5">
              <div className="section-header">
                <div>
                  <p className="tag">Safety</p>
                  <h3 className="section-title">Clean patch, clean saves</h3>
                  <p className="section-subtitle">
                    Borrowed from the official Pokémon Lazarus fan site so you stay crash-free and legal.
                  </p>
                </div>
                <span className="pill">v1.1 ready</span>
              </div>
              <div className="grid-auto">
                {safetyReminders.map((item) => (
                  <div key={item} className="pixel-card">
                    <p className="text-sm text-[#d4e0ff]">• {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cheats" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Cheats</p>
                <h2 className="section-title">Safe-mode codes from the community</h2>
                <p className="section-subtitle">
                  Verified Pokémon Lazarus codes mirrored from the official fan site with stability warnings baked in.
                </p>
              </div>
              <div className="btn-row">
                <Link className="btn-ghost" href="/tools">
                  Open tools
                </Link>
                <Link className="btn-secondary" href="/download">
                  Patch guide
                </Link>
              </div>
            </div>
            <div className="grid-2">
              <div className="pixel-card">
                <p className="tag">Codes</p>
                <h3 className="text-lg font-black text-white">Use and toggle safely</h3>
                <div className="mt-3 space-y-2">
                  {cheatCodes.map((cheat) => (
                    <div
                      key={cheat.title}
                      className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-white">{cheat.title}</p>
                        <span className="pill">{cheat.code}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#d4e0ff]">{cheat.note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pixel-card">
                <p className="tag">Rules</p>
                <h3 className="text-lg font-black text-white">Stay in-bounds</h3>
                <div className="mt-3 space-y-2 text-sm text-[#d4e0ff]">
                  <p>• Only use one master cheat at a time; disable before story beats.</p>
                  <p>• Keep fast-forward off during scripted events to avoid soft-locks.</p>
                  <p>• Sync saves after each badge and keep a clean backup untouched.</p>
                  <p>• Report emulator issues with version + platform to support@pokemon-lazarus.net.</p>
                </div>
                <div className="btn-row pt-3">
                  <Link className="btn-primary" href="/community">
                    Ask the hub
                  </Link>
                  <a
                    className="btn-ghost"
                    href="https://www.reddit.com/r/PokemonLazarusGames/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit thread
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="community" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Community</p>
                <h2 className="section-title">See what trainers are doing</h2>
                <p className="section-subtitle">
                  Pokémon Lazarus forum previews keep you in the loop — challenge seeds, spoilers, and meta talk in one glance.
                </p>
              </div>
              <div className="btn-row">
                <Link className="btn-primary" href="/community">
                  Enter Hub
                </Link>
                <Link className="btn-ghost" href="/tools">
                  Build a team
                </Link>
              </div>
            </div>
            <div className="grid-3">
              {communityThreads.map((thread) => (
                <div key={thread.title} className="pixel-card flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={thread.icon} />
                    </span>
                    <div>
                      <p className="tag">{thread.meta}</p>
                      <h3 className="text-lg font-black text-white">{thread.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#d0dbff]">{thread.description}</p>
                  <a
                    className="btn-secondary"
                    href="https://discord.com/invite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join discussion
                  </a>
                </div>
              ))}
            </div>
            <div className="glass mt-4 grid gap-3 p-5 md:grid-cols-3">
              <div className="pixel-card border border-[rgba(212,175,55,0.35)]">
                <p className="tag">Download support</p>
                <h3 className="text-xl font-black text-white">Live help</h3>
                <p className="text-sm text-[#d4e0ff]">Share emulator screenshots and get fixes fast.</p>
              </div>
              <div className="pixel-card">
                <p className="tag">Creator updates</p>
                <h3 className="text-xl font-black text-white">Devlog pings</h3>
                <p className="text-sm text-[#d4e0ff]">Ko-fi posts and PokemonLazarusGame.com links, verified.</p>
              </div>
              <div className="pixel-card">
                <p className="tag">Engagement</p>
                <h3 className="text-xl font-black text-white">Stay longer</h3>
                <p className="text-sm text-[#d4e0ff]">
                  Quizzes, spoiler-safe lore, and showcase reels keep playtime exciting.
                </p>
              </div>
            </div>
          </section>

          <section id="tools" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Tools</p>
                <h2 className="section-title">Utility deck for Ilios</h2>
                <p className="section-subtitle">
                  Plan teams, log encounters, and verify patches with lightweight utilities built for Pokémon Lazarus.
                </p>
              </div>
              <div className="btn-row">
                <Link className="btn-primary" href="/tools">
                  View tools
                </Link>
                <Link className="btn-ghost" href="/pokedex">
                  Browse Pokédex
                </Link>
              </div>
            </div>
            <div className="grid-2">
              <div className="pixel-card">
                <div className="flex items-center gap-3">
                  <span className="icon-badge">
                    <Icon name="compass" />
                  </span>
                  <h3 className="text-lg font-black text-white">Encounter tracker</h3>
                </div>
                <p className="mt-1 text-[#d0dbff]">
                  Log first encounters, shiny odds, and time-of-day spawns with spoiler-safe notes.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[#d4e0ff]">
                  <li>• Dupe clause toggle per route</li>
                  <li>• Mythic-only spawn window reminders</li>
                  <li>• Export to shareable JSON</li>
                </ul>
              </div>
              <div className="pixel-card">
                <div className="flex items-center gap-3">
                  <span className="icon-badge">
                    <Icon name="battle" />
                  </span>
                  <h3 className="text-lg font-black text-white">Team builder</h3>
                </div>
                <p className="mt-1 text-[#d0dbff]">
                  Coverage heatmaps, synergy pairing, and EV presets for Hardcore or casual runs.
                </p>
                <div className="badge-row pt-2">
                  <span className="chip">Mythic form ready</span>
                  <span className="chip">Ability filters</span>
                  <span className="chip">Import/export</span>
                </div>
              </div>
            </div>
          </section>

          <section id="romhacks" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Related ROM hacks</p>
                <h2 className="section-title">Keep exploring</h2>
                <p className="section-subtitle">
                  Discover more polished ROM hacks from PokeHarbor and the community when you finish a Pokémon Lazarus run so you always have a next adventure.
                </p>
              </div>
              <a
                className="btn-secondary"
                href="https://www.pokeharbor.com"
                target="_blank"
                rel="noreferrer"
              >
                Browse PokeHarbor
              </a>
            </div>
            <div className="grid-auto">
              {romHackList.map((hack) => (
                <div key={hack.title} className="pixel-card flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Icon name={hack.icon} />
                    </span>
                    <h3 className="text-lg font-black text-white">{hack.title}</h3>
                  </div>
                  <p className="text-sm text-[#d4e0ff]">{hack.meta}</p>
                  {hack.href ? (
                    <div className="btn-row pt-2">
                      <Link className="btn-secondary" href={hack.href}>
                        Read guide
                      </Link>
                    </div>
                  ) : (
                    <span className="pill">ROM hack spotlight</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-black text-white">SEO overview</h3>
            <p>
              Pokémon Lazarus is a Mythic Ilios region ROM hack experience inspired by Greek legends,
              built on Pokémon Emerald. This site curates download guides, Pokédex data, safe-mode cheats,
              and community updates so players can explore, strategize, and enjoy long runs without crashes.
            </p>
            <div className="footer-links">
              <a href="#top">Home</a>
              <Link href="/pokedex">Pokédex</Link>
              <Link href="/tools">Tools</Link>
            <Link href="/community">Community</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="https://ko-fi.com" target="_blank" rel="noreferrer">
              Ko-fi
            </a>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
            <p className="text-xs text-[#a8b8de]">
              Pokémon is copyright Nintendo/Creatures Inc./GAME FREAK. Pokémon Lazarus is a fan-made ROM hack.
              This site is community-run and not affiliated with Nintendo or The Pokémon Company.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
