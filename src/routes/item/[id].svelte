<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`https://api.hnpwa.com/v0/item/${params.id}.json`);
		const item = await res.json();

		return { item };
	}
</script>

<script>
	import Comment from './_Comment.svelte';

	export let item;
</script>

<style>
	h1 {
		font-weight: 500;
	}

	.item {
		border-bottom: 1em solid #f4f4f4;
		margin: 0 -2em 2em -2em;
		padding: 0 2em 2em 2em;
	}

	.main-link {
		display: block;
		text-decoration: none;
	}

	small {
		display: block;
		font-size: 14px;
	}

	.meta {
		font-size: 0.8em;
		font-weight: 300;
		color: #666;
	}
</style>

<svelte:head>
	 <title>{item.title} | Svelte Hacker News</title>
</svelte:head>

<div>
	<article class='item'>
		<a class='main-link' href='{item.url}'>
			<h1>{item.title}</h1>
			{#if item.domain}<small>{item.domain}</small>{/if}
		</a>

		<p class='meta'>{item.points} points by <a href='user/{item.user}'>{item.user}</a> {item.time_ago}</p>

		{#if item.content}
			{@html item.content}
		{/if}
	</article>

	<div class='comments'>
		{#each item.comments as comment}
			<Comment comment='{comment}'/>
		{/each}
	</div>
</div>