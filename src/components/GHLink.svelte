<script lang="ts">
	const gitHubLogo: string = '/GithubLogo.png';
</script>

<a href="https://github.com/AidanLDev/svelte-todo" target="_blank">
	<img src={gitHubLogo} alt="GitHub logo" height="100px" width="100px" />
	<p>View source code on GitHub</p>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
		outline: 0;
		cursor: pointer;
		display: flex;
		gap: 12px;
	}
	p {
		font-size: 20px;
		text-decoration: none;
	}
	p:hover {
		text-decoration: underline;
	}
</style>
