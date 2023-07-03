<script lang="ts">
	import 'iconify-icon';
	import Title from '../components/Title.svelte';

	// Superbase stuff
	import { onMount } from 'svelte';
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
<slot />

<style>
	:global(html) {
		border-top: 20px solid hsl(11.87deg 93.81% 61.96%);
	}
	:global(body) {
		margin: 0;
	}
	:global(p) {
		font-family: Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}
	:global(h1) {
		font-family: Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}
	:global(.container) {
		padding: 2rem;
	}
	:global(.svelte-colour) {
		color: hsl(11.87deg 93.81% 61.96%);
	}
</style>
