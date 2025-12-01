import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download | Pokémon Lazarus",
  description:
    "Get the Pokémon Lazarus v1.1 patch guide, platform steps, and safety notes for Windows, Android, and iOS.",
  alternates: {
    canonical: "https://pokemon-lazarus.net/download",
  },
};

const platformSteps = [
  {
    title: "Windows / macOS / Linux",
    steps: [
      "Install mGBA or RetroArch; set save type to Flash 128K.",
      "Patch a clean Pokémon Emerald ROM with the Lazarus v1.1 UPS before loading.",
      "Disable rewind and keep fast-forward modest to avoid desync.",
      "Back up .sav to cloud (OneDrive/iCloud/Drive) every badge.",
    ],
  },
  {
    title: "Android",
    steps: [
      "Use mGBA/RetroArch or a trusted GBA emulator from Play Store.",
      "Patch on-device with Rom Patcher JS; rename the output to Pokémon Lazarus.",
      "Load the patched ROM, keep cheats off by default, and autosave frequently.",
      "Sync saves to cloud so you can continue on desktop later.",
    ],
  },
  {
    title: "iOS (Delta)",
    steps: [
      "Import a clean Emerald ROM into Delta, patch with Rom Patcher (web), then re-import.",
      "Enable 128K save type; map shoulder buttons for menus/navigation.",
      "Use iCloud sync to keep phone/tablet saves aligned.",
      "Toggle off fast-forward during cutscenes to avoid event skips.",
    ],
  },
];

const safetyReminders = [
  "Always patch from a legal, clean Pokémon Emerald ROM and keep a backup.",
  "Avoid pre-patched ROMs from random sites; use trusted mirrors only.",
  "Verify the UPS checksum before loading existing saves to prevent soft-locks.",
  "Stick to one emulator version per save to reduce event desync.",
];

