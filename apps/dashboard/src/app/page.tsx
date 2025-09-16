'use client';
import { Button } from '@saas/ui';
export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Multi-tenant SaaS Dashboard</h1>
      <p style={{ margin: '12px 0 20px' }}>
        Welcome! This is a starter Next.js app wired to shared packages.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
          Primary Button
        </Button>
        <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>
          Secondary Button
        </Button>
      </div>

      <p style={{ fontSize: '14px', color: '#666' }}>Both apps can import shared components</p>
    </main>
  );
}
