<script lang="ts">
	// Getting page details
	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;

	import type { PageData } from '../../routes/$types';

	export let data: PageData;
</script>

<nav>
	<ul>
		<!-- If not logged in, they will see this -->
		{#if !data?.session}
			<a class={`${path === '/' ? 'active' : ''}`} href="/">Home</a>
			<a class={`${path === '/register' ? 'active' : ''}`} href="register">Register</a>
			<a class={`${path === '/login' ? 'active' : ''}`} href="login">Login</a>
		{:else}
			<form action="/logout" method="POST">
				<button type="submit">Logout</button>
			</form>
		{/if}
	</ul>
</nav>

<style>
	nav {
		background-color: hsl(11.87deg 93.81% 61.96%);
	}
	ul {
		display: flex;
		justify-content: center;
		gap: 22px;
		font-size: 18px;

		/* Setting 116px margin-left to align with the title because of the GH link size */
		margin: 0 0 18px 116px;
		padding: 0 0 18px 0;
	}
	a {
		text-decoration: none;
		color: antiquewhite;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		font-weight: 600;
		text-decoration: underline;
	}
</style>
