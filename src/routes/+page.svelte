<script>
	import { onMount } from 'svelte';
	import AppContainer from '../layout/AppContainer.svelte';
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

<Title />
<AppContainer>
	<GhLink />
	<TodoContainer />
</AppContainer>
