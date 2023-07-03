<script lang="ts">
	import TodoContainer from '../layout/TODOContainer.svelte';
	import Nav from '../components/nav/Nav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log('data: ', data);
</script>

<Nav {data} />
<main>
	{#if !data?.session}
		<div class="container index-container">
			<p>Login or Register and to get cracking and create some tasks!</p>
			<p>Once registered, check your email and <b>confirm</b> your signup</p>
			<p>
				Brought to you by the power of <span class="svelte-colour">Svelte</span> and
				<span class="supabase-colour">Supabase</span>
			</p>
			<div>
				<img src="/svelte-logo.png" alt="Supabase logo" height="100px" width="100px" />
				<img src="/supabase-logo.png" alt="Supabase logo" height="100px" width="100px" />
			</div>
		</div>
	{:else}
		<TodoContainer />
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
