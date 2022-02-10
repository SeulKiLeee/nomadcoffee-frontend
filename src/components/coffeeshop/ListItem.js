import styled from "styled-components";

const ListItemS = styled.li`
width:33%;
display: flex;
float:left;
margin: 1px;
overflow: hidden;
background-color: ${props => props.theme.accent};
img{
    width: 100%;
    height: auto;
}
`;

const ImageBox = styled.li`

`;

const TextBox = styled.li`
    height: 50px;

`;



const ListItem = () => {
    const emptyImg = "https://nomad-coffee-uploads.s3.ap-northeast-2.amazonaws.com/1-1644516220659-alex-padurariu-mqyMjCTWJyQ.jpg";

    return (
        <ListItemS>
            <ul>
                <ImageBox>
                    <img src={emptyImg} alt="" />
                </ImageBox>
                <TextBox>
                    <span>title</span>
                </TextBox>
            </ul>
        </ListItemS>
    )
};

export default ListItem;