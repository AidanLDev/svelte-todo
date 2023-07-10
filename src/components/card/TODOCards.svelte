<script lang="ts">
	import Card from './Card.svelte';
	import type { todoItem } from '../../interfaces/todoInterface';
	export let todos: todoItem[];
	export let userId: string | undefined = undefined;
</script>

<div class="card-container">
	{#each todos as todo, i (`${todo.id}__${i}`)}
		{#if todo.completed_at === null || todo.completed_at === undefined}
			<Card {todo} id={todo.id || i} bind:todos {userId} />
		{/if}
	{/each}
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

</style>
