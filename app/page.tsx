"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type SpotlightCard = {
  title: string;
  description: string;
  meta: string;
  tag?: string;
};

type IconName =
  | "pokeball"
  | "pokedex"
  | "battle"
  | "laurel"
  | "column"
  | "flame"
  | "compass"
  | "download"
  | "dna"
  | "medusa";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Pokédex", href: "#pokedex" },
  { label: "Guides", href: "#guides" },
  { label: "Tools", href: "#tools" },
  { label: "Community", href: "#community" },
  { label: "Download", href: "/download" },
  { label: "ROM Hacks", href: "#romhacks" },
];

const ASSET_HOST = "https://static.pokemon-lazarus.net";

const latestUpdates: SpotlightCard[] = [
  {
    title: "v1.1 Ilios Dawn",
    description: "New day-night balance, overworld polish, and stability fixes for long runs.",
    meta: "Released Nov 14 — recommended for Nuzlocke players.",
    tag: "Patch",
  },
  {
    title: "New Mythic Encounters",
    description: "Track down Titan Zapdos and Aegis Lugia in the Temple of Athena questline.",
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
    description: "Pixel-perfect retro art that keeps the handheld feel of Ilios ruins and coasts.",
    icon: "pokeball" as IconName,
  },
  {
    title: "Greek Mythology Theme",
    description: "A mythic storyline grounded in Greek legends, temples, and hero trials.",
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

export default function Home() {
  const [activeCatalog, setActiveCatalog] = useState<"pokedex" | "tools">(
    "pokedex",
  );
  const [logoSrc, setLogoSrc] = useState(`${ASSET_HOST}/logo.webp`);
  const [heroSrc, setHeroSrc] = useState(`${ASSET_HOST}/hero-index.avif`);
  const [shareMessage, setShareMessage] = useState("Share with friends");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const heroHighlights = useMemo(
    () => [
      "400+ Pokémon with custom Mythic forms",
      "Greek-inspired Ilios region and ruins",
      "Mega Evolutions, day/night, weather quests",
      "Controller-friendly, mobile-ready build",
    ],
    [],
  );

  const handleShare = async () => {
    const url = "https://pokemon-lazarus.net";
    const text = "Explore the Mythical Ilios region in Pokémon Lazarus.";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Pokémon Lazarus", text, url });
        setShareMessage("Shared to your apps");
        return;
      }
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setShareMessage("Link copied");
        return;
      }
      setShareMessage("Share unavailable");
    } catch {
      setShareMessage("Share dismissed");
    }
  };

  const catalog = activeCatalog === "pokedex" ? pokedexSpotlight : toolPreviews;

  const Icon = ({ name }: { name: IconName }) => {
    const common = {
      stroke: "#f8e6a0",
      strokeWidth: 2.4,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (name) {
      case "pokeball":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="22" fill="#1a2a4a" stroke="#d4af37" strokeWidth="3" />
            <path d="M10 32h12m20 0h12" {...common} />
            <circle cx="32" cy="32" r="8" fill="#0f1632" stroke="#f3d777" strokeWidth="3" />
            <circle cx="32" cy="32" r="3" fill="#f3d777" />
          </svg>
        );
      case "pokedex":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <rect x="16" y="12" width="28" height="40" rx="4" fill="#1a2f60" stroke="#d4af37" strokeWidth="3" />
            <path d="M20 18h20M20 26h20M20 34h14M20 42h12" {...common} />
            <circle cx="40" cy="42" r="4" fill="#6b4c9a" stroke="#f3d777" strokeWidth="2.5" />
          </svg>
        );
      case "battle":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M18 18l12 12-12 12" {...common} />
            <path d="M34 18l12 12-12 12" {...common} />
            <circle cx="32" cy="32" r="26" stroke="#d4af37" strokeWidth="2.4" opacity="0.35" />
          </svg>
        );
      case "laurel":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M20 42c-4-4-6-10-6-16 6 0 12 2 16 6m14 10c4-4 6-10 6-16-6 0-12 2-16 6" {...common} />
            <path d="M28 32c0 6 2 12 4 16 2-4 4-10 4-16" {...common} />
          </svg>
        );
      case "column":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <rect x="22" y="20" width="20" height="24" rx="2" fill="#16244b" stroke="#d4af37" strokeWidth="3" />
            <rect x="18" y="14" width="28" height="8" rx="2" fill="#233362" stroke="#f3d777" strokeWidth="2.5" />
            <rect x="18" y="44" width="28" height="6" rx="2" fill="#233362" stroke="#f3d777" strokeWidth="2.5" />
            <path d="M24 22v18m6-18v18m6-18v18" {...common} />
          </svg>
        );
      case "flame":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M32 14c6 8 2 12 8 18 4 4 4 16-8 18-12-2-12-14-8-18 6-6 2-10 8-18z" fill="#d85c29" stroke="#f6d26a" strokeWidth="2.8" />
            <path d="M28 36c2-3 1-5 4-8 3 3 2 5 4 8 1 3-1 8-4 9-4-1-5-6-4-9z" fill="#f3d777" opacity="0.9" />
          </svg>
        );
      case "compass":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="22" fill="#152344" stroke="#d4af37" strokeWidth="3" />
            <path d="M32 18l6 10-6 18-6-18z" fill="#6b4c9a" stroke="#f6d26a" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="4" fill="#f6d26a" />
          </svg>
        );
      case "dna":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M22 16c10 6 10 18 0 24" {...common} />
            <path d="M42 16c-10 6-10 18 0 24" {...common} />
            <path d="M24 22h8m-6 8h10m-12 8h12" {...common} />
          </svg>
        );
      case "medusa":
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="30" r="12" fill="#1a2a4a" stroke="#d4af37" strokeWidth="3" />
            <path d="M22 24c-2-4-6-4-8-2 3 1 4 5 3 7-2 3 0 7 4 6" {...common} />
            <path d="M42 24c2-4 6-4 8-2-3 1-4 5-3 7 2 3 0 7-4 6" {...common} />
            <path d="M26 30c1 2 0 4-1 6m13-6c-1 2 0 4 1 6" {...common} />
            <path d="M28 26h2m4 0h2" {...common} />
            <path d="M26 36c2 2 10 2 12 0" {...common} />
          </svg>
        );
      case "download":
      default:
        return (
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <path d="M32 14v22m0 0l-8-8m8 8 8-8" {...common} />
            <rect x="14" y="38" width="36" height="10" rx="2" fill="#1a2f60" stroke="#d4af37" strokeWidth="3" />
          </svg>
        );
    }
  };

  return (
    <div id="top" className="page-shell bg-acropolis-trail">
      <div className="inner">
        <header className="mb-6">
          <div className="nav-bar flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="Pokémon Lazarus crest"
                width={54}
                height={54}
                className="rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.06)] p-1"
                priority
                onError={() => setLogoSrc("/logo.webp")}
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
          <section className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)]">
            <div className="relative h-[400px] w-full rounded-2xl md:h-[520px]">
              <Image
                src={heroSrc}
                alt="Pokémon Lazarus hero"
                fill
                priority
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
                onError={() => setHeroSrc("/hero-index.avif")}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,14,32,0.45)] via-[rgba(10,14,32,0.35)] to-[rgba(10,14,32,0.85)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill gold text-xs font-bold uppercase tracking-[0.12em]">
                    v1.1 patch live
                  </span>
                  <span className="pill text-sm">Safe download mirrors</span>
                  <span className="pill text-sm">Controller friendly</span>
                </div>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white drop-shadow md:text-5xl">
                  Explore the Mythical Ilios Region — 400+ Pokémon await.
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-[#f1f5ff] drop-shadow">
                  Retro pixel adventure meets Greek mythology. Mega Evolutions, day/night quests, and
                  mythic encounters tuned for marathon runs.
                </p>
                <div className="btn-row pt-4">
                  <Link className="pixel-btn" href="/download">
                    Download Now
                  </Link>
                <Link className="pixel-btn secondary" href="/download">
                  Official Mirror
                </Link>
                <a
                  className="btn-ghost"
                  href="https://ko-fi.com/nemo622"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support creator
                </a>
                <a
                  className="btn-ghost"
                  href="https://www.youtube.com/results?search_query=pokemon+lazarus+trailer"
                  target="_blank"
                  rel="noreferrer"
                  >
                    Watch Trailer
                  </a>
                  <button className="btn-ghost" onClick={handleShare}>
                    {shareMessage}
                  </button>
                </div>
                <div className="badge-row pt-3">
                  {heroHighlights.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="overview" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Latest news</p>
                <h3 className="section-title">Stay ahead of v1.1 changes</h3>
                <p className="section-subtitle">
                  Fresh patch info, mythic quest unlocks, and download health so you always play the most stable build.
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
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
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
                    <h4 className="text-lg font-black text-white">{feature.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-[#d4e0ff]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="pokedex" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Data hub</p>
                <h3 className="section-title">Pokédex & tools preview</h3>
                <p className="section-subtitle">
                  Quick-look entries, custom mythic forms, and the utilities the community uses to beat Ilios in style.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className={`pixel-btn secondary ${activeCatalog === "pokedex" ? "border-[#d4af37] text-white" : ""}`}
                  onClick={() => setActiveCatalog("pokedex")}
                >
                  Pokédex
                </button>
                <button
                  className={`pixel-btn secondary ${activeCatalog === "tools" ? "border-[#d4af37] text-white" : ""}`}
                  onClick={() => setActiveCatalog("tools")}
                >
                  Tools
                </button>
              </div>
            </div>
            <div className="grid-3">
              {catalog.map((item) => (
                <div key={item.title} className="pixel-card flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {"icon" in item && item.icon ? (
                      <span className="icon-badge">
                        <Icon name={(item as typeof toolPreviews[number]).icon} />
                      </span>
                    ) : null}
                    <h4 className="text-lg font-black text-white">{item.title}</h4>
                  </div>
                  <p className="text-[#d0dbff]">{item.description}</p>
                  <p className="text-sm text-[#b5c6ff]">{item.meta}</p>
                </div>
              ))}
            </div>
            <div className="glass mt-4 grid gap-4 p-5 md:grid-cols-2">
              <div className="pixel-card">
                <p className="tag">Pokémon Showcase</p>
                <p className="mt-2 text-[#dbe6ff]">
                  Swipe through Ilios favorites and unlock mythic forms without spoilers.
                </p>
                <div className="btn-row pt-3">
                  <Link className="btn-primary" href="/pokedex">
                    Open Pokédex
                  </Link>
                  <Link className="btn-ghost" href="/tools">
                    Try Team Builder
                  </Link>
                </div>
              </div>
              <div className="pixel-showcase">
                {["Litten", "Chespin", "Sprigatito", "Rowlet", "Froakie", "Fuecoco"].map(
                  (name) => (
                    <div
                      key={name}
                      className="pixel-frame text-center"
                    >
                      <p className="text-sm uppercase tracking-wide text-[#c7d6ff]">
                        Starter
                      </p>
                      <p className="text-white text-lg font-black">{name}</p>
                      <p className="text-sm text-[#b5c6ff]">Mythic ready</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>

          <section id="guides" className="section">
            <div className="greek-line mb-4" />
            <div className="section-header">
              <div>
                <p className="tag">Guides & cheats</p>
                <h3 className="section-title">How to play and stay crash-free</h3>
                <p className="section-subtitle">
                  Download instructions, tested cheat codes, and safety notes to keep your run stable across PC and mobile.
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
                    <h4 className="text-xl font-black text-white">{guide.title}</h4>
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
                    <h4 className="text-lg font-black text-white">Common questions</h4>
                  </div>
                  <span className="pill">Spoiler safe</span>
                </div>
                <div className="mt-3 space-y-2">
                  {faqItems.map((item) => {
                    const open = openFaq === item.question;
                    return (
                      <button
                        key={item.question}
                        className="w-full rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-3 text-left transition hover:border-[rgba(212,175,55,0.6)]"
                        onClick={() => setOpenFaq(open ? null : item.question)}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-white">{item.question}</p>
                          <span className="text-sm text-[#d4af37]">{open ? "–" : "+"}</span>
                        </div>
                        {open && (
                          <p className="mt-2 text-sm text-[#d4e0ff]">{item.answer}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="pixel-card">
                <p className="tag">Loading indicator</p>
                <h4 className="text-lg font-black text-white">Patch prep monitor</h4>
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
                <h3 className="section-title">What you are downloading</h3>
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
                  <h4 className="text-lg font-black text-white">v1.1 full release</h4>
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
                <h3 className="section-title">Install Pokémon Lazarus in minutes</h3>
                <p className="section-subtitle">
                  Platform-specific steps and the official mirror so you can start safely on any device.
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
                    <h4 className="text-lg font-black text-white">{platform.title}</h4>
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
                  <h4 className="section-title">Clean patch, clean saves</h4>
                  <p className="section-subtitle">
                    Borrowed from the official fan site so you stay crash-free and legal.
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
                <h3 className="section-title">Safe-mode codes from the community</h3>
                <p className="section-subtitle">
                  Verified codes mirrored from the official fan site with stability warnings baked in.
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
                <h4 className="text-lg font-black text-white">Use and toggle safely</h4>
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
                <h4 className="text-lg font-black text-white">Stay in-bounds</h4>
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
                <h3 className="section-title">See what trainers are doing</h3>
                <p className="section-subtitle">
                  Forum previews keep you in the loop — challenge seeds, spoilers, and meta talk in one glance.
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
                      <h4 className="text-lg font-black text-white">{thread.title}</h4>
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
                <h4 className="text-xl font-black text-white">Live help</h4>
                <p className="text-sm text-[#d4e0ff]">Share emulator screenshots and get fixes fast.</p>
              </div>
              <div className="pixel-card">
                <p className="tag">Creator updates</p>
                <h4 className="text-xl font-black text-white">Devlog pings</h4>
                <p className="text-sm text-[#d4e0ff]">Ko-fi posts and PokemonLazarusGame.com links, verified.</p>
              </div>
              <div className="pixel-card">
                <p className="tag">Engagement</p>
                <h4 className="text-xl font-black text-white">Stay longer</h4>
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
                <h3 className="section-title">Utility deck for Ilios</h3>
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
                  <h4 className="text-lg font-black text-white">Encounter tracker</h4>
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
                  <h4 className="text-lg font-black text-white">Team builder</h4>
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
                <h3 className="section-title">Keep exploring</h3>
                <p className="section-subtitle">
                  Discover more polished ROM hacks from PokeHarbor and the community so you always have a next adventure.
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
                    <h4 className="text-lg font-black text-white">{hack.title}</h4>
                  </div>
                  <p className="text-sm text-[#d4e0ff]">{hack.meta}</p>
                  <span className="pill">ROM hack spotlight</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-black text-white">SEO overview</h4>
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
