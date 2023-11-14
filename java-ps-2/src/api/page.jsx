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

  var carrosMock = [
    { id: 1, modelo: "KA", marca: "Ford", ano: 2013, categoria: "Hatchback" },
    {
      id: 2,
      modelo: "HB20",
      marca: "Hyundai",
      ano: 2015,
      categoria: "Hatchback",
    },
    { id: 3, modelo: "S40", marca: "Volvo", ano: 2002, categoria: "Sedan" },
    { id: 4, modelo: "Tiguan", marca: "VW", ano: 2022, categoria: "SUV" },
  ];

  return (
    <ul className="albuns">
      {!carrosMock ? (
        <li>
          <h3>Carregando dados...</h3>
        </li>
      ) : (
        carrosMock.map((carro) => (
          <section
            key={carro.id}
            className="border-solid border-1 border-black p-4 shadow-md rounded-md w-[300px]"
          >
            <article className="flex gap-[5px]">
              <div>
                <p>Marca: {carro.marca}</p>
                <p>Modelo: {carro.modelo}</p>
              </div>
              <div>
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
