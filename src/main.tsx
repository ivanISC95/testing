import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core'; // Importa MantineProvider
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css'; // Agrega el import de los estilos de Mantine Charts
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider >
      <App />
    </MantineProvider>
  </StrictMode>,
);
