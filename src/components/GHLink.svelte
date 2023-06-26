<script lang="ts">
	const gitHubLogo: string = '/GithubLogo.png';
</script>

<div>
	<a href="https://github.com/AidanLDev/svelte-todo" target="_blank">
		<img src={gitHubLogo} alt="GitHub logo" height="100px" width="100px" />
		<p>View source code on GitHub</p>
	</a>
</div>

<style>
	div {
		width: 130px;
	}
	a {
		text-decoration: none;
		color: inherit;
		outline: 0;
		cursor: pointer;
	}
	p {
		font-size: 20px;
		text-decoration: none;
	}
	p:hover {
		text-decoration: underline;
	}
</style>
