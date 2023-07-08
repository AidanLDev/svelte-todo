<script lang="ts">
	import Card from './Card.svelte';
	import Snackbar, { Label } from '@smui/snackbar';
	export let todos: string[];
	export let userId: string | undefined = undefined;
	let actionedSnackbar: Snackbar;
</script>

<div class="card-container">
	{#each todos as todo, i}
		<Card {todo} id={todo.id || i} bind:todos {actionedSnackbar} {userId} />
	{/each}
	<Snackbar bind:this={actionedSnackbar} class="success">
		<Label>Task complete</Label>
	</Snackbar>
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	:global(.mdc-snackbar__label) {
		background-color: green;
	}
	:global(.mdc-snackbar__surface) {
		background-color: green;
	}
</style>
