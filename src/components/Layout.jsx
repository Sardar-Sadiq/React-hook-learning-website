import React, { useEffect, useState } from 'react'
import { Link, useHashLocation } from '../router'
import { Moon, Sun, ArrowLeft } from 'lucide-react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="rounded-md border border-gray-200 bg-white px-2.5 py-2 text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function BackButton() {
  const { path } = useHashLocation();
  const isHome = path === '/';
  if (isHome) return null;
  return (
    <Link to="/" className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
      <ArrowLeft size={16} />
      <span className="text-sm">Back</span>
    </Link>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex flex-col">
      <header className="border-b bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BackButton />
            <div>
              <h1 className="text-xl font-bold">React Hooks Lab</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Interactive lessons for high school students</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6 w-full flex-1">
        {children}
      </main>
      <footer className="border-t bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
          Built with React and Tailwind CSS
        </div>
      </footer>
    </div>
  );
}

export default Layout; 