import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const BottomBoxS = styled(BaseBox)`
    padding: 20px 0px;
    text-align: center;
    a{
        font-weight: 600;
        color: ${props => props.theme.accent};
        text-decoration: none;
        margin-left: 5px;
    }
`;


function BottomBox({ cta, link, linkText}){
    return (
        <BottomBoxS>
            <span>{cta}</span>
            <Link to={link} className="mediumFont">{linkText}</Link>
        </BottomBoxS>
    )
}

export default BottomBox;