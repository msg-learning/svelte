<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import { MaterialApp } from "svelte-materialify";

	import Counter from "./routes/Counter";
	import Home from "./routes/Home";
	import Names from "./routes/Names";

	import Nav from "./components/Nav.svelte";

	export let url = "";
</script>

<MaterialApp theme="light">
	<Router {url}>
		<Nav />
		<Route path="counter"><Counter /></Route>
		<Route path="names"><Names /></Route>
		<Route path="/"><Home name="World" /></Route>
	</Router>
</MaterialApp>
