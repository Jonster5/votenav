<script lang="ts">
  import HomeButton from "@components/HomeButton.svelte";
  import { deviceType } from "@utils/ui";

  const type = deviceType();
</script>

{#if type === "desktop"}
  <main class="d">
    <h2 class="d">Peter Bryan</h2>
    <h6 class="d">Class of 2024</h6>
    <h4 class="d">Vice President</h4>
    <div>
      <img class="d" src="/images/peter.jpeg" alt="Peter Bryan" />
      <article>
        <h3>About Me</h3>
        <p>
          Hey everyone, I’m Peter Bryan, and I’m running for Vice President in
          this years sophomore student government election. As Vice President, I
          want to give students a voice, and enable communication between
          students and staff, and encourage creativity and more choice for
          students. If I am elected, e-hall pass will be the first thing to go.
        </p>
      </article>
    </div>
  </main>
{:else}
  <main class="m">
    <HomeButton />

    <h2 class="m">Peter Bryan</h2>
    <h6 class="m">Class of 2024</h6>
    <h4 class="m">Representative</h4>
    <img class="m" src="/images/peter.jpeg" alt="Peter Bryan" />
    <article>
      <h3>About Me</h3>
      <p>
        Hey everyone, I’m Peter Bryan, and I’m running for Vice President in
        this years sophomore student government election. As Vice President, I
        want to give students a voice, and enable communication between students
        and staff, and encourage creativity and more choice for students. If I
        am elected, e-hall pass will be the first thing to go.
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

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

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
