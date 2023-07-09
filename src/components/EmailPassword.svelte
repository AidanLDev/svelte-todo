<script lang="ts">
	export let email: string = '';
	export let password: string = '';
	export let disabled: boolean;
	export let buttonLabel: string;
</script>

<div class="label-input">
	<label for="email"> Email </label>
	<input type="text" name="email" bind:value={email} />
</div>
<div class="label-input">
	<label for="password"> Password </label>
	<input type="password" name="password" bind:value={password} />
</div>
<button class="btn btn-primary" {disabled}>{buttonLabel}</button>

<style>
	.label-input {
		display: flex;
	}
	.label-input label {
		width: 70px;
	}
	.label-input input {
		width: 200px;
	}
</style>
