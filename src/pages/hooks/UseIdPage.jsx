import React, { useId } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

function Demo() {
  const id = useId()
  return (
    <div className="space-y-2">
      <label htmlFor={`${id}-name`} className="text-sm">Name</label>
      <input id={`${id}-name`} className="w-full rounded-md border border-gray-300 px-3 py-2" />
    </div>
  )
}

function UseIdPage() {
  return (
    <Layout>
      <HookPageLayout title="useId" description="Stable unique IDs for accessibility and forms.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseIdPage


