<script lang="ts">
	import Title from '../../components/Title.svelte';
</script>

<main>
	<Title text="Register" />
	<form action="?/register" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button class="btn btn-primary">Register</button>
	</form>
</main>

<style>
	.auth-form {
	}
</style>
