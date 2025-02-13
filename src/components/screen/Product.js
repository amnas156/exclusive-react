import React from 'react'
import AnnouncementBar from '../includes/AnnouncementBar'
import Header from '../includes/Header'
import {products} from '../../data/Products'
import {Link, useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { HelmetProvider as Helmet } from 'react-helmet-async'
import Footer from '../includes/Footer'

function Product() {
        const {id} = useParams();
        const product= products[id];
        const navigate = useNavigate()
        const FavIcon = require('../../assets/Exclusive.svg').default
    return (
        <div>
            <Helmet>
                <link rel='icon' href={FavIcon}/>
                <title>{product.productName}</title>
            </Helmet>
            <AnnouncementBar/>
            <Header/>
            <ProductMain>
                <ProductContainer>
                    <Nav>
                        <Home to="/">Home  /</Home>
                        <Category>{`${product.category}  /`} </Category>
                        <ProductNameProduct>{product.productName}</ProductNameProduct>
                    </Nav>
                    <ProductDetails>
                        <ImageContainer>
                            <Image src={require(`../../assets/${product.productImg}`)}/>
                        </ImageContainer>
                        <ProductTextContainer>
                            <PriceContainer>
                                <Heading>{product.productName}</Heading>
                                <ReviewContainer>
                                    <ProductStar src={require(`../../assets/${product.star}`)}/>
                                    <Review>{`${product.review}    |`}</Review>
                                    {product.Stock === "In Stock" ? (<InStock>In Stock</InStock>) : (<StockOut> Stock Out</StockOut>)}
                                </ReviewContainer>
                                <ProductPrice>{product.price}</ProductPrice>
                                <Details>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</Details>
                            </PriceContainer>
                            {product.color ? (<ColorChange>Colours:  {product.color} </ColorChange>) : (<></>)}
                            <Table>
                                <Row>
                                    <ServicesContainer>
                                        <Icon src={require("../../assets/icon-delivery.svg").default}/>
                                        <ServiceText>
                                            <Service>Free Delivery</Service>
                                            <ServiceDetailsLink>Enter your postal code for Delivery Availability</ServiceDetailsLink>
                                        </ServiceText>
                                    </ServicesContainer>
                                </Row>
                                <Row>
                                    <ServicesContainer>
                                    <Icon src={require("../../assets/Icon-return.svg").default}/>
                                        <ServiceText>
                                            <Service>Return Delivery</Service>
                                            <ServiceDetails>Free 30 Days Delivery Returns.</ServiceDetails>
                                            <ServiceDetailsLink> Details</ServiceDetailsLink>
                                        </ServiceText>
                                    </ServicesContainer>
                                    
                                </Row>
                            </Table>
                        </ProductTextContainer>
                    </ProductDetails>
                    <ProductsNav>
                        <Top>
                            <Icon src={require("../../assets/Red.svg").default}/>
                            <RedText>Related Item</RedText>
                        </Top>
                        <Bottom>
                            <ProductList>
                                {products.slice((product.id + 3),(product.id + 7)).map(product =>( <Item key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
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
                                                                    </Item> ))}
                            </ProductList>
                        </Bottom>
                    </ProductsNav>
                </ProductContainer>
            </ProductMain>
            <Footer/>
        </div>
    )
}
const ProductMain = styled.div`
    width: 100%;
    overflow-x: hidden;

`;
const ProductContainer = styled.div`
    width: 80%;
    margin: 3rem auto;
`;
const Nav = styled.nav`
    display: flex;
    gap: 5px;
`;
const Home = styled(Link)`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-decoration: none;
    color: #0000004D;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        font-size: 10px;
    }
`;
const Category = styled(Link)`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-decoration: none;
    color: #0000004D;
    white-space: nowrap;@media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        font-size: 10px;
    }
`;
const ProductNameProduct = styled(Link)`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-decoration: none;
    color: #000000;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        font-size: 10px;
    }
`;
const ProductDetails = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        justify-content: start;
        gap: 30px;
    }
    @media (max-width: 425px) {
        flex-wrap: wrap;
        margin-top: 2rem;
    }
`;
const ImageContainer = styled.div`
    width: 70%;
    height: 600px;
    background-color: #F5F5F5;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        width: 60%;
        height: 350px;
    }
    @media (max-width: 425px) {
        width: 100%;
    }
`;
const ProductTextContainer = styled.div`
    width: 30%;
    margin: auto 2rem;
    @media (max-width: 768px) {
        width: 40%;
        margin: 0;
        height: 300px;
    @media (max-width: 425px) {
        width: 100%;
    }
    }
`;
const Image = styled.img`
    width: 446px;
    height: 315px;
    @media (max-width: 768px) {
        width: 55%;
        height: 250px;
    }
`;
const Heading = styled.h3`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size:18px;
    }
`;
const ReviewContainer = styled.div`
    display: flex;
    margin: 5px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
const Review = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000AD;
    margin-top: 10px;
    white-space: nowrap;
    margin-right: 10px;
    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: 5px;
    }

`;
const ProductStar = styled.img`
    margin-right: 5px;
    display: block;
    @media (max-width: 768px) {
        width: 78px;
        
    }
`
const InStock = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #00FF66;
    margin-left: 5px ;
    margin-top: 10px;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: 5px;
    }

`;
const StockOut = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: red;
    margin-left: 5px ;
    margin-top: 10px;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: 5px;
        margin-left: 0;
    }

`;
const ProductPrice = styled.span`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 3%;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
const Details = styled.p`
    margin: 5px 0;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0%;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 425px) {
        width: 100%;
    }
`;
const PriceContainer = styled.div`
    border-bottom: 1px solid #000000AD;
    @media (max-width: 425px) {
        width: 100%;
    }
`;
const ColorChange = styled.div`
`;
const Table = styled.div`
    border: 1px solid #00000080;
    margin: 3rem 0;
    @media (max-width: 768px) {
        margin: 1rem 0;
    }
`;
const Row = styled.div`
    display: flex;
    margin: 10px 0;
    &:first-child{
        border-bottom: 1px solid ;
    }
    @media (max-width: 768px) {
        height: 50px;
    }
`;
const ServiceText = styled.div``;
const Icon = styled.img`
    margin: 0 5px;
`;
const Service = styled.div`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 12px;
    }
`;
const ServiceDetailsLink = styled(Link)`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000;
    white-space: nowrap;
    @media (max-width: 1024px) {
        white-space: normal;
        font-size: 10px;
        line-height: 14px;
    }
    @media (max-width: 768px) {
        white-space: nowrap;
        font-size: 8px;
    }
`;
const ServiceDetails = styled.span`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000;
    @media (max-width: 768px) {
        line-height:14px;
        font-size: 10px;
    }
    `;
const Top = styled.div`
    margin: 3rem 0;
`;
const Bottom = styled.div``;
const RedText = styled.span`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #DB4444;
    `;
const ProductsNav = styled.div``;
const ProductList = styled.ul`
    width: 100%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(4,250px);
    justify-content: space-between;
    padding: 0;
    @media (max-width:1024px) {
        grid-template-columns: repeat(2,1fr);
        column-gap: 100px;
        }
    @media (max-width: 425px) {
        grid-template-columns: repeat(1,1fr);
    }

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
const Item = styled.li`
    list-style: none;
    height: 322px;
    margin-bottom: 20px;
    &:hover{
        ${AddTo} {
            display: flex;
        }
    }
`;
const ServicesContainer = styled.div`
    margin-bottom: 15px;
    display: flex;
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



export default Product
