"use client";
import { useEffect, useState } from "react";

export default function Cards() {
  const [carros, setCarros] = useState(null);

  const getCarros = () => {
    const url = "https://java-proj-ps2.onrender.com/carros";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCarros(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCarros();
  }, []);

  return (
    <ul className="albuns">
      {!carros ? (
        <img
          src="https://cdn.dribbble.com/users/488614/screenshots/3518706/vroom.gif"
          alt="this slowpoke moves"
          width="250px"
        />
      ) : (
        carros.map((carro) => (
          <section
            key={carro.id}
            className="border-solid border-2 border-[#1A3430] bg-[#E1CCA8]  p-4 shadow-md rounded-md w-[320px]"
          >
            <article className="flex ttext-[#1A3430] justify-between">
              <div>
                <p>Marca: {carro.marca}</p>
                <p>Modelo: {carro.modelo}</p>
              </div>
              <div className="">
                <p>Ano: {carro.ano}</p>
                <p>Categoria: {carro.categoria}</p>
              </div>
            </article>
          </section>
        ))
      )}
    </ul>
  );
}
