import { useState, useEffect } from "react";
import './HeroBasicV2.css'

const backgrounds = ["bg-card1", "bg-card2"];

const steps = [
  {
    number: 1,
    title: "Escolha seu veículo",
    text: "Explore nossa seleção de lanchas, jets, UTVs e quadriciclos para encontrar o equipamento ideal para sua aventura.",
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
      <div className="container px-5 py-24 mx-auto text-center max-w-1x">
        <h1 className="text-3xl font-semibold text-[var(--second-color)] mb-3">
          COMO FUNCIONA
        </h1>
        <p className="text-gray-300 mb-16">
          Entenda como é simples garantir sua aventura com conforto, segurança e agilidade.
        </p>

        <div className="flex flex-row justify-center gap-8">
          {steps.map(({ number, title, text }) => (
            <div
              key={number}
              className="bg-[var(--primary-color-variant)]/90 rounded-lg p-8 flex flex-col items-center max-w-xs text-center shadow-lg hover:scale-101"
            >
              <div
                className="flex items-center justify-center rounded-full mb-6 font-bold text-[var(--primary-color)]"
                style={{
                  backgroundColor: "var(--second-color)",
                  width: "56px",
                  height: "56px",
                  fontSize: "1.5rem",
                }}
              >
                {number}
              </div>
              <h2 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">{title}</h2>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
