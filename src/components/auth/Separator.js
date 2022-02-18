import styled from "styled-components";

const SeparatorS = styled.div`
margin: 20px 0px 30px 0px;
text-transform: uppercase;
display:flex;
justy-content: center;
width: 100%;
align-items: center;
div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219,219);
}
span{
    margin: 0px 10px;
    font-weignt: 600;
    font-size: 12px;
    color: ${props => props.theme.color};
}
`;

function Separator(){
    return (
        <SeparatorS>
            <div></div>
            <span className="mediumFont">Or</span>
            <div></div>
        </SeparatorS>
    )
}

export default Separator;