import React from 'react'
import {products} from "../../data/Products"
import Header from '../includes/Header'
import AnnouncementBar from '../includes/AnnouncementBar'
import Footer from '../includes/Footer'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import {HelmetProvider as Helmet} from 'react-helmet-async'
function ProductList() {
    const Icon = require('../../assets/Exclusive.svg').default
    const navigate = useNavigate();
    return (
        <div>
            <Helmet>
                <link rel='icon' href={Icon}/>
                <title>Products</title>
            </Helmet>
            <AnnouncementBar/>
            <Header/>
            <ProductsMain>
            <HomeProducts>
                <Home to="/">Home  /</Home>
                <ProductSet>Products</ProductSet>
            </HomeProducts>
                <Products>
            {products.map(product =>( <Product key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                                        <ProductImgContainer>
                                            <ProductImg src={require(`../../assets/${product.productImg}`)} />
                                            <IconContainer>
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="17" fill="white"/>
                                            <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="17" fill="white"/>
                                            <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            </IconContainer>
                                            <NewButton>
                                                {product.newButton}
                                            </NewButton>
                                            <AddTo>
                                                <AddText>Add To Cart</AddText>
                                            </AddTo>
                                        </ProductImgContainer>
                                        <TextContainer>
                                            <ProductName>{product.productName}</ProductName>
                                            <PriceTag>
                                                <Price>{product.price}</Price>
                                                <Star src={require(`../../assets/${product.star}`)}/>
                                                <Count>{product.Count}</Count>
                                            </PriceTag>
                                            <Color>{product.color}</Color>
                                        </TextContainer>
                                    </Product> ))}
                                    </Products>
                                </ProductsMain>
                                <Footer/>
                                    
        </div>
    )
}

const ProductsMain = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 3rem;
`;
const Products = styled.ul`
    width: 80%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(4,270px);
    justify-content: space-between;
    padding: 0;

`;
const AddTo = styled.div`
    width: 100%;
    height: 41px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;
`;
const AddText = styled.span`
    color: #fff;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;
const Product = styled.li`
    list-style: none;
    height: 322px;
    margin-bottom: 20px;
    &:hover{
        ${AddTo} {
            display: flex;
        }
    }
`;
const IconContainer = styled.div`
    width: 34px;
    position: absolute;
    top: 15px;
    right: 15px;
`;
const TextContainer = styled.div``;
const ProductImgContainer = styled.div`
    height: 250px;
    background-color: #F5F5F5;
    border-radius: 4px;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: center;
`;
const NewButton = styled.div`
    position: absolute;
    left: 15px;
    top: 15px;
`
const ProductImg = styled.img`
    margin: auto 0;
`;
const ProductName = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;
const PriceTag = styled.div`
    display: flex;
    gap: 7px;
`;
const Color = styled.div``;
const Price = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #DB4444;
`;
const Star = styled.img`
    display: block;
`;
const Count = styled.span`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #0000004D;
`;
const HomeProducts = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 5rem;
`;
const Home = styled(Link)`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #0000004D;
    text-decoration: none;
    margin-right: 5px;
`;
const ProductSet = styled.span`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`;
export default ProductList
