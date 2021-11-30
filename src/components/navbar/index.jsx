import React from "react";
import { Button, Container, Logo, Title, Wrapper } from "./style";
import home from '../../asstes/icons/home.svg'
export const Navbar =()=>{
    return(
      <Container>
        <Wrapper>
           <Logo src={home} />
           <Title left>Building</Title>
        </Wrapper>
   <Wrapper card >
     <Title >Home</Title>
     <Title>Services</Title>
     <Title>Abaut Us</Title>
     <Title>Properties</Title>
     <Title>Contact</Title>
   </Wrapper>
   <Button>Log in</Button>

      </Container>
    )
}
export default Navbar;