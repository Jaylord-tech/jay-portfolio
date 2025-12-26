import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax'; // 👈 import this
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider> {/* 👈 wrap App inside this */}
      <App />
    </ParallaxProvider>
  </StrictMode>,
);
