import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "index.html"),
      name: "e-service-design-system",
      // the proper extensions will be added
      fileName: "veera",
    },
    rollupOptions: {},
  },
});
