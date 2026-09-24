import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { handleEmailApi } from './server/apiMiddleware.js';

function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        handleEmailApi(req, res);
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emailApiPlugin()],
});

