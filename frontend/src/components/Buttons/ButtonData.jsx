const ButtonData = () => {
  return (
    <div className="flex flex-row text-sm bg-[var(--pcv)] rounded-2xl items-center w-full cursor-pointer">
      <button className="bg-[var(--pcv)] px-3 py-1  rounded-2xl text-left w-[100%] cursor-pointer">
        <p className="font-semibold">CHECK-IN</p>
        <p className="font-sm">Adicionar data</p>
      </button>
      <div className="border-l-2 h-10"></div>
      <button className="bg-[var(--pcv)] px-3 py-1  rounded-2xl text-left w-[100%] cursor-pointer">
        <p className="font-semibold lg:font-xl">CHECKOUT</p>
        <p className="">Adicionar data</p>
      </button>
    </div>
  );
};

export default ButtonData;
