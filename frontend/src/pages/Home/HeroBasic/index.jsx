

export default function HeroBasic() {
  const heroTitle = '';
  const heroSubTitle = '';

  const heroCards = [
            {
              title: "Frota Premium",
              text: "Veículos novos, potentes e bem equipados para garantir segurança, conforto e adrenalina.",
            },
            {
              title: "Reserva 100% Digital",
              text: "Alugue online de forma rápida, fácil e segura — do seu jeito, no seu tempo.",
            },
            {
              title: "Suporte 24/7",
              text: "Atendimento especializado disponível todos os dias, a qualquer hora, para tirar dúvidas ou resolver imprevistos.",
            },
            {
              title: "Manutenção Garantida",
              text: "Inspeções rigorosas antes de cada uso para entregar sempre o melhor desempenho e total segurança.",
            },
          ]

  return (
    <section className="text-gray-100 body-font bg-[var(--primary-color)]">
      <div className="container px-4 py-[6rem] mx-auto text-[var(--second-color)]">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[var(--second-color)] uppercase">
            Aventura em Alto Nível
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            Lanchas, quadriciclos, UTVs e jetskis de alta performance para quem
            busca experiências únicas ao ar livre. Seja navegando por águas
            cristalinas ou explorando trilhas off-road, oferecemos os veículos
            ideais para transformar qualquer momento em uma aventura
            inesquecível. Com conforto, segurança e potência, sua única
            preocupação será aproveitar ao máximo cada segundo.
          </p>
        </div>
        <div className="flex flex-wrap">
          {heroCards.map((item, index) => (
            <div
              key={index}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-20"
            >
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[var(--second-color)]">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base text-gray-200 mb-4">
                {item.text}
              </p>
              <a
                href="#"
                className="text-[var(--second-color)] hover:text-[var(--second-color-hover)] inline-flex items-center"
              >
                Saiba Mais
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}