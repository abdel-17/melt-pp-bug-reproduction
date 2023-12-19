<script>
	import { createToggle, melt } from "@melt-ui/svelte";

	let pressed = $state(false);
	let disabled = $state(false);

	const {
		elements: { root },
	} = createToggle({
		defaultPressed: pressed,
		disabled,
	});
</script>

<button use:melt={$root}>Toggle</button>
