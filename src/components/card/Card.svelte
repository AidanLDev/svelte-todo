<script lang="ts">
	import Tooltip from '../Tooltip.svelte';
	import { handleKeyDown } from '../../lib/handleKeyDown';
	import CardIcon from './CardIcon.svelte';
	import type { todoItem } from '../../interfaces/todoInterface';
	import { supabaseClient } from '$lib/supabase';
	import { clickOutside } from '$lib/clickOutside';

	export let todo: todoItem;
	export let id: number;
	export let todos: todoItem[];
	export let userId: string | undefined = undefined;

	let removing = false;
	let editText = false;
	let deleting = false;

	const toggleEdit = () => {
		editText = !editText;
	};
	const actionTodo = async (toDoIndex: number) => {
		const { data, error } = await supabaseClient
			.from('Todos')
			.update({ completed_at: new Date() })
			.eq('id', id);

		if (error) {
			console.error('Action todo failed: ', error);
		} else {
			removing = true;
			if (!id) {
				setTimeout(() => {
					todos.splice(toDoIndex, 1);
					todos = todos;
					removing = false;
				}, 2000);
			} else {
				const arrayIndexToRemove = todos.findIndex((item) => item.id === id);
				setTimeout(() => {
					todos.splice(arrayIndexToRemove, 1);
					todos = todos;
					removing = false;
				}, 2000);
			}
		}
	};

	const deleteTodo = async (todoIndex: number) => {
		const { data, error } = await supabaseClient.from('Todos').delete().eq('id', id).select();

		if (error) {
			console.error('Deleting toto failed: ', error);
		}

		deleting = true;

		// If there's no ID it must be from someone non authenticated
		if (!id) {
			setTimeout(() => {
				todos.splice(todoIndex, 1);
				deleting = false;
			}, 2000)
		} else if (error === null) {
			//	No error and there's an ID
			const arrayIndexToRemove = todos.findIndex((item) => item.id === id);
			setTimeout(() => {
				todos.splice(arrayIndexToRemove, 1);
			}, 2000)
		}
		todos = todos;
	};

	const confirmEdit = async () => {
		editText = !editText;
		if (!userId) {
			todos[id] = todo;
		} else {
			await supabaseClient
				.from('Todos')
				.update({ edited_at: new Date(), todo: todo.todo })
				.eq('id', id);

			todo.todo = todo.todo; //	Updating the local state
		}

		todos = todos;
	};
</script>

<div class={`card ${removing ? 'removing' : ''} ${deleting ? 'deleting' : ''}`}>
	<Tooltip title="Complete TODO">
		<CardIcon
			className="action-todo"
			icon={removing ? 'material-symbols:check-circle' : 'material-symbols:circle-outline'}
			action={() => actionTodo(id)}
		/>
	</Tooltip>
	{#if !editText}
		<Tooltip title="Edit TODO">
			<p on:click={toggleEdit} on:keydown={(e) => handleKeyDown(e, toggleEdit)} tabindex={0}>
				{todo.todo}
			</p>
		</Tooltip>
	{:else}
		<input
			on:outclick={toggleEdit}
			bind:value={todo.todo}
			on:keydown={todo.todo.length > 1000
				? () => console.log('todo too big')
				: (e) => handleKeyDown(e, confirmEdit)}
			use:clickOutside
		/>
		<Tooltip title={todo.todo.length > 1000 ? 'TODO too big' : 'Confirm edit'}>
			<button disabled={todo.todo.length > 1000} on:click={confirmEdit}
				><CardIcon icon="mdi:tick" className="edit-todo" /></button
			>
		</Tooltip>
	{/if}
	<CardIcon action={() => deleteTodo(id)} className="delete-todo" icon="material-symbols:delete" />
</div>

<style>
	.card {
		width: 60%;
		background-color: #f96743;
		min-height: 32px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		margin: 24px 0;
		font-size: 18px;
		display: flex;
		align-items: center;
	}
	.removing {
		animation: fly-out 2s forwards;
	}
	.deleting {
		animation: fly-down 2s forwards;
	}
	p {
		padding: 12px;
		color: #fff;
	}
	input {
		margin: 30px 12px;
		font-size: 18px;
		width: 100%;
	}
	button {
		all: unset;
	}
	@keyframes fly-out {
		from {
			transform: translate(0, 0);
			opacity: 1;
		}
		to {
			transform: translate(0, -200%);
			opacity: 0;
		}
	}

	@keyframes fly-down {
		from {
			transform: translate(0, 0);
			opacity: 1;
		}
		to {
			transform: translate(0, 200%);
			opacity: 0;
		}
	}

	@media (max-width: 500px) {
		.card {
			width: 100%;
		}
	}
</style>
