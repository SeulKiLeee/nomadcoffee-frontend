import { isLoggedInVar, logUserOut } from "../apollo";

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <h3>Welcome</h3>
            <button onClick={() => logUserOut()} >Logout</button>
        </>
    );
}

export default Home;