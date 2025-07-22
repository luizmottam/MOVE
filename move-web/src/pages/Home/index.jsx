import "./Home.css";
import Header from "../../components/Header";
import Booking from "../../components/Booking";
import ProductsCard from "../../components/ProductsCard";
import CategoryCard from "../../components/CategoryCard";

const Home = () => {
  const categorias = [
    {imagem: 'img/lancha_1-removebg-preview.png', titulo: 'Lancha', descricao: 'Passeios exclusivos e conforto na água', color: '#20344c'},
    {imagem: 'img/jetski_1-removebg-preview.png', titulo: 'Jetski', descricao: 'Liberdade e adrenalina sobre as ondas', color: '#20344c'},
    {imagem: 'img/quadri_1-removebg-preview.png', titulo: 'Quadriciculo', descricao: 'Aventura em qualquer terreno', color: '#20344c'},
    {imagem: 'img/utv_1-removebg-preview.png', titulo: 'UTV', descricao: 'Off-road com tração e conforto para todo', color: '#20344c'},
  ]

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="booking-container">
          <Booking />
          <ProductsCard />
        </div>
        <div className="category-container">
          <h2>Categorias</h2>
          <div className='category-cards'>
          {categorias.map(categorias => (
            <CategoryCard
              key={categorias.titulo}
              image={categorias.imagem}
              title={categorias.titulo}
              description={categorias.descricao}
              color={categorias.color}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
