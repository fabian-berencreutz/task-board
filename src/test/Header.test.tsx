import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Components/Header';

describe('Header Component', () => {
  it('renderas utan fel', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it('visar appens huvudrubrik', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/task board/i);
  });

  it('visar den korta introduktionstexten', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const introText = screen.getByText(/this is a simple task board/i);
    expect(introText).toBeInTheDocument();
  });
});

