import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'

function UseEffectPlayground() {
  const [query, setQuery] = useState('react');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    const id = setTimeout(async () => {
      const fake = Array.from({ length: 3 }, (_, i) => `${query} result ${i + 1}`);
      if (!ignore) {
        setResults(fake);
        setLoading(false);
      }
    }, 500);
    return () => {
      clearTimeout(id);
      ignore = true;
    };
  }, [query]);

  return (
    <div className="space-y-3">
      <input className="w-full rounded-md border border-gray-300 px-3 py-2" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search term" />
      {loading ? <p className="text-gray-600">Loading…</p> : (
        <ul className="list-disc pl-5 text-gray-700">
          {results.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}
    </div>
  );
}

function UseEffectPage() {
  return (
    <Layout>
      <HookPageLayout
        title="useEffect"
        description="Synchronize your component with external systems (network, DOM, subscriptions)."
      >
        <HookPageLayout.Section title="Overview">
          <CodeBlock code={`useEffect(() => {\n  // run after render\n  return () => {\n    // optional cleanup\n  }\n}, [dependencies])`} />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Playground">
          <UseEffectPlayground />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Real-world example">
          <CodeBlock code={`useEffect(() => {\n  const id = setInterval(tick, 1000)\n  return () => clearInterval(id)\n}, [])`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default UseEffectPage; 