<script lang="ts">
    export let src: string;

    export let outlined: boolean = false;
</script>

<div class:outlined>
    <img data-testid="image" {src} alt="A cute marmotte" />
</div>

<style>
    img {
        max-width: 240px;
    }

    .outlined {
        padding: 12px;
        border: 1px solid black;
    }
</style>
