// Components
import Header from "../../components/Header";
import HeroAlugel from "./HeroAlugel";
import HeroCategorias from "./HeroCategorias";
import HeroBasic from "./HeroBasic";
import HeroBasicV2 from "./HeroBasciV2";
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroAlugel />
      <HeroCategorias />
      <HeroBasic />
      <HeroBasicV2 />
      <Testimonials />
      <Footer />
    </>
  );
}
