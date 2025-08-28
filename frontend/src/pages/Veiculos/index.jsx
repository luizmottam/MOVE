import { dados } from "./veiculos.config.js";


export default function Veiculos({ tipo }) {
  const veiculos = dados.filter((item) => item.tipo === tipo);

  return (
    <>
      <section className="px-[var(--dp)] py-5">
        <p className="uppercase">HOME / {tipo}</p> 
        <h1 className="text-5xl font-bold uppercase text-center">{tipo}</h1>
        <div>
            <div>Slidebar</div>
            <div>
                <div>
                    <p>100 anúncos encontrados</p>
                    <p>Ordenar por: Mas relevante</p>
                </div>
                <div className="">

                </div>
            </div>
        </div>
      </section>
    </>
  );
}