<script lang="ts">
	import Tooltip from '../Tooltip.svelte';
	import { handleKeyDown } from '../../lib/handleKeyDown';
	import CardIcon from './CardIcon.svelte';
	import type Snackbar from '@smui/snackbar';
	import type { todoItem } from '../../interfaces/todoInterface';
	import { supabaseClient } from '$lib/supabase';

	export let todo: todoItem;
	export let id: number;
	export let index: number;
	export let todos: todoItem[];
	export let actionedSnackbar: Snackbar;
	export let userId: string | undefined = undefined;
	let editText = false;

	$: console.log(todos);

	const toggleEdit = () => {
		editText = !editText;
		todos[id] = todo;

		todos = todos;
	};
	const actionTodo = async (toDoIndex: number) => {
		const { data, error } = await supabaseClient
			.from('Todos')
			.update({ completed_at: new Date() })
			.eq('id', id);

		if (error) {
			console.error('Action todo failed: ', error);
		} else {
			actionedSnackbar.open();
			if (!id) {
				todos.splice(toDoIndex, 1);
			} else {
				const arrayIndexToRemove = todos.findIndex((item) => item.id === id);
				todos.splice(arrayIndexToRemove, 1);
			}
			todos = todos;
		}
	};

	const deleteTodo = async (todoIndex: number) => {
		const { data, error } = await supabaseClient.from('Todos').delete().eq('id', id).select();

		// If there's no ID it must be from someone non authenticated
		if (!id) {
			todos.splice(todoIndex, 1);
		} else if (error === null) {
			//	No error and there's an ID
			const arrayIndexToRemove = todos.findIndex((item) => item.id === id);
			todos.splice(arrayIndexToRemove, 1);
		}
		todos = todos;
	};
</script>

<div class="card">
	<Tooltip title="Complete TODO">
		<CardIcon
			className="action-todo"
			icon="material-symbols:circle-outline"
			action={() => actionTodo(id)}
		/>
	</Tooltip>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	{#if !editText}
		<Tooltip title="Edit TODO">
			<p on:click={toggleEdit} on:keydown={(e) => handleKeyDown(e, toggleEdit)} tabindex={0}>
				{todo.todo}
			</p>
		</Tooltip>
	{:else}
		<input bind:value={todo.todo} />
		<Tooltip title="Confirm edit">
			<CardIcon action={toggleEdit} icon="mdi:tick" className="edit-todo" />
		</Tooltip>
	{/if}
	<CardIcon action={() => deleteTodo(id)} className="delete-todo" icon="material-symbols:delete" />
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
