import { isLoggedInVar, logUserOut } from "../apollo";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import ShopList from "../components/coffeeshop/ShopList";

const Home = () => {
    return (
        <>
            <Header />
            <Content>
                <ShopList />
            </Content>
            <Footer />
        </>
    );
}

export default Home;