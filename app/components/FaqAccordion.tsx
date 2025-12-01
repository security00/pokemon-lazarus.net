'use client';

import { useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: Props) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="mt-3 space-y-2">
      {items.map((item) => {
        const open = openFaq === item.question;
        return (
          <button
            key={item.question}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] p-3 text-left transition hover:border-[rgba(212,175,55,0.6)]"
            onClick={() => setOpenFaq(open ? null : item.question)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-white">{item.question}</p>
              <span className="text-sm text-[#d4af37]">{open ? '–' : '+'}</span>
            </div>
            {open && <p className="mt-2 text-sm text-[#d4e0ff]">{item.answer}</p>}
          </button>
        );
      })}
    </div>
  );
}
