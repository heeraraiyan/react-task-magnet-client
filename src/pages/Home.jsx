import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import User from "../components/User";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <User></User>

           <Footer></Footer>
            
        </div>
    );
};

export default Home;