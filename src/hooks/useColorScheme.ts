import { useState, useEffect } from 'react';
import type { ColorScheme } from '../types';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { colorScheme, toggleColorScheme };
}