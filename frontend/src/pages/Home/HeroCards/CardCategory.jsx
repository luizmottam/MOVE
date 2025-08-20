const CardCategory = ({id, title, description, backgroundImg }) => {
  return (
    <div
      className="flex flex-col items-center bg-white rounded-4xl shadow-2xl">
      <img src={backgroundImg} alt={id} className="rounded-4xl p-2"/>
      <div className="flex flex-col px-5 gap-2">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-justify">{description}</p>
        <p className="font-bold cursor-pointer mb-8">Ver mais</p>
      </div>
    </div>
  );
};

export default CardCategory;
