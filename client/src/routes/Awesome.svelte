<script>
  import {
    Modal,
    Row,
    Col,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
    Collapse,
    Media,
    Spinner,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
  } from "sveltestrap";
    import Typewriter from "svelte-typewriter"
    import {onMount} from "svelte"
    import {fade} from 'svelte/transition'
    let workers=[]
    onMount(async ()=>{
     let res= await fetch('https://randomuser.me/api/?results=100')
     let x = await res.json()
     setInterval(() => {
         if(workers.length<100){
              workers.push(x.results[workers.length])
              workers=workers}

     }, 1000);
    })
  let isOpen = true;
  let open2 = false;
  let open3=false
  let open = true
  
  const toggle = () => {
    open = !open;
    open2 = true;
  };
  const toggle2 = () => {
    open2 = false;
    open3=true
  };

  const toggle3 = () => {
    open3 = false;
  };

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>
<style>

.worker{
    border-radius: 100%;
    padding: 10px;
}
</style>
<Modal isOpen={open} {toggle}>
  <ModalHeader {toggle}>Why did you do that???</ModalHeader>
  <ModalBody>
  <Typewriter cascade interval={[300, 20, 200,30,70]}>
    <p>
    You clicked the fucking don't click button!!!!
    </p>
    <p>
    Why did you clicked the fucking don't click button?????
    </p>
    <p>
    What's wrong with you dude????
    </p>
    </Typewriter>

  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggle}>I Agree</Button>
    <Button color="secondary" disabled>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={open2} {toggle2}>
  <ModalHeader {toggle2}>Computing</ModalHeader>
    <Typewriter cascade interval={[300, 20, 200,30,70]}>
    <p>
    Have you noticed the people on the background?
    </p>
    <p>
    Looks like there are personal datas and password... 
    </p>
    <p>
    Do you think they are actual people? Maybe you could peek some info? Or warn them?
    </p>
    <p>But maybe these are just random data???</p>
    </Typewriter>

  <ModalBody class="d-flex justify-content-center">
    <Spinner color="danger" />
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={toggle2}>Click!</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={open3} {toggle3}>
  <ModalHeader {toggle3}>You won</ModalHeader>
  <ModalBody>
    You prove yourself worthy of value and bravor <br>
    You may use the poorsman_photo CMS <br>
    Start learning by clicking Stop!
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={toggle3}>Stop!</Button>
  </ModalFooter>
</Modal>

<Navbar dark color="dark" expand="md">
  <NavbarBrand href="/">Employee management</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
</Navbar>
<Container class="" dark color="dark">
<Row>
<Col class="col-1"></Col>
<Col>
{#each workers as worker}
<div transition:fade="{{delay: 250, duration: 300}}">
<Media>
  <Media  left href="#">
    <img
      
      class="worker"
      src="{worker.picture.large}"
      alt="Generic placeholder image"
    />
  </Media>
  <Media body>
    <Media heading>{worker.name.title} {worker.name.last} {worker.name.first}</Media>
    Username : {worker.login.username} <br> 
    Location : {worker.location.street.number},{worker.location.street.name}<br> 
    City and country : {worker.location.city}, {worker.location.country} <br>
    Use password : {worker.login.password} 
  </Media>
</Media>
</div>
{/each}
</Col>
</Row>
</Container>