import React, { useMemo, useState } from 'react'
import Button from './Button'
import Card from './Card'

function Quiz({ question, options, correctIndex, explanation }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = useMemo(() => submitted && selectedIndex === correctIndex, [submitted, selectedIndex, correctIndex]);

  function submit() {
    if (selectedIndex === null) return;
    setSubmitted(true);
  }

  function reset() {
    setSelectedIndex(null);
    setSubmitted(false);
  }

  return (
    <Card title="Quick Check">
      <div className="space-y-3">
        <p className="text-gray-900 font-medium">{question}</p>
        <div className="space-y-2">
          {options.map((opt, idx) => {
            const selected = idx === selectedIndex;
            const base = 'w-full text-left rounded-md border px-3 py-2';
            const state = selected ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:bg-gray-50';
            return (
              <button key={idx} onClick={() => setSelectedIndex(idx)} className={[base, state].join(' ')}>
                <span className="mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Button onClick={submit} disabled={submitted || selectedIndex === null}>Submit</Button>
          {submitted && (
            <Button variant="secondary" onClick={reset}>Try Again</Button>
          )}
        </div>
        {submitted && (
          <div className={isCorrect ? 'text-green-700' : 'text-red-700'}>
            {isCorrect ? 'Correct!' : 'Not quite.'}
            {explanation ? (
              <p className="mt-1 text-gray-700">{explanation}</p>
            ) : null}
          </div>
        )}
      </div>
    </Card>
  );
}

export default Quiz; 