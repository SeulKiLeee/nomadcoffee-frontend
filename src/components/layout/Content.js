import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";

const ContentS = styled.div`
 margin-top: 20px;
 width: 100%;
 max-width: 1600px;
 margin: 0 auto;
 min-height: 50vh;
 background-color: ${props => props.theme.bgColor};
`;

function Content({children}){
    return (
    <ContentS>
        {children}
    </ContentS>
    )
};

export default Content;