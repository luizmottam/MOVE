import { dados } from "./veiculos.config.js";


export default function Veiculos({ tipo }) {
  const veiculos = dados.filter((item) => item.tipo === tipo);

  return (
    <>
      <section className="px-[var(--dp)] py-5 w-[100%]">
        <p className="uppercase">HOME / {tipo}</p> 
        <h1 className="text-5xl font-bold uppercase text-center mb-5">{tipo}</h1>
        <div className="flex">
            <div className="bg-white w-[30%] h-[50rem] border rounded-xl p-5">Slidebar</div>
            <div className="flex flex-col w-[100%] p-5">
                <div className="flex justify-between">
                    <p>100 anúncos encontrados</p>
                    <p>Ordenar por: Mas relevante</p>
                </div>
                <div className="grid grid-cols-4">
                  
                </div>
            </div>
        </div>
      </section>
    </>
  );
}