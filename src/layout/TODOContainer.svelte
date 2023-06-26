<script lang="ts">
	import TodoCard from '../components/TODOCard.svelte';

	let todoValue: string;
	const toDos: string[] = [];
	const handleSubmit = () => {
		console.log('pushing: ', todoValue, 'Into: ', toDos);
		toDos.push(todoValue);
	};
	$: console.log(toDos);
</script>

<div class="todo-container">
	<input
		type="text"
		id="todo-input"
		placeholder="TODO name"
		bind:value={todoValue}
		on:keydown={(e) => {
			if (e.code === 'Enter') {
				return handleSubmit();
			}
		}}
	/>
	<button on:click={handleSubmit}>Add TODO</button>
	<TodoCard {toDos} />
</div>

<style>
	.todo-container {
		display: flex;
		justify-content: center;
	}
	input {
		margin-right: 16px;
	}
</style>
