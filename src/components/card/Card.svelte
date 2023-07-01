<script lang="ts">
	import Tooltip from '../Tooltip.svelte';
	import { handleKeyDown } from '../../lib/handleKeyDown';
	import CardIcon from './CardIcon.svelte';

	export let todo: string;
	export let i: number;
	export let toDos: string[];
	let editText = false;

	$: console.log(toDos);

	const toggleEdit = () => {
		editText = !editText;
		toDos[i] = todo;

		toDos = toDos;
	};
	const actionTodo = (toDoIndex: number) => {
		toDos.splice(toDoIndex, 1);
		toDos = toDos;
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
	<!-- This <p> is interactive, as we want to be able to edit the text when clicked or when we hit Enter -->
	<!-- Sorry a11y -->
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
	}
</style>
