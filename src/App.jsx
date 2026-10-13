import { useState } from 'react';
import { Dropdown } from './components/Dropdown';
import { Modal } from './components/Modal';
import { Tooltip } from './components/Tooltip';

const section = { padding: 20, marginBottom: 16, border: '1px solid #ddd', borderRadius: 8 };

export function App() {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '40px auto', padding: '0 16px' }}>
      <h1>React Hook Kata</h1>
      <p>Use this page to try your components by hand. Run <code>npm test</code> for the test suite.</p>

      <section style={section}>
        <h2>Task 1: Dropdown</h2>
        <p>Nothing appears here until you implement <code>Dropdown.jsx</code>.</p>
        <Dropdown
          label="Fruit"
          items={['Apple', 'Banana', 'Cherry']}
          onSelect={setSelected}
        />
        <p>Selected: {selected ?? 'none'}</p>
      </section>

      <section style={section}>
        <h2>Task 2: Modal</h2>
        <button onClick={() => setModalOpen(true)}>Open modal</button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <p>Click outside this panel, or press the close button.</p>
        </Modal>
      </section>

      <section style={section}>
        <h2>Task 3 (bonus): Tooltip</h2>
        <Tooltip content="Tooltips explain things.">
          <button>Click for a tooltip</button>
        </Tooltip>
      </section>
    </main>
  );
}
