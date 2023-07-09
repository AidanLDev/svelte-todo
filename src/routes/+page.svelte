<script lang="ts">
	import TodoContainer from '../layout/TODOContainer.svelte';
	import Nav from '../components/nav/Nav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Nav {data} />
<main>
	{#if !data?.session}
		<div class="container index-container">
			<p>Login or Register and to get save your tasks! Or just play around without saving</p>
			<p>
				Once registered, check your email and <b>confirm</b> your signup.
				<i>Sometimes you need to refresh the page after confirming.</i>
			</p>
		</div>
		<TodoContainer />
	{:else}
		<TodoContainer userId={data.session?.user.id} />
	{/if}
</main>

<style>
	p {
		font-size: 18px;
	}
	.supabase-colour {
		color: #3ecf8e;
	}
	.index-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
