<script lang="ts">
import { Link } from "svelte-navigator";

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
<header>
  <h1>Welcome to the Nav Party</h1>
  <nav>
    <Link class="link" to="/nickb">Nick Bauer</Link>
    <Link class="link" to="/josh">Joshua Kuchinskas</Link>
    <Link class="link" to="/logan">Logan Lai</Link>
    <Link class="link" to="/chuckie">Charles Call</Link>
    <Link class="link" to="/arnav">Arnav Deshpande</Link>
  </nav>
</header>

  
</main>

<style lang="scss">
  
  main {
    display: flex;

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    flex-direction: column;
    align-items: center;

    background: url("/images/background.svg") no-repeat center center fixed;
    background-size: cover;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    
    header {
    display: flex;

    width: 100%;
    height: 25%;

    margin: 0;
    padding: 0;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 4vw;

      color: white;
    }

    nav {
      display: flex;

      width:60%;

      margin: 0;
      padding: 0;

      justify-content: space-evenly;

      .link {
        text-decoration: none;
        color: white;
      }

    }
  }
    
  }
</style>
