import React from 'react'

function Card({ title, children, className = '' }) {
  return (
    <div className={["rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900", className].join(' ')}>
      {title ? (
        <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
      ) : null}
      <div className="p-4 text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
}

export default Card; 