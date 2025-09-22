import React, { useSyncExternalStore, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

// Minimal store
const store = (() => {
  let state = { count: 0 }
  let listeners = new Set()
  return {
    getSnapshot: () => state,
    subscribe: (fn) => { listeners.add(fn); return () => listeners.delete(fn) },
    increment: () => { state = { count: state.count + 1 }; listeners.forEach((l) => l()) },
    reset: () => { state = { count: 0 }; listeners.forEach((l) => l()) },
  }
})()

function Demo() {
  const snap = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const [local, setLocal] = useState(0)
  return (
    <div className="space-y-2">
      <div>Store count: {snap.count}</div>
      <div>Local state: {local}</div>
      <div className="flex gap-2">
        <button onClick={store.increment} className="rounded-md border border-gray-200 bg-white px-3 py-2">Increment store</button>
        <button onClick={() => setLocal((c) => c + 1)} className="rounded-md border border-gray-200 bg-white px-3 py-2">Increment local</button>
        <button onClick={store.reset} className="rounded-md border border-gray-200 bg-white px-3 py-2">Reset store</button>
      </div>
    </div>
  )
}

function UseSyncExternalStorePage() {
  return (
    <Layout>
      <HookPageLayout title="useSyncExternalStore" description="Subscribe to external stores with consistent snapshots.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseSyncExternalStorePage


