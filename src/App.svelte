<script lang="ts">
	import { Router, Route } from "svelte-routing";

	import Counter from "./routes/Counter";
	import Home from "./routes/Home";

	import Nav from "./components/Nav.svelte";

	export let url = "";
</script>

<Router {url}>
	<Nav />
	<Route path="counter"><Counter /></Route>
	<Route path="/"><Home name="World" /></Route>
</Router>
