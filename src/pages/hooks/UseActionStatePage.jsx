import React, { useActionState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

async function fakeSubmit(formData) {
  await new Promise((r) => setTimeout(r, 600))
  const name = formData.get('name') || 'friend'
  return `Saved for ${name}`
}

function Demo() {
  const [message, submitAction, pending] = useActionState(async (_, formData) => {
    return await fakeSubmit(formData)
  }, '')
  return (
    <form action={submitAction} className="space-y-2">
      <input name="name" placeholder="Your name" className="w-full rounded-md border border-gray-300 px-3 py-2" />
      <button disabled={pending} className="rounded-md border border-gray-200 bg-white px-3 py-2">
        {pending ? 'Saving...' : 'Save'}
      </button>
      {message && <div className="text-sm text-green-700">{message}</div>}
    </form>
  )
}

function UseActionStatePage() {
  return (
    <Layout>
      <HookPageLayout title="useActionState" description="Manage state for form actions with async behavior.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseActionStatePage


