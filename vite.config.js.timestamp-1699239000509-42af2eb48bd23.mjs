// vite.config.js
import { defineConfig, loadEnv } from "file:///E:/ABOUT%20CODE/e-Learning_mini_project/node_modules/vite/dist/node/index.js";
import react from "file:///E:/ABOUT%20CODE/e-Learning_mini_project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.js"],
      testMatch: ["./tests/**/*.test.jsx"],
      globals: true
    },
    define: {
      "process.env.BASE_API": JSON.stringify(env.BASE_API),
      "process.env.OPEN_AI_KEY": JSON.stringify(env.OPEN_AI_KEY)
      // case jika tidak ada boolean value di env
      // 'process.env': JSON.stringify(env)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxBQk9VVCBDT0RFXFxcXGUtTGVhcm5pbmdfbWluaV9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxBQk9VVCBDT0RFXFxcXGUtTGVhcm5pbmdfbWluaV9wcm9qZWN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9BQk9VVCUyMENPREUvZS1MZWFybmluZ19taW5pX3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJykgLy8gYnVhdCBzZXR1cCAuZW52IGJpc2Ega2ViYWNhIHZpdGVcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gICAgdGVzdDoge1xyXG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgICAgc2V0dXBGaWxlczogWycuL3Rlc3RzL3NldHVwLmpzJ10sXHJcbiAgICAgIHRlc3RNYXRjaDogWycuL3Rlc3RzLyoqLyoudGVzdC5qc3gnXSxcclxuICAgICAgZ2xvYmFsczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlZmluZToge1xyXG4gICAgICAncHJvY2Vzcy5lbnYuQkFTRV9BUEknOiBKU09OLnN0cmluZ2lmeShlbnYuQkFTRV9BUEkpLFxyXG4gICAgICAncHJvY2Vzcy5lbnYuT1BFTl9BSV9LRVknOiBKU09OLnN0cmluZ2lmeShlbnYuT1BFTl9BSV9LRVkpXHJcblxyXG4gICAgICAvLyBjYXNlIGppa2EgdGlkYWsgYWRhIGJvb2xlYW4gdmFsdWUgZGkgZW52XHJcbiAgICAgIC8vICdwcm9jZXNzLmVudic6IEpTT04uc3RyaW5naWZ5KGVudilcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxjQUFjLGVBQWU7QUFDL1UsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDakQsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxJQUNqQixNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsTUFDYixZQUFZLENBQUMsa0JBQWtCO0FBQUEsTUFDL0IsV0FBVyxDQUFDLHVCQUF1QjtBQUFBLE1BQ25DLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTix3QkFBd0IsS0FBSyxVQUFVLElBQUksUUFBUTtBQUFBLE1BQ25ELDJCQUEyQixLQUFLLFVBQVUsSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUFBLElBSTNEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
