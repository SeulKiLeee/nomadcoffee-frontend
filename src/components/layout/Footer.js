import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";

const FooterS = styled.footer`
 padding-top: 30px;
 background-color: ${props => props.theme.bgColor};
 border-top: 1px solid ${props => props.theme.accent};
 height: 80px;
 position: fixed;
 bottom:0;
 left:0;
 right:0;
`;

const DarkModeSWitch = styled.div`
    text-align: center;
`;

const DarkModeButton = styled.span`
 cursor: pointer;
 font-size: 20px;
 font-weignt:bold;
 color: ${props => props.theme.accent};
`;


function Footer(){
    const darkMode = useReactiveVar(darkModeVar);
    return (
    <FooterS>
        <DarkModeSWitch>
            <DarkModeButton onClick={darkMode ? disableDarkMode : enableDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </DarkModeButton>
        </DarkModeSWitch>
    </FooterS>
    )
};

export default Footer;