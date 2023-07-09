<script lang="ts">
	const gitHubLogo: string = '/GithubLogo.png';
</script>

<a href="https://github.com/AidanLDev/svelte-todo" target="_blank">
	<img src={gitHubLogo} alt="GitHub logo" height="80px" width="80px" />
	<!-- Unsure if I want this text, the icon is kind of self explanatory -->
	<!-- <p>View source code on GitHub</p> -->
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
		outline: 0;
		cursor: pointer;
		display: flex;
		gap: 12px;
		padding: 0 12px;
	}
</style>
