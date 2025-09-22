import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { Link } from '../router'

const hooks = [
  { path: '/hooks/use-state', label: 'useState' },
  { path: '/hooks/use-reducer', label: 'useReducer' },
  { path: '/hooks/use-ref', label: 'useRef' },
  { path: '/hooks/use-effect', label: 'useEffect' },
  { path: '/hooks/use-layout-effect', label: 'useLayoutEffect' },
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
      <div className="space-y-6">
        <Card title="Welcome to React Hooks Lab">
          <div className="space-y-2">
            <p className="text-gray-700">This site helps you learn React hooks through short explanations, interactive playgrounds, and real-world examples.</p>
            <p className="text-gray-700">Scroll down to pick a hook and start exploring. Each page has:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Overview: What the hook does and when to use it</li>
              <li>Playground: Try it live and see how it behaves</li>
              <li>Real-world example: How it appears in apps</li>
            </ul>
          </div>
        </Card>

        <Card title="Hooks Menu">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {hooks.map((h) => (
              <Link key={h.path} to={h.path} className="rounded-md border border-gray-200 bg-white px-3 py-2 text-center hover:bg-gray-50">
                {h.label}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default Home; 