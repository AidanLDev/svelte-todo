<script lang="ts">
	import Tooltip from '../Tooltip.svelte';
	import { handleKeyDown } from '../../lib/handleKeyDown';
	import CardIcon from './CardIcon.svelte';
	import type Snackbar from '@smui/snackbar';

	export let todo: string;
	export let i: number;
	export let todos: string[];
	export let actionedSnackbar: Snackbar;
	let editText = false;

	$: console.log(todos);

	const toggleEdit = () => {
		editText = !editText;
		todos[i] = todo;

		todos = todos;
	};
	const actionTodo = (toDoIndex: number) => {
		actionedSnackbar.open();
		todos.splice(toDoIndex, 1);
		todos = todos;
	};

	const deleteTodo = (todoIndex: number) => {
		todos.splice(todoIndex, 1);
		todos = todos;
	};
</script>

<div class="card">
	<Tooltip title="Complete TODO">
		<CardIcon
			className="action-todo"
			icon="material-symbols:circle-outline"
			action={() => actionTodo(i)}
		/>
	</Tooltip>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	{#if !editText}
		<p on:click={toggleEdit} on:keydown={(e) => handleKeyDown(e, toggleEdit)} tabindex={0}>
			{todo}
		</p>
	{:else}
		<input bind:value={todo} />
		<Tooltip title="Edit TODO">
			<CardIcon action={toggleEdit} icon="mdi:tick" className="edit-todo" />
		</Tooltip>
	{/if}
	<CardIcon action={() => deleteTodo(i)} className="delete-todo" icon="material-symbols:delete" />
</div>

<style>
	.card {
		width: 60%;
		background-color: antiquewhite;
		min-height: 32px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		margin: 24px 0;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	p {
		padding: 12px;
	}
	input {
		margin: 30px 12px;
		font-size: 18px;
		width: 100%;
	}
</style>
