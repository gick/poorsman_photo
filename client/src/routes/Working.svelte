<script>
import {push, pop, replace} from 'svelte-spa-router'
  import { onMount } from "svelte";
  import { Row, Col, Button, Jumbotron } from "sveltestrap";
  let work1 = [];
  let work2 = [];
  let work3 = [];
  onMount(() => {
    let worker1show = setInterval(() => {
      work1 = [...work1, "static/animated-worker1.gif"];
    }, 3000);
    let worker2show = setInterval(() => {
      work2 = [...work2, "static/animated-worker2.gif"];
    }, 3000);

    let worker3show = setInterval(() => {
      work3 = [...work3, "static/animated-worker3.gif"];
    }, 3000);

    setTimeout(() => {
      worker2show;
    }, 1000);
    setTimeout(() => {
      worker3show;
    }, 1000);

    setTimeout(() => {
      worker1show;
    }, 1000);
  });
</script>

<Jumbotron>
  <Row>
    <Col class="col-1">
      {#each work2 as src2}
        <img src={src2} />
      {/each}

    </Col>

    <Col>
      <h1 class="display-3">Under construction!</h1>

      <p class="lead">
        This is gonna be awesome but just later ok?
        <br />
        So, like, you could... leave?
        <br />
        I mean... people are working here...
      </p>
      <p class="lead" />

      <hr class="my-2" />
      {#each work3 as src}
        <img {src} />
      {/each}

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <Button on:click={e=>push('/fucking_awesome')} color="primary">Don't click</Button>
      </p>
      {#each work1 as src1}
        <img src={src1} />
      {/each}
    </Col>
    <Col class="col-1">
      {#each work2 as src2}
        <img src={src2} />
      {/each}

    </Col>

  </Row>
</Jumbotron>
