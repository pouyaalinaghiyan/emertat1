import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // In the Base44 sandbox the preview proxy reaches us via a rotating
    // <port>-<sandboxid>.<sandbox-domain> host. Vite 5.4+ rejects unknown
    // hosts with 403, so allow the sandbox domain (subdomain wildcard) only
    // when running under the platform preview.
    allowedHosts:
      previewMode && sandboxDomain ? [`.${sandboxDomain}`] : undefined,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
