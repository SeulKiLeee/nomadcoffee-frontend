import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../../apollo";
import { useLocation } from "react-router-dom";

const ListItemS = styled.li`
width:25%;
height: 300px;
display: flex;
float:left;
padding: 1px;
overflow: hidden;
background-color: ${props => props.theme.bgColor};
img{
    width: 100%;
    height: auto;
}
`;

const ImageBox = styled.li`
    width: 100%;
    height: 250px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const ContentBox = styled.li`
    height: 50px;

`;

const Title = styled.span`
    font-size:1.25em;
    font-weight:bold;
`;


// const SEE_COFFEESHOP = gql`
//  seeCoffeShop(
//     id: Int!
//     ): CoffeeShop
// `;

const ListItem = () => {
    const emptyImg = "https://nomad-coffee-uploads.s3.ap-northeast-2.amazonaws.com/1-1644516220659-alex-padurariu-mqyMjCTWJyQ.jpg";

    return (
        <ListItemS>
            <ul>
                <ImageBox>
                    <img src={emptyImg} alt="" />
                </ImageBox>
                <ContentBox>
                    <Title>title</Title>
                </ContentBox>
            </ul>
        </ListItemS>
    )
};

export default ListItem;