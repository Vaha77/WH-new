import React from "react";
import { Bgimg, Card, Cardbottin, Container, Rect, Title, TitleLorem, Wrapper } from "./style";
import bg from '../../asstes/img/bg.png'
export const Body =()=>{
    return(
<Container>
    <Wrapper>
        <Title>Find Your Drem House</Title>
        <TitleLorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra posuere sem purus enim eleifend habitant arcu, sed.</TitleLorem>
        <Rect>
            <Card>
            <select name="log" id="">
                <option value="1">Locatsion</option>
                <option value="1">Locatsion</option>
                <option value="1">Locatsion</option>
                </select>    
            </Card>
            <Card>
            <select name="log" id="">
                <option value="1">Properties</option>
                <option value="1">Locatsion</option>
                <option value="1">Locatsion</option>
                </select>    
            </Card>
            <Card>
            <select name="log" id="">
                <option value="1">Price</option>
                <option value="1">Locatsion</option>
                <option value="1">Locatsion</option>
                </select>    
            </Card>
            
            <Cardbottin>Seacrch</Cardbottin>
        </Rect>

        
    </Wrapper>
 
</Container>
        
    
    )
}
export default Body;