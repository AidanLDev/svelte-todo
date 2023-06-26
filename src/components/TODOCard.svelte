<script lang="ts">
	export let toDos: string[];
	$: console.log(toDos);
</script>

<div>
	{toDos}
</div>
