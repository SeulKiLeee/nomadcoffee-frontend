import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import FormBox from "../components/auth/FormBox";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import BottomBox from "../components/auth/BottomBox";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import PageTitle from "../components/PageTitle";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router-dom";

    const FacebookLogin = styled.div`
        color: #385285;
        span {
            margin-left: 10px;
            font-weight: 600;
        }
    `;

    const Notification = styled.div`
        color: #2ecc71;
        padding-top:10px;
    `;


    const LOGIN_MUTATION = gql`
        mutation login($username: String!, $password: String!){
            login(username: $username, password: $password){
                ok
                token
                error
            }
        }
    `;


const Login = () => {
    
    const location = useLocation();
    const { 
        register, 
        handleSubmit, 
        formState, 
        errors, 
        getValues, 
        setError,
        clearErrors,
    } = useForm({
        mode:"onChange",
        defaultValues: {
            username: location?.state?.username || "",
            password: location?.state?.password || "",
        }
    });
    
    console.log(location);
    const onCompleted = (data) => {
        const { login: {ok, error, token} } = data;
        if(!ok){
           return setError("result",{
                message: error
            });
        }
        if(token){
            logUserIn(token);
        }
        console.log(data);
    };
    const [login, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    });
    const onSubmitValid = (data) => {
        if(loading) {
            return;
        }
        const {username, password} = getValues();
       login({
           variables: {
            username,
            password
           },
       })
    };
    const clearLoginError = () => {
        clearErrors("result");
    };
    return (
        <AuthLayout>
            <PageTitle title="Log in" />
                <FormBox>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    <Notification>{location?.state?.message || ""}</Notification>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <Input
                            onChange={clearLoginError}
                            ref={register({
                                required: "Username is required.",
                                minLength:{
                                    value: 5,
                                    message: "Username must be at least 5 characters."
                                },
                                pattern: "/[a-zA-Z0-9]",
                                // validate: (currentValue) => currentValue.includes("l"),
                            })} 
                            name="username" 
                            type="text" 
                            placeholder="Username"
                            hasError={Boolean(errors?.username?.message)}
                         />
                         <FormError message={errors?.username?.message} />
                        <Input 
                            onChange={clearLoginError}
                            ref={register({
                                required: "Password is required.",
                            })} 
                            name="password" 
                            type="password" 
                            placeholder="Password"
                            hasError={Boolean(errors?.password?.message)}
                        />
                        <FormError message={errors?.password?.message} />
                        <Button 
                            type="submit" 
                            value={loading ? "Loading..." : "Login"} 
                            disabled={!formState.isValid || loading} />
                        <FormError message={errors?.result?.message} />
                    </form>
                    <Separator />
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                        <span>Log in with Facebook</span>
                    </FacebookLogin>
                </FormBox>
                <BottomBox 
                    cta="Don't have an account?"
                    link={routes.signUp}
                    linkText="Sign up"
                    />
            {/* <div>
                <button onClick={() => darkModeVar(false)}>Light</button>
                <button onClick={() => darkModeVar(true)}>Dark</button>
            </div> */}
          </AuthLayout>
    );
}

export default Login;