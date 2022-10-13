import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;

`;
const Language = styled.div`
font-siz:14;
cursor:pointer`
const Left = styled.div`
flex:1;
align-items:center;`
const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
`
const Center = styled.div`flex:1`
const Right = styled.div`flex:1`
export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                input
                <Search/>
            </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}
