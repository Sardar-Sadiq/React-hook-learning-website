import React, { useOptimistic, useState } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import Card from '../../components/Card'
import Button from '../../components/Button'

function Demo() {
  const [todos, setTodos] = useState([{ id: 1, text: 'Learn hooks' }])
  const [optimisticTodos, addOptimistic] = useOptimistic(todos, (state, newTodo) => [...state, newTodo])
  async function addTodo() {
    const newTodo = { id: Date.now(), text: 'New task' }
    addOptimistic(newTodo)
    await new Promise((r) => setTimeout(r, 600))
    setTodos((t) => [...t, newTodo])
  }
  return (
    <div className="space-y-2">
      <Button onClick={addTodo}>Add todo (optimistic)</Button>
      <ul className="list-disc pl-5 text-gray-700">
        {optimisticTodos.map((t) => <li key={t.id}>{t.text}</li>)}
      </ul>
    </div>
  )
}

function UseOptimisticPage() {
  return (
    <Layout>
      <HookPageLayout title="useOptimistic" description="Render an optimistic version of state while awaiting a result.">
        <Card title="Demo">
          <Demo />
        </Card>
      </HookPageLayout>
    </Layout>
  )
}

export default UseOptimisticPage


