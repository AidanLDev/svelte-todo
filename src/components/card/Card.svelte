<script lang="ts">
	export let todo: string;
</script>

<div class="card">
	<p>{todo}</p>
</div>

<style>
	.card {
		width: 60%;
		background-color: antiquewhite;
		min-height: 32px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		margin: 24px 0;
	}
	p {
		padding: 12px;
		font-size: 18px;
	}
</style>
