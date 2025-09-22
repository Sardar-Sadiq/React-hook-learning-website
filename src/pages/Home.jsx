import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { Link } from '../router'

const hooks = [
  { path: '/hooks/use-state', label: 'useState' },
  { path: '/hooks/use-reducer', label: 'useReducer' },
  { path: '/hooks/use-ref', label: 'useRef' },
  { path: '/hooks/use-effect', label: 'useEffect' },
  { path: '/hooks/use-memo', label: 'useMemo' },
  { path: '/hooks/use-callback', label: 'useCallback' },
  { path: '/hooks/performance', label: 'Performance (useMemo, useCallback)' },
  { path: '/hooks/transition', label: 'Transition (useTransition, useDeferredValue)' },
  { path: '/hooks/latest', label: 'Latest Hooks (useId, useOptimistic)' },
  { path: '/hooks/use-deferred-value', label: 'useDeferredValue' },
  { path: '/hooks/use-id', label: 'useId' },
  { path: '/hooks/use-imperative-handle', label: 'useImperativeHandle' },
  { path: '/hooks/use-sync-external-store', label: 'useSyncExternalStore' },
  { path: '/hooks/use-optimistic', label: 'useOptimistic' },
  { path: '/hooks/use-action-state', label: 'useActionState' },
];

function Home() {
  return (
    <Layout>
      <div className="space-y-6 relative">
        {/* Background accent */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-48 gradient-blob opacity-60" />
        <Card title="Welcome to React Hooks Lab">
          <div className="space-y-2">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 font-semibold">This site helps you learn React hooks through short explanations, interactive playgrounds, and real-world examples.</p>
            <p className="text-gray-700 dark:text-gray-300">Scroll down to pick a hook and start exploring. Each page has:</p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Overview: What the hook does and when to use it</li>
              <li>Playground: Try it live and see how it behaves</li>
              <li>Real-world example: How it appears in apps</li>
            </ul>
          </div>
        </Card>

        <Card title="Hooks Menu">
            {/* Compact bento tiles with minimal padding */}
            <div className="rounded-xl p-1 grid grid-cols-2 md:grid-cols-5 auto-rows-[72px] gap-3 md:gap-4">
              {hooks.map((h, idx) => {
                const base = "flex items-center justify-center rounded-lg ring-1 ring-gray-200 dark:ring-gray-700 text-center text-sm font-medium transition-transform duration-200 hover:scale-[1.02] hover:shadow-md bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-1";
                // Bento-style stagger while keeping identical tile sizes
                const stagger = (idx % 5 === 1) ? 'md:translate-y-1' : (idx % 5 === 3) ? 'md:-translate-y-1' : ''
                return (
                  <Link key={h.path} to={h.path} className={[base, stagger].join(' ')}>
                    <span className="truncate max-w-full px-0.5 leading-5 text-[14px] md:text-[15px] font-medium">{h.label}</span>
                  </Link>
                )
              })}
            </div>
          </Card>
      </div>
    </Layout>
  );
}

export default Home; 