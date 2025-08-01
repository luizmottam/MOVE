import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "./data/cards.json";

export default function CategoriaCard() {
  const carouselRef = useRef(null);

  // Auto scroll apenas em mobile
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || window.innerWidth >= 640) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const isEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      if (isEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const el = carouselRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[var(--primary-color-variant)] py-16 px-4 sm:px-6 relative">
      <div className="mx-auto relative">
        {/* Botões visíveis apenas em mobile */}
        <div className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("left")}
            className="bg-[var(--second-color)] p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="text-[var(--primary-color)]" />
          </button>
        </div>
        <div className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("right")}
            className="bg-[var(--second-color)] p-2 rounded-full shadow-md"
          >
            <ChevronRight className="text-[var(--primary-color)]" />
          </button>
        </div>

        {/* Mobile: scroll horizontal | Desktop: grid com colunas fixas */}
        <div
          ref={carouselRef}
          className="
            sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-6 sm:gap-8
            overflow-x-auto sm:overflow-visible
            flex sm:block
            scroll-smooth scrollbar-hide
            snap-x sm:snap-none snap-mandatory
          "
        >
          {data.map((card, index) => (
            <article
              key={index}
              className="
                flex-shrink-0 sm:flex-shrink-0
                min-w-[80%] sm:min-w-0
                snap-center sm:snap-none
                flex flex-col overflow-hidden border border-gray-200
                rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300
                bg-[var(--primary-color-variant)]
              "
            >
              <div
                className="relative h-48 w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
