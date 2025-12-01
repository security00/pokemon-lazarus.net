'use client';

import { useState } from 'react';

type ShareButtonProps = {
  text?: string;
  url?: string;
  className?: string;
};

export function ShareButton({
  text = 'Explore the Mythical Ilios region in Pokémon Lazarus.',
  url = 'https://pokemon-lazarus.net',
  className = 'btn-ghost',
}: ShareButtonProps) {
  const [message, setMessage] = useState('Share with friends');

  const handleShare = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title: 'Pokémon Lazarus', text, url });
        setMessage('Shared to your apps');
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setMessage('Link copied');
        return;
      }
      setMessage('Share unavailable');
    } catch {
      setMessage('Share dismissed');
    }
  };

  return (
    <button className={className} onClick={handleShare}>
      {message}
    </button>
  );
}
