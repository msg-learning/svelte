<script lang="ts">
    export let src: string;
</script>

<img data-testid="image" {src} alt="A cute marmotte" />

<style>
    img {
        max-width: 240px;
    }
</style>
