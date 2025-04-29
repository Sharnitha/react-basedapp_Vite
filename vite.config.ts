import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      'vue3containerapp.orangerock-e67073df.eastus.azurecontainerapps.io',
    ], 
  },
  server: {
    // this ensures that the browser opens upon server start
    open: false,
    // this sets a default port to 3000
    watch: {
      usePolling: true, // Enable polling to detect file changes
      interval: 100,    // Adjust the polling interval if needed
    },
    host: true,          // Allow access from outside the container
    port: 3000,          // Match the port in your Docker setup
    strictPort: true,    // Ensure the port is not changed
  }
});
