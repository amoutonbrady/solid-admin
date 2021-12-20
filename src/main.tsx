import '@/assets/css/inter.css';
import '@/assets/css/main.css';

import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import App from '@/app';
import { AuthProvider } from '@/stores/auth';

render(
  () => (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
