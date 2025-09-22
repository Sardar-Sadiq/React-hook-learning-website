import React, { useId, useOptimistic, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'
import Button from '../../components/Button'

function UseIdExample() {
  const id = useId();
  return (
    <div className="space-y-2">
      <label htmlFor={`${id}-email`} className="block text-sm font-medium text-gray-700">Email</label>
      <input id={`${id}-email`} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="you@example.com" />
    </div>
  );
}

function UseOptimisticExample() {
  const [todos, setTodos] = useState([{ id: 1, text: 'Learn hooks' }]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, (state, newTodo) => [...state, newTodo]);

  async function addTodo() {
    const newTodo = { id: Date.now(), text: 'New task' };
    addOptimisticTodo(newTodo);
    await new Promise((r) => setTimeout(r, 600));
    setTodos((t) => [...t, newTodo]);
  }

  return (
    <div className="space-y-2">
      <Button onClick={addTodo}>Add todo (optimistic)</Button>
      <ul className="list-disc pl-5 text-gray-700">
        {optimisticTodos.map((t) => <li key={t.id}>{t.text}</li>)}
      </ul>
    </div>
  );
}

function LatestHooksPage() {
  return (
    <Layout>
      <HookPageLayout title="Latest React Hooks" description="Explore newer hooks like useId and useOptimistic introduced in recent React versions.">
        <HookPageLayout.Section title="useId">
          <UseIdExample />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="useOptimistic">
          <UseOptimisticExample />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="References">
          <CodeBlock code={`- useId: stable IDs for accessibility\n- useOptimistic: optimistic UI updates in async flows`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default LatestHooksPage; 