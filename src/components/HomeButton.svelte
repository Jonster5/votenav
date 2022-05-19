<script lang="ts">
    import { link } from 'svelte-spa-router';
</script>

<a href="/" use:link>Home</a>

<style lang="scss">
    a {
        position: fixed;

        top: 5px;
        left: 5px;

        padding: 5px;

        background: rgba(255, 255, 255, 0.3);
        border-radius: 1vh;

        color: white;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2vh;
    }
</style>
