// src/components/CategoriaCard.jsx
import data from "/data/cards.json";

export default function CategoriaCard() {
  return (
    <section className="bg-[var(--primary-color-variant)] py-24 px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((card, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[var(--primary-color-variant)] dark:bg-neutral-900"
            >
              <div
                className="relative h-48 w-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-[var(--primary-color-variant)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
