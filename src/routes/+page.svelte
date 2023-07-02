<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<div class="container index-container">
		<p>Login or Register and to get cracking and create some tasks!</p>
		<p>
			Brought to you by the power of <span class="svelte-colour">Svelte</span> and
			<span class="supabase-colour">Supabase</span>
		</p>
		<div>
			<img src="/svelte-logo.png" alt="Supabase logo" height="100px" width="100px" />
			<img src="/supabase-logo.png" alt="Supabase logo" height="100px" width="100px" />
		</div>
	</div>
</main>

<style>
	p {
		font-size: 18px;
	}
	.supabase-colour {
		color: #3ecf8e;
	}
	.index-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
