<script lang="ts">
	// Getting page details
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	import GhLink from './GHLink.svelte';
	$: text =
		path === '/register'
			? 'Register'
			: path === '/login'
			? 'Login'
			: path === '/todo' || '/'
			? 'TODO! The Svelte edition'
			: 'Where are we?';
</script>

<div class="todo-title-container">
	<GhLink />
	<h1>
		{text}
	</h1>
</div>

<style>
	.todo-title-container {
		display: flex;
		background-color: hsl(11.87deg 93.81% 61.96%);
	}
	h1 {
		margin-top: 0;
		background-color: hsl(11.87deg 93.81% 61.96%);
		width: 100%;
		text-align: center;
		color: antiquewhite;
		padding: 26px 0;
		font-family: Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}
</style>
