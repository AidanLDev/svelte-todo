<script lang="ts">
	import 'iconify-icon';
</script>

<div class="container">
	<slot />
</div>

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
	.container {
		padding: 2rem;
	}
</style>
