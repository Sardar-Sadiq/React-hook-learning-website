import React, { useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'
import Button from '../../components/Button'

function UseStatePlayground() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        <Button variant="secondary" onClick={() => setCount(0)}>Reset</Button>
        <span className="font-semibold">Count: {count}</span>
      </div>
      <div className="flex items-center gap-2">
        <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Type your name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <p className="text-gray-700">Hello {name || 'friend'}! You clicked {count} times.</p>
    </div>
  );
}

function UseStateExample() {
  const code = `function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent'

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    await fakeSendEmail(email)
    setStatus('sent')
  }

  return (
    <form onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Sign up'}
      </button>
    </form>
  )
}`;
  return <CodeBlock code={code} language="jsx" />
}

function UseStatePage() {
  return (
    <Layout>
      <HookPageLayout
        title="useState"
        description="useState lets your component remember values between renders and update the UI when they change."
      >
        <HookPageLayout.Section title="Overview">
          <p className="text-gray-700">Start with a value, get back the current value and a function to update it. Updating schedules a re-render.</p>
          <CodeBlock code={`const [state, setState] = useState(initialValue)`} />
        </HookPageLayout.Section>

        <HookPageLayout.Section title="Playground">
          <UseStatePlayground />
        </HookPageLayout.Section>

        <HookPageLayout.Section title="Real-world example">
          <UseStateExample />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default UseStatePage; 