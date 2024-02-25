import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      host: true,
      strictPort: true,
      port: 3001,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
      "process.env": env,
    },
  };
});
