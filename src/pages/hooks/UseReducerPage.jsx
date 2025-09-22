import React, { useReducer } from 'react'
import Layout from '../../components/Layout'
import HookPageLayout from '../../components/HookPageLayout'
import CodeBlock from '../../components/CodeBlock'
import Button from '../../components/Button'

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function UseReducerPlayground() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="space-y-3">
      <div className="flex gap-2 items-center">
        <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        <span className="font-bold">{state.count}</span>
        <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
        <Button variant="secondary" onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      </div>
    </div>
  );
}

function UseReducerPage() {
  return (
    <Layout>
      <HookPageLayout
        title="useReducer"
        description="useReducer manages complex state transitions with a reducer function and actions."
      >
        <HookPageLayout.Section title="Overview">
          <CodeBlock code={`function reducer(state, action) {\n  switch (action.type) {\n    case 'add': return {...}\n  }\n}\nconst [state, dispatch] = useReducer(reducer, initialState)`} />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Playground">
          <UseReducerPlayground />
        </HookPageLayout.Section>
        <HookPageLayout.Section title="Real-world example">
          <CodeBlock code={`function formReducer(state, action) {\n  // handle many fields and steps\n}`} />
        </HookPageLayout.Section>
      </HookPageLayout>
    </Layout>
  );
}

export default UseReducerPage; 