import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

const preprocess = sveltePreprocess({
    scss: {
        includePaths: ['theme']
    },
    sourceMap: !production
})

export default preprocess;