import { useState, useEffect } from "react";
import "./HeroBasicV2.css";

const backgrounds = ["bg-card1", "bg-card2"];

const steps = [
  {
    number: 1,
    title: "Escolha seu veículo",
    text: "Explore nossa seleção de lanchas, motos aquáticas, UTVs e quadriciclos para encontrar o equipamento ideal para sua aventura.",
  },
  {
    number: 2,
    title: "Selecione o período",
    text: "Defina a duração do aluguel com flexibilidade: horas, dias ou semanas, conforme sua necessidade.",
  },
  {
    number: 3,
    title: "Realize o pagamento",
    text: "Finalize sua reserva com segurança utilizando nosso sistema de pagamento rápido e confiável.",
  },
  {
    number: 4,
    title: "Aproveite sua experiência",
    text: "Receba orientações detalhadas e desfrute de uma aventura premium com total conforto e segurança.",
  },
];

export default function HeroBasicV2() {
  const [bgClass, setBgClass] = useState(backgrounds[0]);

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
    <section
      className={`text-gray-100 body-font bg-cover bg-center bg-no-repeat ${bgClass}`}
      style={{
        backgroundColor: "rgba(16, 39, 59, 0.8)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container px-4 sm:px-6 py-20 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--second-color)] mb-3">
          COMO FUNCIONA
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-12 max-w-2xl mx-auto">
          Entenda como é simples garantir sua aventura com conforto, segurança e
          agilidade.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          {steps.map(({ number, title, text }) => (
            <div
              key={number}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] max-w-sm bg-[var(--primary-color-variant)]/90 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:scale-[1.01] transition-transform"
            >
              <div
                className="flex items-center justify-center rounded-full mb-4 sm:mb-6 font-bold text-[var(--primary-color)]"
                style={{
                  backgroundColor: "var(--second-color)",
                  width: "48px",
                  height: "48px",
                  fontSize: "1.25rem",
                }}
              >
                {number}
              </div>
              <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[var(--primary-color)]">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
