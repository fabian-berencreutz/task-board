import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TaskCard from '../Components/TaskCard';

describe('TaskCard Component', () => {
  it('renderas med egna props och visar all information', () => {
    const testTask = {
      id: 101,
      title: 'Skriva tester',
      description: 'Skriva enhetstester för TaskCard',
      category: 'Utveckling',
      priority: 'high' as const,
      assignee: 'Kalle Karlsen',
    };

    render(<TaskCard {...testTask} />);

    expect(screen.getByText(/101/)).toBeInTheDocument();
    expect(screen.getByText(/Skriva tester/i)).toBeInTheDocument();
    expect(screen.getByText(/Skriva enhetstester för TaskCard/i)).toBeInTheDocument();
    expect(screen.getByText(/Utveckling/i)).toBeInTheDocument();
    expect(screen.getByText(/high/i)).toBeInTheDocument();
    expect(screen.getByText(/Kalle Karlsen/i)).toBeInTheDocument();
  });
});
