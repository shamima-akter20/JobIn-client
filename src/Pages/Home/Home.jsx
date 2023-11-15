import WebTitle from "../../components/WebTitle";
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Category from "./Category";
import Feature from "./Feature";



const Home = () => {
    return (
        <div className="px-10">
            <WebTitle>Home</WebTitle>
            <Banner></Banner>
            <Category></Category>
            <Feature className="mx-auto"></Feature>
            <Blog></Blog>
            <About></About>
        </div>
    );
};

export default Home;