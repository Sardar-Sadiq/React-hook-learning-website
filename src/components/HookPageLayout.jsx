import React from 'react'
import Card from './Card'

function Section({ title, children }) {
  return (
    <Card title={title}>
      <div className="space-y-3">
        {children}
      </div>
    </Card>
  );
}

function HookPageLayout({ title, description, children, menu }) {
  return (
    <div className="space-y-6">
      <Card title={title}>
        <p className="text-gray-700">{description}</p>
      </Card>
      {children}
      {menu}
    </div>
  );
}

HookPageLayout.Section = Section;

export default HookPageLayout; 