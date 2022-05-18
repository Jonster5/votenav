<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "@pages/Home.svelte";

  import { CurrentPage } from "@utils/ui";
  import { Writable, writable } from "svelte/store";
  import Nickb from "@pages/Nickb.svelte";
  import Josh from "@pages/Josh.svelte";
  import Logan from "@pages/Logan.svelte";
  import Chuckie from "@pages/Chuckie.svelte";
  import Arnav from "@pages/Arnav.svelte";

  const currentPage: Writable<CurrentPage> = writable(CurrentPage.Home);
</script>

<Router>
  <Route path="/">
    <Home />
  </Route>

  <Route path="nickb">
    <Nickb />
  </Route>

  <Route path="josh">
    <Josh />
  </Route>

  <Route path="logan">
    <Logan />
  </Route>

  <Route path="chuckie">
    <Chuckie />
  </Route>

  <Route path="arnav">
    <Arnav />
  </Route>
</Router>
