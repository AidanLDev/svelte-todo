<script lang="ts">
</script>

<nav>
	<ul>
		<!-- If not logged in, they will see this -->
		<a href="register">Login/Register</a>
		<a href="todo">TODO</a>
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
</style>
