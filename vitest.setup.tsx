/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

interface MockImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
}

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock('next/image', () => ({
  default: ({ alt = '', fill, priority, ...props }: MockImageProps) => {
    void fill;
    void priority;
    return <img alt={alt} {...props} />;
  },
}));
