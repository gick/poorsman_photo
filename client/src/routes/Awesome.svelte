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
    import {onMount} from "svelte"
    let workers=[]
    onMount(async ()=>{
     let res= await fetch('https://randomuser.me/api/?results=100')
     let x = await res.json()
     workers=x.results
    })
  let isOpen = true;
  let open2 = false;
  let open3=false
  let open = false;
  
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
    You clicked the fucking don't click button!!!!
    <br />
    Why did you clicked the fucking don't click button?????
    <br />
    What's wrong with you dude????
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggle}>OK</Button>
    <Button color="secondary" disabled>Cancel</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={open2} {toggle2}>
  <ModalHeader {toggle2}>Computing</ModalHeader>
  <ModalBody>
    <Spinner color="danger" />
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={toggle2}>Don't click</Button>
  </ModalFooter>
</Modal>
<Modal isOpen={open3} {toggle3}>
  <ModalHeader {toggle3}>You won</ModalHeader>
  <ModalBody>
    You now have access to everybody information <br>
    People will pop out in the list, just have to wait a bit <br>
    Are you that curious?
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={toggle3}>Don't click</Button>
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
<Media>
  <Media left href="#">
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
{/each}
</Col>
</Row>
</Container>