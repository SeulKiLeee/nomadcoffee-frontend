import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";
import ListItem from "./ListItem";

const ShopListS = styled.div`
 width: 100%;
 max-width: 1600px;
 margin: -1px auto;
 min-height: 50vh;
 padding: 0px 1px 1px 0px;
 background-color: ${props => props.theme.bgColor};
`;

const GridThree = styled.ul`
    width:100%;
`;





function ShopList({children}){
    return (
    <ShopListS>
        <GridThree>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </GridThree>
    </ShopListS>
    )
};

export default ShopList;
