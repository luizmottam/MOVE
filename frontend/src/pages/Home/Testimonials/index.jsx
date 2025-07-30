export default function Testimonials() {
  const testimonials = [
    {
      text: "Aluguei uma lancha para comemorar meu aniversário e foi uma experiência incrível. Equipamento impecável e atendimento de primeira.",
      product: "Lancha Phantom 303",
    },
    {
      text: "Os quadriciclos do M.O.V.E são fantásticos! Passei um final de semana explorando trilhas e a experiência superou todas as expectativas.",
      product: "Quadriciclo Honda TRX",
    },
    {
      text: "Aluguei jets para um evento corporativo de team building e foi um sucesso absoluto. Equipamentos novos e processo de reserva simplificado.",
      product: "Jet Ski Sea-Doo GTX",
    },
  ];

  const StarRating = () => (
    <div className="flex justify-center mt-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[var(--second-color)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-[var(--primary-color)] text-[var(--primary-color-variant)] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--second-color)] mb-2">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>
        <p className="text-gray-300 mb-12">
          Conheça as avaliações reais de quem já aproveitou nossos serviços de aluguel
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <blockquote
              key={idx}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between h-full hover:scale-101"
            >
              <p className="text-gray-100 text-base italic">"{item.text}"</p>
              <div className="mt-6 text-center">
                <StarRating />
                <p className="mt-2 font-semibold text-[var(--second-color)]">
                  {item.product}
                </p>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-[var(--second-color)] hover:bg-[var(--second-color-hover)] font-semibold px-6 py-3 rounded-md transition">
            VER MAIS DEPOIMENTOS
          </button>
        </div>
      </div>
    </section>
  );
}
