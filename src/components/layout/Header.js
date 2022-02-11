import { isLoggedInVar, logUserOut } from "../../apollo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderS = styled.header`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    height: 60px;
    z-index: 100;
    background-color: ${props => props.theme.headerBg};
    border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const HeaderWrapper = styled.div`
    width:100%;
    max-width:1200px;
    padding: 15px 0px;
    margin: 0 auto;
    position: relative;
    top: 0;
    height: 59px;
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
    span {
        font-family: 'LeferiPoint-WhiteObliqueA';
        font-size: 2em;
        font-weight: bold;
        color: ${props => props.theme.accent};
        letter-spacing: 2px;
    }
`;


const LogoutButton = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    svg {
        cursor: pointer;
        font-weight:400;
        font-size: 20px;
        color: ${props => props.theme.accent};
    }
    span {
        font-family: 'LeferiPoint-WhiteObliqueA';
        font-size: 1.12em;
        line-height: 59px;
        font-weight: bold;
        color: ${props => props.theme.accent};
        letter-spacing: 2px;
    }
`;


function Header(){
    return (
        <HeaderS>
            <HeaderWrapper>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <span>Nomad Coffee</span>
                <LogoutButton>
                    <span onClick={() => logUserOut()} >Logout</span>
                </LogoutButton>
           </HeaderWrapper>
        </HeaderS>
    )
}

export default Header;