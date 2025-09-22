/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useMemo, useState } from 'react'

export function useHashLocation() {
  const getPath = () => (typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') || '/' : '/');
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    function onHashChange() {
      setPath(getPath());
    }
    window.addEventListener('hashchange', onHashChange);
    // Ensure initial hash exists
    if (!window.location.hash) {
      window.location.hash = '/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    window.location.hash = to;
  };

  return { path, navigate };
}

export function Router({ routes, NotFound }) {
  const { path } = useHashLocation();
  const Page = useMemo(() => routes[path] || NotFound || (() => <div className="p-4">Page not found</div>), [routes, path, NotFound]);
  return <Page />;
}

export function Link({ to, className = '', children, onClick }) {
  return (
    <a href={`#${to}`} className={className} onClick={onClick}>
      {children}
    </a>
  );
} 