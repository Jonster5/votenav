<script lang="ts">
    import portraits from '@assets/images.json';
    import Mugshot from '@components/Mugshot.svelte';
    import { deviceType } from '@utils/ui';

    const type = deviceType();
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

{#if type === 'desktop'}
    <main>
        <h1 class="d">Welcome to the <strong>Nav Party</strong></h1>
        <div class="d">
            {#each portraits as p}
                <Mugshot {...p} />
            {/each}
        </div>
    </main>
{:else}
    <main>
        <h1 class="m">Welcome to the <br /><strong>Nav Party</strong></h1>
        <div class="m">
            {#each portraits as p}
                <Mugshot {...p} />
            {/each}
        </div>
    </main>
{/if}

<style lang="scss">
    main {
        display: flex;
        position: absolute;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        flex-direction: column;
        align-items: center;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        overflow-y: scroll;


        div {
            display: flex;

            width: 100%;
            height: 100%;

            margin: 0;
            padding: 0;

            &.d {
                gap: 1vw;
            }

            &.m {
                gap: 1vh;
            }

            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            align-content: flex-start;
        }

        h1.d {
            font-size: 4vw;

            color: white;

            strong {
                color: rgb(155, 227, 255);
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                    serif;
            }
        }

        h1.m {
            font-size: 4vh;

            color: white;
            text-align: center;

            strong {
                color: rgb(155, 227, 255);
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                    serif;
            }
        }
    }
</style>
