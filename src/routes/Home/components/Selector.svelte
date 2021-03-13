<script lang="ts">
    import { Select } from "svelte-materialify";

    const marmottes = [
        "images/marmotte.jpg",
        "images/marmotte2.jpg",
        "images/marmotte3.jpg",
        "images/marmotte4.jpg",
    ];
    export let value = [marmottes[0]];
</script>

<Select bind:value items={marmottes.map((m) => ({ name: m, value: m }))} />
<p>{JSON.stringify(value)}</p>
