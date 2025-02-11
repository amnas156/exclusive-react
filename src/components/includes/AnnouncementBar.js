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
                50%!
                </Paragraph>
                <ShopLink>ShopNow</ShopLink>
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
`;
const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #fff;
`;
const Announcement = styled.div`
    display: flex;
`;
const Paragraph = styled.p`
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin: 12px 0;
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
`;
const Languages = styled.select`
    position: absolute;
    right: 136px;
    background-color: transparent;
    color: #fff;
    border-color: transparent;
`;
const Language = styled.option`
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    background-color: #000;
`;

export default AnnouncementBar;
