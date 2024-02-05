<script lang="ts">
  import Router from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Home from "./views/Home.svelte";
  import History from "./views/History.svelte";
  import Result from "./views/Result.svelte";

  const routes = {
    "/": Home,
    "/history": History,
    "/result": Result,
    "*": Home,
  };
</script>

<Header />
<main class=" min-h-screen pb-11 container">
  <article class="max-w-[1000px] mx-auto">
    <Router {routes} />
  </article>
</main>
<Footer />
