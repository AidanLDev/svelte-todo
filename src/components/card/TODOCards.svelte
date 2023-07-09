<script lang="ts">
	import Card from './Card.svelte';
	import Snackbar, { Label } from '@smui/snackbar';
	import type { todoItem } from '../../interfaces/todoInterface';
	export let todos: todoItem[];
	export let userId: string | undefined = undefined;
	let actionedSnackbar: Snackbar;
</script>

<div class="card-container">
	{#each todos as todo, i (`${todo.id}__${i}`)}
		{#if todo.completed_at === null || todo.completed_at === undefined}
			<Card {todo} id={todo.id || i} index={i} bind:todos {actionedSnackbar} {userId} />
		{/if}
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
