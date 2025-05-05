import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      'containerappsharnitha.graybush-aad56c22.eastus.azurecontainerapps.io',
    ],
    open: false,            // Disable automatic browser opening
    watch: {
      usePolling: true,      // Enable polling to detect file changes
      interval: 100,         // Adjust polling interval if needed
    },
    host: true,             // Allow access from outside the container
    port: 3000,             // Match the port in your Docker setup
    strictPort: true,       // Ensure the port is not changed
  },
});
