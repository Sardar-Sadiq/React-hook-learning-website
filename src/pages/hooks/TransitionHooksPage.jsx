import React, { useDeferredValue, useMemo, useState, useTransition } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'

function BigList({ items }) {
  const deferredItems = useDeferredValue(items);
  const rendered = useMemo(() => deferredItems.map((it, i) => <li key={i} className="py-0.5">{it}</li>), [deferredItems]);
  return <ul className="list-disc pl-5 text-gray-700">{rendered}</ul>;
}

function TransitionPlayground() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const next = e.target.value;
    setText(next);
    startTransition(() => {
      const big = Array.from({ length: 1500 }, (_, i) => `${next} item ${i + 1}`);
      setList(big);
    });
  }

  return (
    <div className="space-y-3">
      <input className="w-full rounded-md border border-gray-300 px-3 py-2" value={text} onChange={handleChange} placeholder="Type to filter a huge list" />
      {isPending && <p className="text-sm text-gray-600">Updating list…</p>}
      <BigList items={list} />
    </div>
  );
}

function TransitionHooksPage() {
  return (
    <Layout>
      <HookPageLayout title="Transition Hooks" description="useTransition and useDeferredValue let you mark UI updates as non-urgent for smoother typing and interactions.">
        <HookPageLayout.Section title="Overview">
          <CodeBlock code={`const [isPending, startTransition] = useTransition()\nstartTransition(() => {\n  // non-urgent state updates\n})\nconst deferred = useDeferredValue(value)`} />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Playground">
          <TransitionPlayground />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Real-world example">
          <CodeBlock code={`startTransition(() => navigate('/search?query=' + query))`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default TransitionHooksPage; 