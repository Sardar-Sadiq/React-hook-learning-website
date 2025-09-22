import React, { useDeferredValue, useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

function List({ query }) {
  const deferred = useDeferredValue(query)
  const items = useMemo(() => {
    const arr = []
    for (let i = 0; i < 3000; i++) arr.push(`${deferred}-${i}`)
    return arr
  }, [deferred])
  return (
    <ul className="h-48 overflow-auto rounded border p-2 text-sm text-gray-700">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  )
}

function UseDeferredValuePage() {
  const [q, setQ] = useState('')
  return (
    <Layout>
      <HookPageLayout title="useDeferredValue" description="Defer updating non-urgent parts of the UI during input.">
        <Card title="Demo">
          <div className="space-y-2">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type..." className="w-full rounded-md border border-gray-300 px-3 py-2" />
            <List query={q} />
          </div>
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseDeferredValuePage


