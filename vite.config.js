
import injectHTML from "vite-plugin-html-inject";

export default {
    plugins: [
        injectHTML()
    ],
    root: "./",
    base: "./",
    publicDir: "./public",
    build: {
        minify: false,
        outDir: "./dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: "assets/[name].js",
                assetFileName: "assets/[name][extname]"
            }
        }
    }
}