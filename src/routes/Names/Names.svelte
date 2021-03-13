<script lang="ts">
    import { Button, TextField, Row } from "svelte-materialify";
    let names = [];
    let name = "";

    function onsubmit(event) {
        event.preventDefault();
        names = [...names, name];

        name = "";
    }

    function deleteName(index) {
        names = names.filter((v, i) => i !== index);
    }
</script>

<form on:submit={onsubmit}>
    <Row>
        <TextField
            bind:value={name}
            name="name"
            id="name"
            outlined
            dense
            rounded
            placeholder="Enter a name">Name</TextField
        >
        <Button rounded type="submit">Submit</Button>
    </Row>
</form>

<ul>
    {#each names as name, index}
        <li>
            {name}
            <button
                class="delete"
                type="button"
                on:click={() => deleteName(index)}>X</button
            >
        </li>
    {/each}
</ul>

<style>
    .delete {
        color: red;
        background-color: transparent;
        border: none;
        height: 24px;
        width: 24px;
        padding: 0;
        line-height: 1;
    }
</style>
