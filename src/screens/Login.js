import styled from "styled-components";
import { isLoggedInVar, darkModeVar } from "../apollo";

const Login = () => {
    const Title = styled.h1`
        color: ${(props) => props.theme.fontColor};
    `;
    const Container = styled.div`
        background-color: ${(props) => props.theme.bgColor};
    `;
    return (
        <Container>
            <Title>Login</Title>
            <button onClick={() => isLoggedInVar(true)} >Login</button>
            <div>
                <button onClick={() => darkModeVar(false)}>Light</button>
                <button onClick={() => darkModeVar(true)}>Dark</button>
            </div>
        </Container>
    );
}

export default Login;