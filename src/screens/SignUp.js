import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import BottomBox from "../components/auth/BottomBox";
import { FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
    text-align: center;
    align-items: center;
    margin-bottom: -40px;
`;

const Subtitle = styled(FatLink)`
    font-size: 18px;
    text-align: center;
    margin: 15px 0px 10px;
    display: block;
`;

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $username: String!
        $email: String!
        $name: String!
        $password: String!
    ) {
    createAccount(
        username:$username
        email:$email
        name:$name
        password:$password
    ) {
        ok
        error
    }
}
`;



const SignUp = () => {
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit, 
        formState, 
        errors, 
        getValues, 
        setError,
        clearErrors,
    } = useForm({
        mode:"onBlur",
    });
    const onCompleted = (data) => {
        const { username, password } = getValues();
        const { createAccount: {ok, error} } = data;
        if(!ok){
            return;
        }
        navigate(routes.home, { state: { message: "Account created. Please login.", username, password} });
    };
    const [createAccount, {loading} ] = useMutation(CREATE_ACCOUNT_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = (data) => {
        if(loading) {
            return;
        }
        createAccount({
            variables: {
                ...data,
            }
        })
    }
    return (
        <AuthLayout>
            <PageTitle title="Sing up" />
            <FormBox>
                <HeaderContainer>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <Subtitle>친구들의 사진과 동영상을 보려면 가입하세요.</Subtitle>
                    <Button type="button" onClick={() => {}} value="Log in With Facebook" />
                    <Separator />
                </HeaderContainer>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input 
                    name="username"
                    ref={register({
                        required:"Username is required.",
                        minLength:{
                            value:4,
                            message: "Username must be at least 4 characters."
                        }
                    })} type="text" placeholder="Username" />
                    <FormError message={errors?.username?.message} />
                    <Input 
                    name="name"
                    ref={register({
                        required:"Name is required.",
                    })} type="text" placeholder="Name" />
                    <FormError message={errors?.name?.message} />
                    <Input 
                    name="email"
                    ref={register({
                        required:"Email is required.",
                        minLength:{
                            value:5,
                            message: "Email must be at least 5 characters."
                        }
                    })} type="text" placeholder="Email" />
                    <FormError message={errors?.email?.message} />
                    <Input
                    name="password"
                    ref={register({
                        required:"Password is required.",
                        minLength:{
                            value:4,
                            message: "Password must be at least 4 characters."
                        }
                    })} type="password" placeholder="Password" />
                    <FormError message={errors?.password?.message} />
                    <Button type="submit"  value={loading ? "Loading..." : "Sign up"} 
                            disabled={!formState.isValid || loading} />
                </form>
            </FormBox>
            <BottomBox
                cta="Have an account?"
                link={routes.home}
                linkText="Login"
                />
            {/* <div>
                <button onClick={() => darkModeVar(false)}>Light</button>
                <button onClick={() => darkModeVar(true)}>Dark</button>
            </div> */}
          </AuthLayout>
    );
}

export default SignUp;