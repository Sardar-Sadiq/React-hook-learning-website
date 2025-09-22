import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

const FancyInput = forwardRef(function FancyInput(_, ref) {
  const inputRef = useRef(null)
  useImperativeHandle(ref, () => ({ focus: () => inputRef.current && inputRef.current.focus() }))
  return <input ref={inputRef} className="w-full rounded-md border border-gray-300 px-3 py-2" />
})

function Demo() {
  const ref = useRef(null)
  return (
    <div className="space-y-2">
      <FancyInput ref={ref} />
      <button onClick={() => ref.current?.focus()} className="rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-50">Focus child</button>
    </div>
  )
}

function UseImperativeHandlePage() {
  return (
    <Layout>
      <HookPageLayout title="useImperativeHandle" description="Customize the instance value exposed to parent components when using refs.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseImperativeHandlePage


