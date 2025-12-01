'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
  src: string;
  fallback: string;
};

export function ImageWithFallback({ src, fallback, ...rest }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      unoptimized
      onError={() => setCurrentSrc(fallback)}
    />
  );
}
