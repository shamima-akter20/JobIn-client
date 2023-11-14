import WebTitle from "../../components/WebTitle";
import Banner from "./Banner";
import Category from "./Category";



const Home = () => {
    return (
        <div className="px-10">
            <WebTitle>Home</WebTitle>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;