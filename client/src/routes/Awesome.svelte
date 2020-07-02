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

  let isOpen = false;
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

<Navbar dark color="dark" expand="md">
  <NavbarBrand href="/">Employee management</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
</Navbar>
<Container class="" dark color="dark">
<Row>
<Col class="col-1"></Col>
fzfz
<Col>
<Media>
  <Media left href="#">
    <Media
      object
      src="https://via.placeholder.com/64x64.png?text=64%C3%9764"
      alt="Generic placeholder image"
    />
  </Media>
  <Media body>
    <Media heading>Media heading</Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
    Donec lacinia congue felis in faucibus.
  </Media>
</Media></Col>
</Row>
</Container>