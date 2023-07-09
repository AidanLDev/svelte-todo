<script lang="ts">
	export let email: string = '';
	export let password: string = '';
	export let disabled: boolean;
	export let buttonLabel: string;
</script>

<label for="email"> Email </label>
<input type="text" name="email" bind:value={email} />
<label for="password"> Password </label>
<input type="password" name="password" bind:value={password} />
<button class="btn btn-primary" {disabled}>{buttonLabel}</button>

<style>
</style>
