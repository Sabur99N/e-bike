import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts (replaces the missing local @font-face files).
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import '@fontsource/saira-stencil-one/400.css';

import App from './App.jsx';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
