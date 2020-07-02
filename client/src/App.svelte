<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>
<body>
  <Router {routes} />
</body>
