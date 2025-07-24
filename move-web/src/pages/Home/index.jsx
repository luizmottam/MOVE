import "./Home.css";
import Header from "../../components/Header";
import Booking from "../../components/Booking";
import ProductsCard from "../../components/ProductsCard";
import CategoryCard from "../../components/CategoryCard";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const categorias = [
  {
    imagem: "img/lancha_1-removebg-preview.png",
    titulo: "Lancha",
    descricao: "Passeios exclusivos e conforto na água",
    color: "#20344c",
  },
  {
    imagem: "img/jetski_1-removebg-preview.png",
    titulo: "Jetski",
    descricao: "Liberdade e adrenalina sobre as ondas",
    color: "#20344c",
  },
  {
    imagem: "img/quadri_1-removebg-preview.png",
    titulo: "Quadriciculo",
    descricao: "Aventura em qualquer terreno",
    color: "#20344c",
  },
  {
    imagem: "img/utv_1-removebg-preview.png",
    titulo: "UTV",
    descricao: "Off-road com tração e conforto para todo",
    color: "#20344c",
  },
];

const heroCards = [
  {
    id: 1,
    subtitle: "Equipamentos Premium",
    text: "Oferecemos apenas lanchas, jets, UTVs e quadriciclos de alta qualidade e performance.",
  },
  {
    id: 2,
    subtitle: "Reserva 100% Digital",
    text: "Todo o processo de reserva é feito de forma online, rápida e segura.",
  },
  {
    id: 3,
    subtitle: "Suporte 24/7",
    text: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana para te atender.",
  },
  {
    id: 4,
    subtitle: "Manutenção Garantida",
    text: "Todos os veículos passam por rigorosa inspeção e manutenção antes de cada locação.",
  },
];

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
          <div className="category-cards">
            {categorias.map(({ titulo, imagem, descricao, color }) => (
              <CategoryCard
                key={titulo}
                image={imagem}
                title={titulo}
                description={descricao}
                color={color}
              />
            ))}
          </div>
        </div>
        <section className="hero-section">
          <HeroSection title="Por que escolher o M.O.V.E?" heroCards={heroCards} />
        </section>
        <HowItWorks />
        <Testimonials />
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
