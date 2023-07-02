<script lang="ts">
	// Getting page details
	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;
</script>

<nav>
	<ul>
		<!-- If not logged in, they will see this -->
		<a class={`${path === '/register' || path === '/login' ? 'active' : ''}`} href="register"
			>Login/Register</a
		>
		<a class={`${path === '/todo' ? 'active' : ''}`} href="todo">TODO</a>
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
