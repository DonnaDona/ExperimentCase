import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()], // change the build directory to the Django static directory
    build: {
        outDir: '../backend/dist/'
    }
})
