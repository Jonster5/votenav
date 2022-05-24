<script lang="ts">
  import portraits from "@assets/images.json";
  import Mugshot from "@components/Mugshot.svelte";
  import { deviceType } from "@utils/ui";

  const type = deviceType();
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

{#if type === "desktop"}
  <main>
    <h1 class="d">Welcome to the <strong>Nav Party</strong></h1>
    <h3>
      Vote for Officers <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSff3qzQhjERrQHqa3X_7lu1sSHAoebfoeuuM5CRtqMKzG8HRw/viewform?hr_submission=ChgIpYz-oAgSEAiIyIOXmA4SBwiIjsXo9AQQAA&authuser=0"
        target="_blank"
      >
        here
      </a>
    </h3>
    <div class="d">
      {#each portraits as p}
        <Mugshot {...p} />
      {/each}
    </div>
  </main>
{:else}
  <main>
    <h1 class="m">Welcome to the <br /><strong>Nav Party</strong></h1>
    <h3>
      Vote for Officers <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSff3qzQhjERrQHqa3X_7lu1sSHAoebfoeuuM5CRtqMKzG8HRw/viewform?hr_submission=ChgIpYz-oAgSEAiIyIOXmA4SBwiIjsXo9AQQAA&authuser=0"
        target="_blank"
      >
        here
      </a>
    </h3>
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

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    overflow-y: scroll;

    h3 {
      color: white;

      a {
        color: lightblue;
      }
    }

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
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      }
    }

    h1.m {
      font-size: 4vh;

      color: white;
      text-align: center;

      strong {
        color: rgb(155, 227, 255);
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      }
    }
  }
</style>
