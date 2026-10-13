import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  const onSelect = vi.fn();

  beforeEach(() => onSelect.mockClear());

  it('is closed by default', () => {
    render(<Dropdown label="Fruit" items={items} onSelect={onSelect} />);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    render(<Dropdown label="Fruit" items={items} onSelect={onSelect} />);
    await user.click(screen.getByRole('button', { name: 'Fruit' }));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('stays open when clicking inside the list', async () => {
    const user = userEvent.setup();
    render(<Dropdown label="Fruit" items={items} onSelect={onSelect} />);
    await user.click(screen.getByRole('button', { name: 'Fruit' }));
    await user.click(screen.getByRole('listbox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('closes when clicking outside', async () => {
    const user = userEvent.setup();
    render(<Dropdown label="Fruit" items={items} onSelect={onSelect} />);
    await user.click(screen.getByRole('button', { name: 'Fruit' }));
    await user.click(document.body);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
