<script lang="ts">
	import Card from './Card.svelte';
	export let todos: string[];
</script>

<div class="card-container">
	{#each todos as todo, i}
		<Card {todo} {i} bind:todos />
	{/each}
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
