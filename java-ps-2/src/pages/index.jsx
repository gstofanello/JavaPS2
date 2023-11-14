import Cards from "../api/page";

export default function Home() {
  return (
    <main>
      <h3>Controle de Carros dos Empregados</h3>
      <section className="flex flex-col justify-center">
        <div>
          <input
            type="text"
            placeholder="Modelo do Carro"
            className="rounded-md p-4 m-3 rounded h-5 border-solid border-2 border-black"
            // value={modeloVeiculo}
            // onChange={(e) => setModeloVeiculo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome do Funcionário"
            className="rounded-md p-4 m-3 rounded h-5 border-solid border-2 border-black"
            // value={nomeFuncionario}
            // onChange={(e) => setNomeFuncionario(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 m-3 w-fit h-fit text-white rounded-md p-2 hover:bg-blue-800 "
        >
          Adicionar
        </button>
      </section>
      <hr className="my-3" />
      <section>
        <Cards />
      </section>
    </main>
  );
}
