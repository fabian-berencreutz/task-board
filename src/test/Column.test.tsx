import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Column from '../Components/Column';

describe('Column Component', () => {
  it('visar sin titel och innehåll som skickas in som children', () => {
    render(
      <Column title="Todo">
        <p>Ett test-barn</p>
      </Column>
    );

    expect(screen.getByRole('heading', { level: 2, name: /todo/i })).toBeInTheDocument();
    expect(screen.getByText(/ett test-barn/i)).toBeInTheDocument();
  });
});
