import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import Button from './Button'

function CounterDemo() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">{count}</div>
      <div className="flex gap-2">
        <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        <Button variant="secondary" onClick={() => setCount(0)}>Reset</Button>
      </div>
      <p className="text-sm text-gray-600">Previous count: {previousCountRef.current}</p>
      <p className="text-sm text-gray-600">Renders so far: {renderCountRef.current}</p>
    </div>
  );
}

function InputFocusDemo() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type your name" className="w-full rounded-md border border-gray-300 px-3 py-2" />
        <Button onClick={() => inputRef.current && inputRef.current.focus()}>Focus</Button>
      </div>
      <p className="text-sm text-gray-600">Hello, {value || 'friend'}!</p>
    </div>
  );
}

function HookPlayground() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="useState + useRef + useEffect">
        <CounterDemo />
      </Card>
      <Card title="useRef for DOM access">
        <InputFocusDemo />
      </Card>
    </div>
  );
}

export default HookPlayground; 