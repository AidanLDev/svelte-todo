<script>
	import { onMount } from 'svelte';
	import Title from '../components/Title.svelte';
	import GhLink from '../components/GHLink.svelte';
	import TodoContainer from '../layout/TODOContainer.svelte';
	import { supabaseClient } from '$lib/supabase';
	import { invalidateAll } from '$app/navigation';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll;
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Title text="What TODO, " />
<div class="container">
	<GhLink />
	<TodoContainer />
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
