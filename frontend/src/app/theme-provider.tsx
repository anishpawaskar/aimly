'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // TODO: need to create theme toggler
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

