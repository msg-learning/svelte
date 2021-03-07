<script lang="ts">
    const marmottes = [
        "images/marmotte.jpg",
        "images/marmotte2.jpg",
        "images/marmotte3.jpg",
        "images/marmotte4.jpg",
    ];

    export let selected: string;
</script>

<select bind:value={selected}>
    {#each marmottes as marmotte}
        <option value={marmotte}>{marmotte}</option>
    {/each}
</select>

<p>{selected}</p>
