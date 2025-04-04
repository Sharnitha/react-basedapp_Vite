import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      'practicecurrentcontainerapptest.orangestone-98956164.eastus.azurecontainerapps.io',
    ],
  },
});
