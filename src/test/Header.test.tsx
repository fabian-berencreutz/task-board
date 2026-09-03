import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../Components/Header';

describe('Header Component', () => {
  it('renderas utan fel', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('visar appens huvudrubrik', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/task board/i);
  });

  it('visar den korta introduktionstexten', () => {
    render(<Header />);
    const introText = screen.getByText(/this is a simple task board/i);
    expect(introText).toBeInTheDocument();
  });
});
