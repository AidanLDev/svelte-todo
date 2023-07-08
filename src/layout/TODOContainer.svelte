<script lang="ts">
	import { handleKeyDown } from '$lib/handleKeyDown';
	import { supabaseClient } from '$lib/supabase';
	import TodoCards from '../components/card/TODOCards.svelte';
	import { onMount } from 'svelte';
	import type { PostgrestSingleResponse } from '@supabase/supabase-js';

	interface todoItem {
		todo: string;
		completed_at?: string;
		created_at?: string;
		edited_at?: string;
		id?: number;
		user_id?: string;
	}

	let todoValue: string;
	let todos: todoItem[] = [];

	function isPostgrestSuccess<T>(response: PostgrestSingleResponse<T>) {
		return response.error === null;
	}

	onMount(async () => {
		const response = await supabaseClient.from('Todos').select().eq('user_id', userId);
		console.log('in onMount(): ', response);

		if (isPostgrestSuccess(response) && response.data !== null) {
			todos = response.data;
			console.log('Is successful');
			todos = todos;
		}
	});

	export let userId: string | undefined = undefined;
	const handleSubmit = async () => {
		const { data, error } = await supabaseClient
			.from('Todos')
			.insert([{ todo: todoValue, user_id: userId }])
			.select();

		console.log('from Supabase Todos insert: ', { data, error });
		if (todos !== null) {
			todos.push({ todo: todoValue });
			todos = todos;
			todoValue = '';
		}
	};
</script>

<div class="todo-container">
	<div class="input-container">
		<input
			type="text"
			id="todo-input"
			placeholder="TODO name"
			bind:value={todoValue}
			on:keydown={(e) => handleKeyDown(e, handleSubmit)}
		/>
		<button on:click={handleSubmit}>Add TODO</button>
	</div>
	<TodoCards {todos} {userId} />
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
