import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// const packageJson = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    // dev specific config
    return {
      plugins: [react(), dts()],
    }
  } else {
    // command === 'build'
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: '.tmp/main.js',
          name: 'interceptor',
          fileName: 'main',
        },
        // rollupOptions: {
        //   // make sure to externalize deps that shouldn't be bundled
        //   // into your library
        //   external: ['react', 'react-dom'],
        //   output: {
        //     // Provide global variables to use in the UMD build
        //     // for externalized deps
        //     globals: {
        //       react: 'React',
        //       'react-dom': 'ReactDOM',
        //     },
        //   },
        // },
      },
    }
  }
})
