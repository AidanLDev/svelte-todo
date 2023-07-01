<script lang="ts">
	import TodoCards from '../components/card/TODOCards.svelte';

	let todoValue: string;
	let toDos: string[] = [];
	const handleSubmit = () => {
		toDos.push(todoValue);
		toDos = toDos;
		todoValue = '';
	};
</script>

<div class="todo-container">
	<div class="input-container">
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
	</div>
	<TodoCards {toDos} />
</div>

<style>
	.input-container {
		display: flex;
		justify-content: center;
	}
	input {
		margin-right: 16px;
		font-size: 18px;
	}
	button {
		font-size: 18px;
		padding: 8px;
	}
</style>
