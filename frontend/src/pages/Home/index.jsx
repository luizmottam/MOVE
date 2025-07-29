// CSS
import "./Home.css";

// Components
import Header from "../../components/Header";
import HeroAlugel from "./HeroAlugel";
import HeroCategorias from './HeroCategorias'

export default function Home() {
  return (
    <>
      <Header />
      <HeroAlugel />
      <HeroCategorias/>
    </>
  );
}
