module.exports = {
	layout: {"name":"main","file":"$layout.svelte"},
	error: {"name":"error","file":"$error.svelte"},
	components: [{"name":"index","file":"index.svelte"},{"name":"about","file":"about.svelte"},{"name":"item_$id","file":"item/[id].svelte"},{"name":"user_$name","file":"user/[name].svelte"},{"name":"$list$93_$91page","file":"[list]/[page].svelte"}],
	pages: [
		{ pattern: /^\/$/, parts: [{"component":{"name":"index","file":"index.svelte"},"params":[]}] },
		{ pattern: /^\/about\/?$/, parts: [{"component":{"name":"about","file":"about.svelte"},"params":[]}] },
		{ pattern: /^\/item\/([^/]+?)\/?$/, parts: [null,{"component":{"name":"item_$id","file":"item/[id].svelte"},"params":["id"]}] },
		{ pattern: /^\/user\/([^/]+?)\/?$/, parts: [null,{"component":{"name":"user_$name","file":"user/[name].svelte"},"params":["name"]}] },
		{ pattern: /^\/([^/]+?)\/([^/]+?)\/?$/, parts: [null,{"component":{"name":"$list$93_$91page","file":"[list]/[page].svelte"},"params":["list","page"]}] }
	],
	server_routes: [
		{ name: 'route_rss', pattern: /^\/rss\/?$/, file: 'rss.js', params: [] },
		{ name: 'route_$list_rss', pattern: /^\/([^/]+?)\/rss\/?$/, file: '[list]/rss.js', params: ["list"] }
	]
};