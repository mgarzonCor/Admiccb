import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['public/css/app.scss','public/css/pdf.scss','public/css/form.scss', 'public/js/app.js', 'public/js/form.js', 'public/js/pdf.js'],
            refresh: true,
        }),
    ],
});
