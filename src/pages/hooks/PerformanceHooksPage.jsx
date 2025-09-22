import React, { memo, useCallback, useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'
import Button from '../../components/Button'

const ListItem = memo(function ListItem({ value, onRemove }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2">
      <span>{value}</span>
      <Button variant="secondary" onClick={() => onRemove(value)}>Remove</Button>
    </div>
  );
});

function PerformancePlayground() {
  const [items, setItems] = useState(['apple', 'banana', 'carrot']);
  const [filter, setFilter] = useState('');

  const filteredItems = useMemo(() => items.filter((i) => i.includes(filter.toLowerCase())), [items, filter]);
  const handleRemove = useCallback((value) => {
    setItems((prev) => prev.filter((i) => i !== value));
  }, []);

  return (
    <div className="space-y-3">
      <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div className="space-y-2">
        {filteredItems.map((v) => (
          <ListItem key={v} value={v} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

function PerformanceHooksPage() {
  return (
    <Layout>
      <HookPageLayout title="Performance Hooks" description="Optimize renders with useMemo and stabilize function references with useCallback.">
        <HookPageLayout.Section title="Overview">
          <CodeBlock code={`const memoized = useMemo(() => compute(value), [value])\nconst stableFn = useCallback(() => doThing(value), [value])`} />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Playground">
          <PerformancePlayground />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Real-world example">
          <CodeBlock code={`const columns = useMemo(() => createColumns(locale), [locale])\nconst onRowClick = useCallback((row) => open(row.id), [])`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default PerformanceHooksPage; 