import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      sentryVitePlugin({
        org: "fe-error-logging",
        project: "javascript-react2",
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: "./dist/**/*.map",
        },
      }),
    ],

    build: {
      sourcemap: true,
    },
  };
});
