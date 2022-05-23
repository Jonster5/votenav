<script lang="ts">
    import { deviceType } from '@utils/ui';

    import { link } from 'svelte-spa-router';

    const type = deviceType();
</script>

{#if type === 'desktop'}
    <nav>
        <a href="/" class="home" use:link>Home</a>
        <a href="/arnav" use:link>Arnav Deshpande</a>
        <a href="/chuckie" use:link>Chuckie Call</a>
        <a href="/josh" use:link>Josh Kuchinskas</a>
        <a href="/peter" use:link>Peter Bryan</a>
        <a href="/logan" use:link>Logan Lai</a>
        <a href="/nickb" use:link>Nick Bauer</a>
        <a href="/nickh" use:link>Nick Houghton</a>
    </nav>
{/if}

<style lang="scss">
    nav {
        display: flex;

        width: 100%;
        height: 10%;

        margin: 0;
        padding: 0;

        justify-content: space-evenly;
        align-items: center;

        backdrop-filter: blur(2px);

        a {
            text-decoration: underline;
            color: white;

            &.home {
                background: rgba(255, 255, 255, 0.3);
            }

            height: min-content;
            padding: 5px;
            border-radius: 1vh;

            font-family: 'Sogue UI', Tahoma, Geneva, Verdana, sans-serif;

            &:hover {
                color: rgb(155, 227, 255);
            }
        }
    }
</style>
