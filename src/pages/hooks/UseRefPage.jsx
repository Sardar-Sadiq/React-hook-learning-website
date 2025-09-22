import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'
import Button from '../../components/Button'

function UseRefPlayground() {
  const inputRef = useRef(null);
  const renders = useRef(0);
  const [value, setValue] = useState('');

  useEffect(() => { renders.current += 1; });

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        <Button onClick={() => inputRef.current && inputRef.current.focus()}>Focus</Button>
      </div>
      <p className="text-gray-700">Renders: {renders.current}</p>
    </div>
  );
}

function UseRefPage() {
  return (
    <Layout>
      <HookPageLayout
        title="useRef"
        description="useRef holds a mutable value in .current that persists across renders and can point to DOM elements."
      >
        <HookPageLayout.Section title="Overview">
          <CodeBlock code={`const ref = useRef(initialValue)\nref.current = next`} />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Playground">
          <UseRefPlayground />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Real-world example">
          <CodeBlock code={`function Video() {\n  const videoRef = useRef(null)\n  return <video ref={videoRef} />\n}`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default UseRefPage; 