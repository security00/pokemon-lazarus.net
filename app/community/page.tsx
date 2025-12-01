import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Pokémon Lazarus",
  description:
    "Join the Pokémon Lazarus community for live help, strategy threads, and ROM hack discovery.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/community",
  },
};

const threads = [
  {
    title: "Speedrun help desk",
    detail: "Route optimization, movement tech, and timer splits for Ilios.",
    meta: "Pinned • Updated weekly",
  },
  {
    title: "Mythic quest spoilers",
    detail: "Tag your screenshots; find Titan birds and Aegis Lugia.",
    meta: "Spoiler safe • Dusk/temple notes",
  },
  {
    title: "Hardware and emulator support",
    detail: "mGBA, RetroArch, Delta settings plus save transfers between devices.",
    meta: "Support • No ROM sharing",
  },
];

const events = [
  {
    title: "Weekend Raid Night",
    detail: "Run the Mega Trial gauntlet together and compare splits.",
    time: "Fridays 8PM EST",
  },
  {
    title: "Patch Notes AMA",
    detail: "Live Ko-fi Q&A about v1.1, balance tweaks, and mythic unlock order.",
    time: "Sundays 3PM EST",
  },
  {
    title: "Screenshot Showcase",
    detail: "Share your Ilios vistas; best shot pinned weekly.",
    time: "Rolling • Submit anytime",
  },
];

export default function CommunityPage() {
  return (
    <div className="page-shell bg-campus-a">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Community</p>
            <h1 className="text-3xl font-black text-white">Forum & live help</h1>
            <p className="text-sm text-[#d4e0ff]">
              Stay connected with strategy threads, spoiler-safe talk, and live download support.
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
              <p className="tag">Live threads</p>
              <h2 className="section-title">What trainers are talking about</h2>
              <p className="section-subtitle">
                High-signal discussions to keep you engaged and help your run go the distance.
              </p>
            </div>
            <Link className="btn-primary" href="/tools">
              Open utilities
            </Link>
          </div>
          <div className="grid-3">
            {threads.map((thread) => (
              <div key={thread.title} className="pixel-card flex flex-col gap-2">
                <p className="tag">{thread.meta}</p>
                <h3 className="text-lg font-black text-white">{thread.title}</h3>
                <p className="text-sm text-[#d4e0ff]">{thread.detail}</p>
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
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Events</p>
              <h2 className="section-title">Stay for the experience</h2>
              <p className="section-subtitle">
                Calendar-driven moments keep the community coming back and make the site sticky.
              </p>
            </div>
            <span className="pill gold">Join in</span>
          </div>
          <div className="grid-3">
            {events.map((event) => (
              <div key={event.title} className="pixel-card">
                <h4 className="text-lg font-black text-white">{event.title}</h4>
                <p className="text-sm text-[#d4e0ff]">{event.detail}</p>
                <p className="text-xs uppercase tracking-wide text-[#c7d6ff]">
                  {event.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Safety</p>
              <h2 className="section-title">Download guardrails</h2>
              <p className="section-subtitle">
                Community-approved rules keep the site helpful and legal for everyone.
              </p>
            </div>
          </div>
          <div className="grid-auto">
            {[
              "No ROM sharing. Only UPS patch links and checksum guidance.",
              "Tag spoilers — mythic quests and Titan birds stay marked.",
              "Keep cheat sharing to tested codes listed in the tools page.",
              "Share emulator version and platform when asking for help.",
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
            <Link href="/tools">Tools</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Pokémon Lazarus community hub — find help, share strategies, and stay spoiler-safe while you
            play through the Ilios region ROM hack.
          </p>
        </footer>
      </div>
    </div>
  );
}
