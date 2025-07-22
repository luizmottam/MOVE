import "./Home.css";
import Header from "../../components/Header";
import Booking from "../../components/Booking";
import ProductsCard from "../../components/ProductsCard";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="booking-container">
          <Booking />
          <ProductsCard />
        </div>
        <div className="category-container">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
