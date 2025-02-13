import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <div>
            <FooterContainer>
                <FooterWrapper>
                    <FooterItem>
                        <Link>
                            <FooterHeading>Exclusive</FooterHeading>
                        </Link>
                        <Link>
                            <FooterSubHeading>Subscribe</FooterSubHeading>
                        </Link>
                        <Link>
                            <FooterText>Get 10% off your first order</FooterText>
                        </Link>
                        <Link>
                            <InputBox>
                            <InPut placeholder='Enter your email' />
                            <Image src={require("../../assets/input.svg").default}/>
                            </InputBox>
                        </Link>
                    </FooterItem>
                            <FooterItem>
                                <Link>
                                    <FooterSubHeading>Support</FooterSubHeading>
                                </Link>
                                <Link>
                                    <FooterText>
                                        111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        exclusive@gmail.com
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        +88015-88888-9999
                                    </FooterText>
                                </Link>
                            </FooterItem>
                            <FooterItem>
                                <Link>
                                    <FooterSubHeading>Account</FooterSubHeading>
                                </Link>
                                <Link>
                                    <FooterText>
                                        My Account
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Login / Register
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Cart
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Wishlist
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Shop
                                    </FooterText>
                                </Link>
                            </FooterItem>
                            <FooterItem>
                                <Link>
                                    <FooterSubHeading>Quick Link</FooterSubHeading>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Privacy Policy
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        Terms Of Use
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                        FAQ
                                    </FooterText>
                                </Link>
                                <Link>
                                    <FooterText>
                                Contact</FooterText>
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link>
                            <FooterHeading>Download App</FooterHeading>
                        </Link>
                        <Link>
                            <FooterText2>Save $3 with App New User Only</FooterText2>
                            <ImageContainer>
                                <Left>
                                    <Image src={require("../../assets/QrCode.svg").default}/>
                                </Left>
                                <Right>
                                    <Image src={require("../../assets/GooglePlay.svg").default}/>
                                    <Image src={require("../../assets/AppStore.svg").default}/>
                                </Right>
                            </ImageContainer>
                        </Link>
                        <Link>
                            <Social>
                                <Image src={require("../../assets/Icon-Facebook.svg").default}/>
                                <Image src={require("../../assets/Icon-Twitter.svg").default}/>
                                <Image src={require("../../assets/icon-instagram.svg").default}/>
                                <Image src={require("../../assets/Icon-Linkedin.svg").default}/>
                            </Social>
                        </Link>
                    </FooterItem>
                </FooterWrapper>
                <CopyRight>
                    <CopyText>©Copyright Rimel 2022. All right reserved</CopyText>
                </CopyRight>
            </FooterContainer>
        </div>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    padding-top: 3rem ;
    background-color: #000;
    text-align: center;
    overflow-x: hidden;
`;
const FooterWrapper = styled.div`
    width: 80%;
    margin: auto ;
    display: grid;
    grid-template-columns: repeat(5,auto);
    text-align: left;
    @media (max-width:768px) {
            grid-template-columns: repeat(3,auto);
        }
    @media (max-width:768px) {
        grid-template-columns: repeat(2,auto);

    }
    @media (max-width:425px) {
        grid-template-columns: repeat(1,auto);
        margin: 0 auto;
    }
`;
const FooterItem = styled.ul`
    padding: 0;
    &:first-child{
        width: 230px;
    }
`;
const FooterHeading = styled.h1`
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #FAFAFA;
    
`;
const FooterSubHeading = styled.span`
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    color: #FAFAFA;
    @media (max-width:1024px) {
            font-size: 16px;
        }
`;
const FooterText2 = styled.span`
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #FAFAFA;
    @media (max-width:1024px) {
            font-size: 10px;
        }
`;
const InputBox = styled.div`
    display: flex;
    background: transparent;
    border: 1.5px solid #FAFAFA;
    width: 217px;
`;
const InPut = styled.input`
    width: 170px;
    background-color: transparent;
    padding: 12px 16px;
    border-color: transparent;
    &::placeholder{
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
`;
const Left = styled.div`
`;
const Right = styled.div``;
const Link = styled.li`
    list-style: none;
    margin: 2rem 0;
    
`;
const Image = styled.img`
    display: block;
`;
const Social = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CopyRight = styled.div`
    border-top: 1px solid;
    display: flex;
    justify-content: center;
`;
const CopyText = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 30px ;
`;
const FooterText = styled.span`
    font-family:'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #FAFAFA;
    @media (max-width:1024px) {
            font-size: 12px;
        }
    @media (max-width:425px) {
        font-size: 14px;
    }
    
`;
export default Footer
