module.exports = {
	install: ['svelte'],
	plugins: [
		// just until new version of @snowpack/plugin-svelte is released
		['./hack/snowpack-plugin', {
			hydratable: true
		}]
	],
	devOptions: {
		open: 'none'
	},
	mount: {
		'.svelte/main': '/_app/main',
		'src/routes': '/_app/routes',
		'src/components': '/_app/components/'
	},
	alias: {
		components: './src/components'
	}
};