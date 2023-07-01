<script lang="ts">
	import Card from './Card.svelte';
	export let toDos: string[];
</script>

<div class="card-container">
	{#each toDos as todo, i}
		<Card {todo} {i} bind:toDos />
	{/each}
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
