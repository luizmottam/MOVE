// src/components/CategoriaCard.jsx
export default function CategoriaCard({ image, title, description, href = "#" }) {
  return (
    <a
      className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition"
      href={href}
    >
      <img
        className="w-[20rem] h-auto rounded-t-xl object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </a>
  );
}
