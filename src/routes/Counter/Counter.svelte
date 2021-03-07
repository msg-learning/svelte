<script lang="ts">
    export let count = 0;

    function increase() {
        count++;
    }

    function decrease() {
        count--;
    }
</script>

<main>
    <h1 data-testid="count">{count}</h1>
    <div class="actions">
        <button data-testid="increase" on:click={increase}>+</button>
        <button data-testid="decrease" on:click={decrease}>-</button>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
        max-width: 240px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    button {
        width: 32px;
        height: 32px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>
