import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./HeroAlugel.css";

import CustomSelect from "../../../components/CustomSelect";
import CustomSearch from "../../../components/CustomSearch";
import CustomDatePicker from "../../../components/CustomDatePicker";

const backgrounds = ["bg-duna", "bg-lancha"];

export default function HeroAlugel() {
  const [bgClass, setBgClass] = useState(backgrounds[0]); // ✅ corrigido
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  // Carrega categorias.json da pasta public
  useEffect(() => {
    fetch("/data/categorias.json")
      .then((res) => res.json())
      .then((json) => setCategorias(json))
      .catch((err) => console.error("Erro ao carregar categorias:", err));
  }, []);

  // Troca de fundo automático
  useEffect(() => {
    const interval = setInterval(() => {
      setBgClass((prev) => {
        const currentIndex = backgrounds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`hero-booking flex items-center justify-center bg-[var(--primary-color-variant)] transition-all duration-1000 ease-in-out ${bgClass}`}>
      <div className="w-full px-4 m-4 sm:m-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-4 text-3xl sm:text-5xl font-bold">M.O.V.E</h1>
          <p className="mb-6 text-base sm:text-lg">Mobility On-demand for Versatility Experience</p>

          <div className="flex flex-col items-center gap-6 bg-[var(--primary-color)] p-6 sm:p-8 rounded-lg w-full">
            <p className="text-[var(--second-color)] font-semibold text-base sm:text-xl tracking-wide uppercase text-center">
              EXPERIÊNCIA DISPONÍVEL EM ÁGUAS E TRILHAS
            </p>

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 w-full bg-[var(--primary-color-variant)] rounded-lg">
              <div className="flex-1 min-w-0">
                <CustomSearch />
              </div>
              <div className="flex-1 min-w-0">
                <CustomSelect options={categorias} />
              </div>
              <div className="flex-1 min-w-0">
                <CustomDatePicker />
              </div>
            </div>

            <button
              className="text-base sm:text-lg font-bold text-[var(--primary-color-variant)] bg-[var(--second-color)] py-2 px-6 rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={() => navigate('./alugel/')}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
