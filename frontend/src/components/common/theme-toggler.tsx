'use client';

import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggler2 = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className='relative'
      onClick={toggleTheme}
    >
      <SunIcon
        className={cn(
          'absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300',
          isDark
            ? 'scale-100 rotate-0 opacity-100 blur-none'
            : 'scale-0 rotate-90 opacity-0 blur-md'
        )}
      />
      <MoonIcon
        className={cn(
          'absolute inset-0 top-1/2 left-1/2 -translate-1/2 transition-all duration-300',
          !isDark
            ? 'scale-100 rotate-0 opacity-100 blur-none'
            : 'scale-0 -rotate-90 opacity-0 blur-md'
        )}
      />
    </Button>
  );
};

