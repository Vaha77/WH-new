import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 700px;
`;

export const Wrapper = styled.div`
display: flex ;
flex-direction: column;
align-items: center;

`;
export const Title = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: bold;
font-size: 64px;
line-height: 76px;
color: #000000;
`;

export const TitleLorem = styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #000000;
width: 622px;
height: 60px;
margin-top: 24px;
`
export const Bgimg = styled.div`
display: flex;
`

export const Rect = styled.div`
display: flex;
align-items: center;
width: 1170px;
height: 118px;
border: 0.5px solid rgba(25, 188, 228, 0.3);
margin-top: 100px;
`

export const Card = styled.div`
margin: 20px;
width: 259px;
height: 70px;
border: 0.5px solid rgba(25, 188, 228, 0.3);
select{
  border: none;
}
`

export const Cardbottin = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
width: 259px;
height: 70px;
color: #fff;
background: #19BCE4;
cursor: pointer;

`