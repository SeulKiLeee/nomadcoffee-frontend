import styled from "styled-components";

const FormErrorS = styled.span`
    color: tomato;
    font-weight:bold;
    font-size: 12px;
    margin: 5px 0px 10px;
`;

function FormError({message}){
    return message === "" || !message ? null :
        <FormErrorS>{message}</FormErrorS>;
};

export default FormError;