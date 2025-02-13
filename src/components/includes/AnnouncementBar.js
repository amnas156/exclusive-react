import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/poppins/400.css";


function AnnouncementBar() {
    return (
        <div>
        <MainContainer>
            <ContentContainer>
            <Announcement>
                <Paragraph>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!<ShopLink>ShopNow</ShopLink>
                </Paragraph>
            </Announcement>
            <Languages>
                <Language>English</Language>
                <Language>हिन्दी</Language>
                <Language>മലയാളം</Language>
            </Languages>
            </ContentContainer>
        </MainContainer>
        </div>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 48px;
    background: #000;
    overflow-x: hidden;
    @media (max-width:320px) {
        height: 60px;
    }
`;
const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #fff;
    @media (max-width:425px) {
        width: 90%;
        margin: 0 auto;
    }
`;
const Announcement = styled.div`
`;
const Paragraph = styled.p`
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin: 12px 0;
    @media (max-width:768px) {
        font-size: 12px;
    }
    @media (max-width:425px) {
        font-size: 8px;
    }
`;
const ShopLink = styled(Link)`
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: #fff;
    margin: auto 8px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width:768px) {
        font-size: 12px;
    }
    @media (max-width:425px) {
        font-size: 8px;
    }
    
`;
const Languages = styled.select`
    position: absolute;
    right: 10%;
    background-color: transparent;
    color: #fff;
    border-color: transparent;
    @media (max-width:768px) {
        width: 75px;
        font-size: 12px;
        right: 5%;
    }
    @media (max-width:425px) {
        display: none;
    }
`;
const Language = styled.option`
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    background-color: #000;
    @media (max-width:768px) {
        font-size: 12px;
    }
`;

export default AnnouncementBar;
