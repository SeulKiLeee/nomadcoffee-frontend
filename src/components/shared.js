import styled from "styled-components";


export const BaseBox = styled.div`
border: 1px solid ${props => props.theme.borderColor};
`;


export const FatLink = styled.span`
font-weight: 600;
color: ${props => props.theme.color};
line-height: 1.2em;
`;