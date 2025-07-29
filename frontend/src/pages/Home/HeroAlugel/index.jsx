import { useState, useEffect } from "react";
import "./HeroAlugel.css";

import CustomSelect from "../../../components/CustomSelect";
import CustomSearch from "../../../components/CustomSearch";
import CustomDatePicker from "../../../components/CustomDatePicker";

import categorias from "/data/categorias.json";

// Lista das classes CSS com os fundos
const backgrounds = ["bg-duna", "bg-lancha"];

export default function HeroAlugel() {
  const [bgClass, setBgClass] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgClass((prev) => {
        const currentIndex = backgrounds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    }, 9000); // a cada 10 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div
      className={`hero-booking min-h-screen flex items-center justify-center bg-white transition-all duration-1000 ease-in-out ${bgClass}`}
    >
      <div className="text-center px-4 w-full">
        <div className="max-w-[50rem] mx-auto">
          <h1 className="mb-5 text-5xl font-bold">M.O.V.E</h1>
          <p className="mb-6">Mobility On-demand for Versatility Experience</p>

          <div className="flex flex-col items-center gap-6 bg-[var(--primary-color)] p-8 rounded-lg w-full">
            <p className="text-(--second-color) font-semibold text-lg sm:text-xl tracking-wide uppercase">
              EXPERIÊNCIA DISPONÍVEL EM ÁGUAS E TRILHAS
            </p>

            <div className="flex flex-col sm:flex-row gap-0 w-full justify-center items-center bg-white rounded-lg border border-gray-400">
              <div className="w-full sm:w-1/3">
                <CustomSearch />
              </div>
              <div className="w-full sm:w-1/3">
                <CustomSelect options={categorias} />
              </div>
              <div className="w-full sm:w-1/3">
                <CustomDatePicker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
