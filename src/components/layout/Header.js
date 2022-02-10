import { isLoggedInVar, logUserOut } from "../../apollo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderS = styled.header`
    padding: 11px 0px;
    height: 60px;
    text-align: center;
    background-color: ${props => props.theme.bgColor};
    border-bottom: 1px solid ${props => props.theme.subAccent};
    svg{
        color: ${props => props.theme.subAccent};
        font-size: 16px;
    }
    a{
        font-weight: 600;
        color: ${props => props.theme.accent};
        text-decoration: none;
        margin-left: 5px;
    }
    h1 {
        font-weight: bold;
        padding-top: 5px;
        color: ${props => props.theme.subAccent};
        letter-spacing: 1px;
    }
`;

const LogoutButton = styled.div`
    position: absolute;
    right: 20px;
    top: 19px;
    svg {
        cursor: pointer;
        font-weight:400;
        font-size: 20px;
        color: ${props => props.theme.subAccent};
    }
`;


function Header(){
    return (
        <HeaderS>
           <FontAwesomeIcon icon={faCoffee} />
           <h1>Nomad Coffee</h1>
           <LogoutButton>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={() => logUserOut()} />
            {/* <span onClick={() => logUserOut()} >Logout</span> */}
           </LogoutButton>
        </HeaderS>
    )
}

export default Header;