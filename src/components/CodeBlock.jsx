import React, { useState } from 'react'

function CodeBlock({ code, language = 'jsx', className = '' }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  }

  return (
    <div className={["code-block relative rounded-lg bg-gray-900 text-gray-100 dark:bg-black", className].join(' ')} data-language={language}>
      <pre className="overflow-x-auto p-4 text-sm text-gray-100">
        <code className={`language-${language} text-gray-100`}>
          {code}
        </code>
      </pre>
      <button onClick={handleCopy} className="absolute right-2 top-2 rounded-md bg-gray-700 px-2 py-1 text-xs hover:bg-gray-600">
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export default CodeBlock; 