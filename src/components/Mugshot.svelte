<script lang="ts">
    import { deviceType } from '@utils/ui';

    import { link } from 'svelte-spa-router';

    export let name: string;
    export let image: string;
    export let href: string;

    const type = deviceType();
</script>

{#if type === 'desktop'}
    <a {href} class="d" use:link>
        <img src={image} alt={name} />

        <h3 class="d">{name}</h3>
    </a>
{:else}
    <a {href} class="m" use:link>
        <img src={image} alt={name} />

        <h3 class="m">{name}</h3>
    </a>
{/if}

<style lang="scss">
    a {
        display: flex;

        &.d {
            width: 10vw;
            height: 16vw;
        }

        &.m {
            width: 15vh;
            height: 20vh;
        }

        padding: 2vh;
        margin: 0;
        box-sizing: border-box;

        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        border-radius: 1vh;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);

        transition-duration: 100ms;

        text-decoration: none;

        &:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: translateY(-1vh);
            cursor: pointer;
        }

        img {
            width: 90%;
            aspect-ratio: 3 / 4;

            border-radius: 1vh;
        }

        h3 {
            &.d {
                font-size: 1.5vw;
            }

            &.m {
                font-size: 1.5vh;
            }

            color: white;

            text-align: center;

            margin: 0;

            font-family: 'Sogue UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    }
</style>
