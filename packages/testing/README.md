# @repo/testing

Shared testing utilities and providers for the monorepo.

## Features
- TestingProvider to wrap components with common context/providers during tests
- Custom `render` from React Testing Library pre-wired with providers

## Usage

Install peer deps in the consumer if not already present:

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom
```

Import the custom render in your tests:

```tsx
import { render, screen } from '@repo/testing';
import { Button } from '@repo/ui';

test('renders', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
});
```

Override providers per test when needed:

```tsx
import { render } from '@repo/testing';

render(<MyComponent />, {
  providers: ({ children }) => (
    <MyCustomProvider value="test">{children}</MyCustomProvider>
  ),
});
```
