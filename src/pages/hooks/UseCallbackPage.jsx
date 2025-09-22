import React, { useCallback, useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

function Child({ onAdd }) {
  return (
    <button onClick={() => onAdd(1)} className="rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-50">
      Add 1
    </button>
  )
}

function Demo() {
  const [count, setCount] = useState(0)
  const onAdd = useCallback((delta) => setCount((c) => c + delta), [])
  const doubled = useMemo(() => count * 2, [count])
  return (
    <div className="space-y-2">
      <div>Count: {count} (×2 = {doubled})</div>
      <Child onAdd={onAdd} />
    </div>
  )
}

function UseCallbackPage() {
  return (
    <Layout>
      <HookPageLayout title="useCallback" description="Memoize function references to avoid unnecessary re-renders.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseCallbackPage


