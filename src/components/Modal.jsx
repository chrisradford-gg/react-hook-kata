import { useRef, useCallback } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

export function Modal({ isOpen, onClose, children }) {
  const panelRef = useRef(null);
  const handleOutside = useCallback(() => onClose(), [onClose]);

  useClickOutside(panelRef, handleOutside);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div ref={panelRef} style={{ background: '#fff', padding: 24, borderRadius: 8 }}>
        <button onClick={onClose} aria-label="Close">✕</button>
        {children}
      </div>
    </div>
  );
}
