<script lang="ts">
	import { Checkbox } from "svelte-materialify";

	import Marmotte from "./components/Marmotte.svelte";
	import Selector from "./components/Selector.svelte";

	export let name: string;
	let marmotteSRC: string[];

	let outlined: boolean = false;
</script>

<main>
	<h1>Hello {name.toUpperCase()}!</h1>
	<Selector bind:value={marmotteSRC} />
	<Checkbox bind:checked={outlined}>Outline marmottes</Checkbox>
	{JSON.stringify(outlined)}
	{#if marmotteSRC}
		<Marmotte {outlined} src={marmotteSRC[0]} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
