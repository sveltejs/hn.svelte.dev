<script>
	export let comment;
</script>

<style>
	.comment {
		border-top: 1px solid rgba(0,0,0,0.1);
		padding: 1em 0 0 0;
	}

	:global(html).dark .comment {
		border-top: 1px solid rgba(255,255,255,0.1);;
	}

	.comment .children {
		padding: 0 0 0 1em;
	}

	@media (min-width: 720px) {
		.comment .children {
			padding: 0 0 0 2em;
		}
	}

	li {
		list-style: none;
	}

	.meta {
		display: block;
		font-size: 14px;
		color: var(--fg-light);
		margin: 0 0 1em 0;
	}

	a {
		color: var(--fg-light);
	}

	/* prevent crazy overflow layout bug on mobile */
	.body :global(*) {
		overflow-wrap: break-word;
	}

	.comment :global(pre) {
		overflow-x: auto;
	}
</style>

{#if !comment.deleted}
	<article class='comment'>
		<span class='meta'><a rel='prefetch' href='user/{comment.user}'>{comment.user}</a> {comment.time_ago}</span>
		<div class='body'>
			{@html comment.content}
		</div>

		{#if comment.comments.length > 0}
			<ul class='children'>
				{#each comment.comments as child}
					<li><svelte:self comment='{child}'/></li>
				{/each}
			</ul>
		{/if}
	</article>
{/if}