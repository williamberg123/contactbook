import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteCommonjs(),
	],
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				esbuildCommonjs(['react-flagpack']),
			],
		},
	},
	root: './',
	build: {
		outDir: './dist',
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['.test/setup.js'],
		include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
	},
});
