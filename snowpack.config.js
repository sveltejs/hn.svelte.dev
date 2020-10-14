module.exports = {
	install: ['svelte'],
	plugins: [
		['@snowpack/plugin-svelte', {
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