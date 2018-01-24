import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg'
import ss from './scissor-and-comb.svg'
const StyledHeader = styled.header`
display: flex; 
justify-content: space-between;
align-items: center;
background: black;
height:128px;
`;
const Links = styled.div`
display: flex; 
justify-content: center;
align-items: center;
`;
const Link = styled.a`
padding:10px 15px;
&:hover {
  color:yellow;
}
`;
const Logo = styled.div`
`;


class Header extends Component {
  constructor(props){
  super(props)
this.state={
  
}
}
  render() {
    return (
      <StyledHeader >
      <Logo >  
      <img  src="http://www.csstutorial.net/wp-content/uploads/2010/01/045.png" />
      </Logo>
      <Links>
          
              <Link href="#">Суперинфа</Link>
              <Link href="#">Еще суперинфа</Link>
              <Link href="#">Мы</Link>
              <Link href="#">Ололо</Link>
              <Link href="#">АОАО</Link>
          
      </Links>
      <div >КЛАЦ</div>
  </StyledHeader>
    );
  }
}

export default Header;
