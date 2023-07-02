<script lang="ts">
	export let text: string;
	import GhLink from './GHLink.svelte';
	const isTODOPage = text === 'What TODO, ';
</script>

{#if isTODOPage}
	<div class="todo-title-container">
		<GhLink />
		<h1>
			{text} <span class="svelteName">SVELTE</span> edition
		</h1>
	</div>
{:else}
	<h1>
		{text}
	</h1>
{/if}

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
	.svelteName {
		letter-spacing: 4px;
	}
</style>
