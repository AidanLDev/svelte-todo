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

	:global(button) {
		background-color: #f96743;
		border: 1px solid #e6e6e6;
		border-radius: 8px;
		box-sizing: border-box;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
		font-size: 14px;
		font-weight: 600;
		line-height: 14px;
		margin: 0;
		outline: none;
		padding: 13px 23px;
		position: relative;
		text-align: center;
		text-decoration: none;
		touch-action: manipulation;
		transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
		user-select: none;
		-webkit-user-select: none;
		width: auto;
	}

	:global(button):focus-visible {
		box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
		transition: box-shadow 0.2s;
	}

	:global(button):active {
		background-color: #f96743;
		border-color: #000000;
		transform: scale(0.96);
	}

	:global(button):disabled {
		border-color: #dddddd;
		background-color: #ffb09c;
		color: #ebebeb;
		cursor: not-allowed;
		opacity: 1;
	}
</style>
