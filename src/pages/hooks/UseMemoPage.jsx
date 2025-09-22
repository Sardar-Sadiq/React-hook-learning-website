import React, { useMemo, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

function slowFib(n) {
  if (n <= 1) return n
  return slowFib(n - 1) + slowFib(n - 2)
}

function Demo() {
  const [n, setN] = useState(25)
  const [label, setLabel] = useState('')
  const fib = useMemo(() => slowFib(n), [n])
  return (
    <div className="space-y-2">
      <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full rounded-md border border-gray-300 px-3 py-2" />
      <div className="text-sm text-gray-700">fib({n}) = {fib}</div>
      <input placeholder="Unrelated input" value={label} onChange={(e) => setLabel(e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" />
    </div>
  )
}

function UseMemoPage() {
  return (
    <Layout>
      <HookPageLayout title="useMemo" description="Memoize expensive calculations to avoid recomputation on every render.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseMemoPage


