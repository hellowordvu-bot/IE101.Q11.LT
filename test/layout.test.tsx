// __tests__/layout.test.tsx
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';
import React from 'react';

// Mock Header và Footer để tập trung test layout
jest.mock('@/components/Header', () => () => <div data-testid="header" />);
jest.mock('@/components/Footer', () => () => <div data-testid="footer" />);

describe('RootLayout', () => {
  it('renders children, header, and footer', () => {
    render(
      <RootLayout>
        <div data-testid="child">Page Content</div>
      </RootLayout>
    );

    // Kiểm tra children
    expect(screen.getByTestId('child')).toBeInTheDocument();

    // Kiểm tra header/footer tồn tại
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies correct classes to main layout', () => {
    const { container } = render(
      <RootLayout>
        <div>Page Content</div>
      </RootLayout>
    );

    // Query main element để test class Tailwind
    const main = container.querySelector('main');
    expect(main).toHaveClass(
      'flex-1 max-w-none lg:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10'
    );

    // Test root body classes bằng cách query trực tiếp root element
    const bodyDiv = container.firstChild as HTMLElement;
    expect(bodyDiv).toBeInTheDocument();
    // React Testing Library không render <body>, <html>, nên test main element là đủ
  });
});
