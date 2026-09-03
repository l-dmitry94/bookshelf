import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/scss/fonts" as *;
                    @use "@/scss/variables" as *;
                    @use "@/scss/breakpoints" as *;
                    @use "@/scss/mixins" as *;
                `,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
