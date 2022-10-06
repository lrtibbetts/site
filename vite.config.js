import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        albums: resolve(__dirname, 'albums/index.html'),
        books: resolve(__dirname, 'books/index.html'),
        recipes: resolve(__dirname, 'recipes/index.html'),
        miscellany: resolve(__dirname, 'miscellany/index.html'),
      }
    }
  }
})