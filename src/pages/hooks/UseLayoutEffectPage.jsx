import React, { useLayoutEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'

function Demo() {
  const boxRef = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect()
      setSize({ w: Math.round(rect.width), h: Math.round(rect.height) })
    }
  })
  return (
    <div className="space-y-2">
      <div ref={boxRef} className="rounded-md border border-gray-300 p-4">Measure me!</div>
      <div className="text-sm text-gray-700">Measured: {size.w}×{size.h}px</div>
    </div>
  )
}

function UseLayoutEffectPage() {
  return (
    <Layout>
      <HookPageLayout title="useLayoutEffect" description="A special tool to measure and adjust the page right after React changes the screen, but before the user sees it.">
        <Card title="Story: Measuring a box before anyone sees it">
          <div className="space-y-2">
            <p>Imagine you are hanging a picture frame on a wall. You first place it, quickly check with a ruler to make sure it is straight, and only then invite everyone to look. <span className="text-muted">That quick measuring step before showing it</span> is what <code>useLayoutEffect</code> is for.</p>
            <ul className="list-disc pl-5">
              <li><strong>React updates the DOM</strong>: the page elements are changed.</li>
              <li><strong>useLayoutEffect runs immediately</strong>: you can read sizes/positions and even adjust styles.</li>
              <li><strong>Screen paints</strong>: the user now sees the final, adjusted result without flicker.</li>
            </ul>
          </div>
        </Card>
        <Card title="Step-by-step (like teaching kids)">
          <ol className="list-decimal pl-5 space-y-1">
            <li>React builds your page like LEGO blocks.</li>
            <li>Right after the blocks are placed, you get a chance to grab a ruler.</li>
            <li>You measure a block’s width/height/position.</li>
            <li>If it’s not perfect, you nudge it into place.</li>
            <li>Only then the page is shown to everyone.</li>
          </ol>
        </Card>
        <Card title="When to use it">
          <ul className="list-disc pl-5 space-y-1">
            <li>Measuring element size with <code>getBoundingClientRect()</code>.</li>
            <li>Synchronizing scroll position right after layout.</li>
            <li>Avoiding flicker when you must change styles based on size.</li>
          </ul>
        </Card>
        <Card title="When NOT to use it">
          <ul className="list-disc pl-5 space-y-1">
            <li>For data fetching or logging — use <code>useEffect</code> instead.</li>
            <li>If you don’t need layout measurements, prefer <code>useEffect</code> to keep things smooth.</li>
          </ul>
        </Card>
        <Card title="Live demo: measure a box">
          <Demo />
        </Card>
        <Card title="Tiny recipe">
          <div className="space-y-1 text-sm">
            <div>1) Make a ref for the thing you want to measure.</div>
            <div>2) In <code>useLayoutEffect</code>, read its size/position.</div>
            <div>3) Save it in state and use it to style or position stuff.</div>
          </div>
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseLayoutEffectPage


