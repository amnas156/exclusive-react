import React, {useState,useEffect} from 'react'
import { Helmet } from 'react-helmet'
import AnnouncementBar from '../includes/AnnouncementBar'
import Header from '../includes/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {products} from '../../data/Products'
import Footer from '../includes/Footer'


function Main() {
    const navigate = useNavigate();
    const [SelectedCategory,setSelectedCategory] = useState()
    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }
    const filteredProducts = products.filter(product => product.category === SelectedCategory)
    useEffect(() =>{
        console.log(SelectedCategory);
        console.log(filteredProducts);
        
    })
    const Icon = require('../../assets/Exclusive.svg').default
    return (
        <div>
            <Helmet>
                <link rel='icon' href={Icon}/>
                <title>Exclusive</title>
            </Helmet>
            <AnnouncementBar/>
            <Header/>
            <SpotLight>
                <SpotLightWrapper>
                    <SpotLightContent>
                        <SpotLightIphone>
                            <IphoneIcon src={require('../../assets/iphoneIcon.svg').default}/>
                            <Series>iPhone 14 Series</Series>
                        </SpotLightIphone>
                        <SpotLightHeading>Up to 10% off Voucher</SpotLightHeading>
                        <SpotLightButton>
                            <SpotLightLink>Shop Now</SpotLightLink>
                            <SpotLightLink><ButtonIcon src={require('../../assets/Button.svg').default}/></SpotLightLink>
                        </SpotLightButton>
                    </SpotLightContent>
                    <SpotLightImage>
                        <PhoneImg src={require('../../assets/phone.jpg')}/>
                    </SpotLightImage>
                </SpotLightWrapper>
            </SpotLight>
            <Categories>
                <CategoriesTop>
                        <RedIco src={require('../../assets/Red.svg').default}/>
                        <RedText>Categories</RedText>
                </CategoriesTop>
                <CategoriesList>
                    <CategoriesTittle>Browse By Category</CategoriesTittle>
                    <CategoryList>
                        <Category onClick={() => handleCategoryClick("Phones")}>
                            <CategoryImg src={require('../../assets/Phone.svg').default}/>
                            <CategoryName>Phones</CategoryName>
                        </Category>
                        <Category onClick={() => handleCategoryClick("Computers")}>
                            <CategoryImg src={require('../../assets/Computer.svg').default}/>
                            <CategoryName>Computers</CategoryName>
                        </Category>
                        <Category onClick={() => handleCategoryClick("SmartWatch")}>
                            <CategoryImg src={require('../../assets/SmartWatch.svg').default}/>
                            <CategoryName>SmartWatch</CategoryName>
                        </Category>
                        <Category onClick={() => handleCategoryClick("HeadPhones")}>
                            <CategoryImg src={require('../../assets/Headphone.svg').default}/>
                            <CategoryName>HeadPhones</CategoryName>
                        </Category>
                        <Category onClick={() => handleCategoryClick("Gaming")}>
                            <CategoryImg src={require('../../assets/Gamepad.svg').default}/>
                            <CategoryName>Gaming</CategoryName>
                        </Category>
                        <Category onClick={() => handleCategoryClick("Camera")}>
                            <CategoryImg src={require('../../assets/Camera.svg').default}/>
                            <CategoryName>Camera</CategoryName>
                        </Category>
                    </CategoryList>
                </CategoriesList>
            </Categories>
            <ProductsMain>
                <Products>
                    {filteredProducts.length > 0 ? (
                    filteredProducts.map(product =>( <Product key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
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
                    </Product> ))
                    ) : (
                        products.slice(0,8).map(product =>( <Product key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
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
                        </Product> ))
                    ) 
                    }
                </Products>
                <View to="/Products">View All Products</View>
            </ProductsMain>
            <ServicesContainer>
                <Services>
                    <Service>
                        <ServiceImgContainer>
                            <ServiceImg src={require("../../assets/Services.svg").default}/>
                        </ServiceImgContainer>
                        <ServiceTextContainer>
                            <ServiceName>FREE AND FAST DELIVERY</ServiceName>
                            <br/>
                            <ServiceDescription>Free delivery for all orders over $140</ServiceDescription>
                        </ServiceTextContainer>
                    </Service>
                    <Service>
                        <ServiceImgContainer>
                            <ServiceImg src={require("../../assets/Services1.svg").default}/>
                        </ServiceImgContainer>
                        <ServiceTextContainer>
                            <ServiceName>24/7 CUSTOMER SERVICE</ServiceName>
                            <br/>
                            <ServiceDescription>Friendly 24/7 customer support</ServiceDescription>
                        </ServiceTextContainer>
                    </Service>
                    <Service>
                        <ServiceImgContainer>
                            <ServiceImg src={require("../../assets/Services2.svg").default}/>
                        </ServiceImgContainer>
                        <ServiceTextContainer>
                            <ServiceName>MONEY BACK GUARANTEE</ServiceName>
                            <br/>
                            <ServiceDescription>We reurn money within 30 days</ServiceDescription>
                        </ServiceTextContainer>
                    </Service>
                </Services>
            </ServicesContainer>
            <Footer/>
        </div>
        
    )
}
const SpotLight = styled.div`   
    overflow-x: hidden;
`;
const SpotLightWrapper = styled.div`
    width: 80%;
    height: 458px;
    display: flex;
    margin: 30px auto;
    background-color: #000;
    border-radius: 10px;
    @media (max-width:425px) {
        height: 100vh;
        flex-wrap: wrap;
        margin: 3rem;
    }
`;
const SpotLightContent = styled.div`
    margin: auto 64px;
    color: #FAFAFA;
    @media (max-width:425px) {
        margin: 3rem;
    }
`;
const SpotLightIphone = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
`;
const IphoneIcon = styled.img`
    display: block;
    margin-right: 10px;
`;
const Series = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;
const SpotLightHeading = styled.h1`
    font-family: 'Inter';
    width: 300px;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0.04em;
    margin: 2rem 0;
    @media (max-width:768px) {
        font-size: 36px;
    }
    @media (max-width:375px) {
        font-size: 32px;
    }
    @media (max-width:375px) {
        width: 210px;
        font-size: 28px;
    }
`;
const SpotLightButton = styled.div`
    display: flex;
    gap: 8px;
`;
const SpotLightLink = styled(Link)`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #FAFAFA;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`;
const ButtonIcon = styled.img`
    display: block;
`;
const SpotLightImage = styled.div`
    display: block;
    `;
const PhoneImg = styled.img`
    width: 100%;
    border-radius: 10px;
    @media (max-width:768px) {
        height: 100%;
    }
`;
const Categories = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow-x: hidden;
`;
const CategoriesTop = styled.div`
    display: flex;
    width: 150px;
    
`;
const RedIco = styled.img`
    display: block;
    margin-right: 16px;
`;
const RedText = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #DB4444;
    margin: auto 0;
    @media (max-width: 425px) {
        font-size: 14px;
    }
`;
const CategoriesList = styled.div`
    width: 100%;
    margin-top: 1rem;

`;
const CategoriesTittle = styled.h5`
    font-family: 'Inter';
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
    @media (max-width: 425px) {
        font-size: 28px;
    }
    @media (max-width: 320px) {
        font-size: 24px;
    }
`;
const CategoryList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6,170px);
    justify-content: space-between;
    padding-left: 0;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3,170px);
        row-gap: 25px;
    }
    @media (max-width: 425px) {
        grid-template-columns: repeat(2,150px);
        row-gap: 25px;
    }
    @media (max-width: 375px) {
        grid-template-columns: repeat(2,130px);
        column-gap: 25px;
    }
    @media (max-width: 320px) {
        grid-template-columns: repeat(2,120px);
        column-gap: 10px;
    }
    
`;
const Category = styled.li`
    height: 145px;
    list-style: none;
    border: 1px solid #0000004D;
    text-align: center;
    text-align: center;
`;
const CategoryImg = styled.img`
    width: 56px;
    height: 56px;
    margin: 16px 35px;
`;
const CategoryName = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

`;
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
    border-bottom: 0.5px solid #0000004D;
    @media (max-width:1024px) {
        grid-template-columns: repeat(3, 250px);
    }
    @media (max-width:768px) {
        grid-template-columns: repeat(2, 250px);
    }
    @media (max-width:425px) {
        grid-template-columns: repeat(2, 170px);
        width: 90%;
    }
    @media (max-width:375px) {
        grid-template-columns: repeat(2, 150px);
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
const Product = styled.li`
    list-style: none;
    height: 322px;
    margin-bottom: 10px;
    &:hover{
        ${AddTo} {
            display: flex;
        }
    }
    @media (max-width:1024px) {
        &:last-child{
        display: none;
    }
    &:nth-child(7){
        display: none;
    }
    }
    @media (max-width:375px) {
            height: 210px;
        }
        @media (max-width:320px) {
            height: 230px;
        }
`;
const IconContainer = styled.div`
    width: 34px;
    position: absolute;
    top: 15px;
    right: 15px;
    @media (max-width:425px) {
        display: none;
    }
`;
const TextContainer = styled.div`
    @media (max-width:425px) {
        width: 15px;
        height: 15px;
    }
`;
const ProductImgContainer = styled.div`
    height: 250px;
    background-color: #F5F5F5;
    border-radius: 4px;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: center;
    @media (max-width:425px) {
        height: 180px;
    }
`;
const NewButton = styled.div`
    position: absolute;
    left: 15px;
    top: 15px;
`
const ProductImg = styled.img`
    margin: auto 0;
    @media (max-width:425px) {
        height: 100px;
    }
`;
const ProductName = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    @media (max-width:425px) {
        font-size: 12px;
        white-space: nowrap;
    }
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
    @media (max-width:375px) {
        font-size: 12px;
    }
`;
const Star = styled.img`
    display: block;
    @media (max-width:375px) {
        width: 75px;
    }
`;
const Count = styled.span`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #0000004D;
    @media (max-width:375px) {
        font-size: 12px;
    }
`;
const View = styled(Link)`
    width: 234px;
    height: 56px;
    padding: 16px 48px;
    border-radius: 4px;
    background-color:#DB4444;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`;
const ServicesContainer = styled.div`
    width: 100%;
    margin: 5rem 0;
`;
const Services = styled.ul`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    @media (max-width:1024px) {
        width: 80%;
    }
    @media (max-width:425px) {
        grid-template-columns: repeat(1,1fr);
        row-gap: 20px;
    }


`;
const Service = styled.li`
    list-style: none;
    align-items: center;
    text-align: center;
    
`;
const ServiceImgContainer = styled.div`
    margin-bottom: 1rem;
`;
const ServiceTextContainer = styled.div`
    
`;
const ServiceName = styled.span`
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    @media (max-width:768px) {
        font-size: 18px;
    }

`;
const ServiceImg = styled.img`
    @media (max-width:768px) {
        width: 80px;
    }

`;
const ServiceDescription = styled.span`
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`;
export default Main
