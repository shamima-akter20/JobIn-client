import WebTitle from "../../components/WebTitle";
import Banner from "./Banner";
import Category from "./Category";
import Feature from "./Feature";



const Home = () => {
    return (
        <div className="px-10">
            <WebTitle>Home</WebTitle>
            <Banner></Banner>
            <Category></Category>
            <Feature></Feature>
        </div>
    );
};

export default Home;