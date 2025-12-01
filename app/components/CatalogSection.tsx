'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Icon, type IconName } from './Icon';

type CatalogItem = {
  title: string;
  description: string;
  meta: string;
  icon?: IconName;
};

type CatalogSectionProps = {
  pokedex: CatalogItem[];
  tools: (CatalogItem & { icon: IconName })[];
};

export function CatalogSection({ pokedex, tools }: CatalogSectionProps) {
  const [activeCatalog, setActiveCatalog] = useState<'pokedex' | 'tools'>('pokedex');

  const catalog = useMemo(
    () => (activeCatalog === 'pokedex' ? pokedex : tools),
    [activeCatalog, pokedex, tools],
  );

  return (
    <section id="pokedex" className="section">
      <div className="greek-line mb-4" />
      <div className="section-header">
        <div>
          <p className="tag">Data hub</p>
          <h2 className="section-title">Pokédex & tools preview</h2>
          <p className="section-subtitle">
            Quick-look entries, custom mythic forms, and the utilities the community uses to beat Ilios in style.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className={`pixel-btn secondary ${activeCatalog === 'pokedex' ? 'border-[#d4af37] text-white' : ''}`}
            onClick={() => setActiveCatalog('pokedex')}
          >
            Pokédex
          </button>
          <button
            className={`pixel-btn secondary ${activeCatalog === 'tools' ? 'border-[#d4af37] text-white' : ''}`}
            onClick={() => setActiveCatalog('tools')}
          >
            Tools
          </button>
        </div>
      </div>
      <div className="grid-3">
        {catalog.map((item) => (
          <div key={item.title} className="pixel-card flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {'icon' in item && item.icon ? (
                <span className="icon-badge">
                  <Icon name={item.icon} />
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
          {['Litten', 'Chespin', 'Sprigatito', 'Rowlet', 'Froakie', 'Fuecoco'].map(
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
  );
}
