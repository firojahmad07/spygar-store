import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 9001, // Change this to any available port
    strictPort: true, // Ensures Vite fails if the port is already in use
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: '../../public',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'build/shop-bundle.js', // Custom filename for entry files
        chunkFileNames: 'build/shop-bundle-[hash].js', // Custom filename for chunks
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'build/shop-bundle.css'; // Custom CSS filename
          }
          
          return 'build/shop-bundle-[hash][extname]'; // Default for other build
        }
      }
    }
  }
});
