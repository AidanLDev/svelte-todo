<script lang="ts">
	import { handleKeyDown } from '../../lib/handleKeyDown';

	export let action: () => void = () => console.log('Editing TODO');
	export let icon: string;
	export let className: string;
</script>

<iconify-icon
	class={`icon ${className}`}
	{icon}
	on:click={action}
	aria-roledescription="Submit changes"
	role="button"
	tabindex="0"
	on:keydown={(e) => handleKeyDown(e, () => action())}
	height="30px"
	width="30px"
/>

<style>
	.icon {
		cursor: pointer;
	}
	.edit-todo {
		color: green;
		height: 30px;
		width: 30px;
	}
	.action-todo {
		padding: 0 12px;
	}
	.delete-todo {
		margin-left: auto;
		padding: 0 12px;
	}
</style>
