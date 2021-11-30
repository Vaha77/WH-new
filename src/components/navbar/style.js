import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  background-color:  #ffffff;
  color:  #02012B;
  height: 120px;
  padding: 0 135px;
  border: 1px solid red;
  z-index: 999;
  @media (max-width: 1900px) {
    flex-direction: column;
  }

`;
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: ${(card)=>card &&'auto' };
`
export const Logo = styled.img`
  display: flex;
  cursor: pointer;
  
`;

export const Title = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #02012B;
cursor: pointer;
margin-left: ${({left})=>(left ? '10px' : '60px')} ;

`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 96px;
height: 40px;
background: #19BCE4;
border-radius: 6px;
margin-right: auto;
`