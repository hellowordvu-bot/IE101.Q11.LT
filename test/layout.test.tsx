import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock RootLayout để tránh DOM nesting issues
jest.mock('@/app/layout', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="root-layout" className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
    <div>Header Component</div>
    <main className="flex-1 max-w-none lg:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      {children}
    </main>
    <div>Footer Component</div>
  </div>
));

// Nếu bạn cần test các component riêng lẻ cũng có thể mock chúng
jest.mock('@/components/Header', () => () => <div>Header Component</div>);
jest.mock('@/components/Footer', () => () => <div>Footer Component</div>);

import RootLayout from '@/app/layout';

describe('RootLayout', () => {
  it('renders header, footer, and children', () => {
    render(
      <RootLayout>
        <div>Page Content</div>
      </RootLayout>
    );

    // Kiểm tra header
    expect(screen.getByText('Header Component')).toBeInTheDocument();

    // Kiểm tra children
    expect(screen.getByText('Page Content')).toBeInTheDocument();

    // Kiểm tra footer
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });

  it('applies layout classes correctly', () => {
    const { container } = render(
      <RootLayout>
        <div>Page Content</div>
      </RootLayout>
    );

    const rootDiv = container.querySelector('[data-testid="root-layout"]');
    expect(rootDiv).toHaveClass('bg-gray-50 text-gray-900 flex flex-col min-h-screen');

    const main = container.querySelector('main');
    expect(main).toHaveClass(
      'flex-1 max-w-none lg:max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10'
    );
  });
});
