import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const FlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const ButtonBack = styled(Link)`
display: inline-block;
margin-bottom: 7px;

text-decoration: none;

font-size: 20px;

color: #000000;
`;

export const Poster = styled.img`
width: 330px;
height: 500px;
`;


export const InfoContainer = styled.div`
align-self: flex-start;

margin-left: 30px;
`;

export const MovieTitle = styled.h2`
margin:20px 0;
`;


export const Overview = styled.span`
display: flex;
font-weight: 700;
margin-bottom: 5px;
`;


export const GenresTitle = styled.span`
display: flex;
font-weight: 700;
margin-bottom: 5px;
`;

export const Genre = styled.span`

&:not(:last-child){
    margin-right: 10px;
}
`;



