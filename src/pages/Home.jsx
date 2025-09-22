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
            {/* Bento grid - dark container, equal spacing, exact spans */}
            <div className="rounded-xl bg-slate-900 p-4 grid grid-cols-2 md:grid-cols-6 auto-rows-[110px] gap-4">
              {[
                // Row 1
                { path: '/hooks/use-state', label: 'useState', span: 'md:col-span-4 md:row-span-2', size: 'text-white font-semibold text-center text-[18px] md:text-[22px] leading-7' },
                { path: '/hooks/use-reducer', label: 'useReducer', span: 'md:col-span-2 md:row-span-1', size: 'text-white font-semibold text-center' },
                { path: '/hooks/use-ref', label: 'useRef', span: 'md:col-span-2 md:row-span-1', size: 'text-white font-semibold text-center' },
                // Row 2
                { path: '/hooks/use-effect', label: 'useEffect', span: 'md:col-span-2 md:row-span-1', size: 'text-white font-semibold text-center' },
                { path: '/hooks/use-memo', label: 'useMemo', span: 'md:col-span-2 md:row-span-1', size: 'text-white font-semibold text-center' },
                { path: '/hooks/latest', label: 'Latest Hooks (useId, useOptimistic)', span: 'md:col-span-2 md:row-span-3', size: 'text-white font-semibold text-center md:text-[17px] leading-6' },
                // Row 3
                { path: '/hooks/performance', label: 'Performance (useMemo, useCallback)', span: 'md:col-span-4 md:row-span-2', size: 'text-white font-semibold text-center md:text-[18px] leading-6' },
              ].map((t, i) => {
                const base = 'flex items-center justify-center rounded-lg bg-slate-800 text-white text-center px-1';
                const key = t.key || t.path + '-' + i;
                return (
                  <Link key={key} to={t.path} className={[base, t.span].join(' ')}>
                    <span className={["truncate max-w-full px-1", t.size].join(' ')}>{t.label}</span>
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