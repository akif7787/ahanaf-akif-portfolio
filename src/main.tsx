// Ensure window.fetch is writable so injected extensions can wrap it without throwing
if (typeof window !== 'undefined' && window.fetch) {
  try {
    const origFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: origFetch.bind(window),
    });
  } catch (_) {}
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
