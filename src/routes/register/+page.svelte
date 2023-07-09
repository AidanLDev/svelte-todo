<script lang="ts">
	import Nav from '../../components/nav/Nav.svelte';
	import type { PageData } from './$types';
	import { emailRegex } from '$lib/validationHelper';
	import EmailPassword from '../../components/EmailPassword.svelte';

	export let data: PageData;
	let email: string = '';
	let password: string = '';
	$: disabled = !emailRegex.test(email) || password.length < 3;
	let buttonLabel: string = 'Register';
</script>

<Nav {data} />
<main>
	<form action="?/register" method="POST" class="auth-form">
		<EmailPassword bind:email bind:password bind:disabled {buttonLabel} />
	</form>
</main>
