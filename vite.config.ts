import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3023',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
});