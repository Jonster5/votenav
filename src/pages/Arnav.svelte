<script lang="ts">
    import HomeButton from '@components/HomeButton.svelte';
    import { deviceType } from '@utils/ui';

    const type = deviceType();
</script>

{#if type === 'desktop'}
    <main class="d">
        <h2 class="d">Arnav Deshpande</h2>
        <h6 class="d">Class of 2024</h6>
        <h4 class="d">Treasurer</h4>
        <div>
            <img class="d" src="/images/arnav.jpg" alt="Arnav Deshpande" />
            <article>
                <h3>About Me</h3>
                <p>
                    Hi, I’m Arnav, and I’m a sophomore. I’m running for
                    treasurer for the Class of 2024 because I want to bring
                    much-needed change to Student Government to make FHS a
                    better place for everyone, and allow everyone to have their
                    voices heard.
                </p>
            </article>
        </div>
    </main>
{:else}
    <main class="m">
        <HomeButton />

        <h2 class="m">Arnav Deshpande</h2>
        <h6 class="m">Class of 2024</h6>
        <h4 class="m">Treasurer</h4>
        <img class="m" src="/images/arnav.jpg" alt="Arnav Deshpande" />
        <article>
            <h3>About Me</h3>
            <p>
                Hi, I’m Arnav, and I’m a sophomore. I’m running for treasurer
                for the Class of 2024 because I want to bring much-needed change
                to Student Government to make FHS a better place for everyone,
                and allow everyone to have their voices heard.
            </p>
        </article>
    </main>
{/if}

<style lang="scss">
    main {
        display: flex;

        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        flex-direction: column;

        justify-content: flex-start;
        align-items: center;

        backdrop-filter: blur(5px);

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        overflow-y: scroll;

        &.m {
            gap: 1vh;

            img {
                width: 70%;
                border-radius: 10px;
            }

            article {
                display: flex;

                width: 70%;

                box-sizing: border-box;
                padding: 1vh;

                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                background: rgb(0, 0, 0, 0.4);
                border-radius: 10px;

                h3 {
                    color: whitesmoke;
                    margin: 0;
                }

                p {
                    color: rgb(217, 217, 217);
                }
            }
        }

        div {
            display: flex;

            width: 90%;
            height: 60%;

            margin: 0;
            padding: 0;

            justify-content: space-evenly;
            align-items: center;

            img {
                height: 100%;
                border-radius: 10px;
            }

            article {
                width: 50%;

                h3 {
                    color: whitesmoke;
                }

                p {
                    color: rgb(217, 217, 217);
                }
            }
        }

        h2 {
            color: white;
            &.d {
                font-size: 3vw;
                margin: 2vh;
            }
            &.m {
                font-size: 3vh;
                margin: 2vw;
            }
        }

        h6 {
            color: darkgrey;
            &.d {
                font-size: 1vw;
            }
            &.m {
                font-size: 1.5vh;
            }
            margin: 0;
        }

        h4 {
            color: springgreen;
            &.d {
                font-size: 2vw;
                margin: 3vh;
            }
            &.m {
                font-size: 2vh;
                margin: 3vw;
            }
        }
    }
</style>
