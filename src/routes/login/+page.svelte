<script lang="ts">
	import Nav from '../../components/nav/Nav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Nav {data} />
<main>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
</main>

<style>
	.auth-form {
	}
</style>
