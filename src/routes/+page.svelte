<script lang="ts">
	import Title from '../components/Title.svelte';
	import TodoContainer from '../layout/TODOContainer.svelte';

	// Auth stuff
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Title text="What TODO, " />
<div class="container">
	<TodoContainer />
</div>

<style>
	.container {
		padding: 2rem;
	}
</style>
