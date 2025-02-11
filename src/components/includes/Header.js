import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Search from '../../assets/Vector.svg'
import FavIcon from '../../assets/Wishlist.svg'
import CartIcon from '../../assets/Cart.svg'
import '@fontsource/inter/700.css'


function Header() {
    return (
        <div>
            <HeaderContainer>
                <NavBar>
                    <Item>
                        <Logo>Exclusive</Logo>
                    </Item>
                    <Item>
                        <NavList>
                            <NavItem>
                                <Nav>Home</Nav>
                            </NavItem>
                            <NavItem>
                                <Nav>Contact</Nav>
                            </NavItem>
                            <NavItem>
                                <Nav>About</Nav>
                            </NavItem>
                            <NavItem>
                                <Nav>Sign Up</Nav>
                            </NavItem>
                        </NavList>
                    </Item>
                    <Item>
                        <SearchBar>
                            <Input placeholder='What are you looking for?'/>
                            <SearchIcon src={Search}/>
                        </SearchBar>
                    </Item>
                    <Item>
                        <Cart>
                            <Icon src={FavIcon}/>
                            <Icon src={CartIcon}/>
                        </Cart>
                    </Item>
                </NavBar>
            </HeaderContainer>
        </div>
    )
}
const HeaderContainer = styled.div`
    width: 100%;
    border-bottom: 0.5px solid #0000004D;
    
`;
const NavBar = styled.ul`
    width: 80%;
    margin: 40px auto 0 auto ; 
    display: flex;
    justify-content: space-between;
`;
const Item = styled.li`
    list-style: none;
    height: 40px;
    
`;
const Logo = styled.h1`
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    margin: 10px auto;
`;
const NavList = styled.ul`
    width: 367px;
    display: flex;
    justify-content: space-between;
`;
const NavItem = styled.li`
    margin: 10px 0;
    list-style: none;
    
`;
const Nav = styled(Link)`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;
const SearchBar = styled.div`
    width: 236px;
    height: 36px;
    background: #F5F5F5;
    border-radius: 4px;
    position: relative;
`;
const Cart = styled.div`
    display: flex;
    margin: auto 0;
`;
const Input = styled.input`
    background: transparent;
    border-color: transparent;
    margin: auto 0;
    &::placeholder{
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: auto 0;
    }
`;
const SearchIcon = styled.img`
    position: absolute;
    top: 7px;
    right: 15px;
`;
const Icon = styled.img`
    margin-left: 20px;
`;

export default Header
