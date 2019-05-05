<script>
	import { stores } from '@sapper/app';
	import Nav from '../components/Nav.svelte';
	import PreloadingIndicator from '../components/PreloadingIndicator.svelte';

	export let segment;

	const { preloading } = stores();
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

{#if $preloading}
	<PreloadingIndicator/>
{/if}

<main>
	<slot></slot>
</main>