export default function DownloadPage() {
  return (
    <div className="page-shell bg-acropolis-trail">
      <div className="inner space-y-10">
        <header className="nav-bar flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="tag">Download</p>
            <h1 className="text-3xl font-black text-white">Get Pokémon Lazarus safely</h1>
            <p className="text-sm text-[#d4e0ff]">
              Patch guidance, platform steps, and safety checks for the v1.1 full release.
            </p>
          </div>
          <div className="btn-row">
            <Link className="pixel-btn secondary" href="/">
              Home
            </Link>
            <Link className="btn-ghost" href="/tools">
              Tools
            </Link>
            <a
              className="btn-ghost"
              href="https://ko-fi.com/nemo622"
              target="_blank"
              rel="noreferrer"
            >
              Donate to creator
            </a>
          </div>
        </header>
        <div className="greek-line" />

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Download mirrors</p>
              <h2 className="section-title">Verified links & safety</h2>
              <p className="section-subtitle">
                Use these mirrors to fetch the patch/ZIP. Patch your own clean Emerald ROM; avoid pre-patched ROMs.
              </p>
            </div>
            <span className="pill gold">v1.1</span>
          </div>
          <div className="grid-auto">
            <div className="pixel-card">
              <p className="tag">v1.1 (Full Release)</p>
              <h3 className="text-lg font-black text-white">Stable</h3>
              <div className="btn-row pt-2">
                <a
                  className="btn-primary"
                  href="https://www.mediafire.com/file/c0pkund34ainlqf/Pokemon+Lazarus+v1.1.zip/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  MediaFire
                </a>
                <a
                  className="btn-secondary"
                  href="https://mega.nz/file/4ohlnazC#Q2x3tT5xCdRiM56298iZSR0b1oppzcjLUiU7mV2xLw4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mega
                </a>
              </div>
            </div>
            <div className="pixel-card">
              <p className="tag">v1.0</p>
              <h3 className="text-lg font-black text-white">Previous stable</h3>
              <div className="btn-row pt-2">
                <a
                  className="btn-secondary"
                  href="https://www.mediafire.com/file/ltr9y3jty3azdnr/Pokemon+Lazarus+v1.0.zip/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  MediaFire
                </a>
                <a
                  className="btn-ghost"
                  href="https://mega.nz/file/VspigIoQ#mWJnldi3m7wsobF3mPVF-GBCr3OYK3Wr_E75E-uzXrw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mega
                </a>
              </div>
            </div>
            <div className="pixel-card">
              <p className="tag">Demo 1.2</p>
              <h3 className="text-lg font-black text-white">Legacy demo</h3>
              <div className="btn-row pt-2">
                <a
                  className="btn-secondary"
                  href="https://www.mediafire.com/file/lnv4e24iu2z89hf/Pokemon+Lazarus+Demo+1.2.zip/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  MediaFire
                </a>
                <a
                  className="btn-ghost"
                  href="https://mega.nz/file/Y5A3Ab7Q#RXX8hXXh0wEhHO4oiLD11HXOEbkO8BdbdgQDpIMt8R4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mega
                </a>
              </div>
            </div>
            <div className="pixel-card">
              <p className="tag">Demo 1.1</p>
              <h3 className="text-lg font-black text-white">Legacy demo</h3>
              <div className="btn-row pt-2">
                <a
                  className="btn-secondary"
                  href="https://www.mediafire.com/file/ezcb66qb6n7w8us/Pokemon+Lazarus+(Demo+1.1).zip/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  MediaFire
                </a>
                <a
                  className="btn-ghost"
                  href="https://mega.nz/file/hpYizbDQ#z4ZOa56djD4-DAD628HPHk6-4NRvecaR-3fKaK-6-gw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mega
                </a>
              </div>
            </div>
            <div className="pixel-card">
              <p className="tag">Demo (older)</p>
              <h3 className="text-lg font-black text-white">Early build</h3>
              <div className="btn-row pt-2">
                <a
                  className="btn-secondary"
                  href="https://www.mediafire.com/file/4k6tsocpcwn6lwj/Pokemon+Lazarus+Demo.zip/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  MediaFire
                </a>
                <a
                  className="btn-ghost"
                  href="https://mega.nz/file/slQQyaqR#C-wlC_I4_YiUYaeS8YtpqzGvcJLUZGDBnVDUZ-6GVww"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mega
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-4 text-sm text-[#d4e0ff]">
            <p className="font-semibold text-white">Safety tips</p>
            <ul className="mt-2 space-y-1">
              <li>• Patch your own clean Pokémon Emerald ROM; do not use pre-patched ROMs.</li>
              <li>• Verify checksums if provided and back up saves before swapping versions.</li>
              <li>• Keep cheats off during story beats; stay on one emulator version per save.</li>
            </ul>
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Install</p>
              <h2 className="section-title">Platform steps</h2>
              <p className="section-subtitle">
                Follow the path for your device, then load the patched ROM to start your Ilios journey.
              </p>
            </div>
            <span className="pill">Cross-platform</span>
          </div>
          <div className="grid-3">
            {platformSteps.map((platform) => (
              <div key={platform.title} className="pixel-card flex flex-col gap-2">
                <h3 className="text-lg font-black text-white">{platform.title}</h3>
                <ul className="space-y-2 text-sm text-[#d4e0ff]">
                  {platform.steps.map((step) => (
                    <li key={step}>• {step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-5">
          <div className="section-header">
            <div>
              <p className="tag">Safety</p>
              <h2 className="section-title">Keep saves stable</h2>
              <p className="section-subtitle">
                Quick reminders adapted from the fan community so your runs avoid soft-locks and bad dumps.
              </p>
            </div>
            <span className="pill gold">Must-read</span>
          </div>
          <div className="grid-auto">
            {safetyReminders.map((item) => (
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
            <Link href="/community">Community</Link>
            <Link href="/download">Download</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:support@pokemon-lazarus.net">Contact</a>
          </div>
          <p className="text-xs text-[#a8b8de]">
            Pokémon Lazarus download guide — fan-made ROM hack based on Pokémon Emerald. Keep backups, patch clean
            ROMs, and play responsibly.
          </p>
        </footer>
      </div>
    </div>
  );
}
