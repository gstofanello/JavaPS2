"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const url = "https://java-proj-ps2.onrender.com/carros";

export default function Cars(showDelete = false) {
  const [carros, setCarros] = useState(null);

  const getCarros = () => {
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
            className="border-solid border-2 border-[#1A3430] bg-[#E1CCA8]  p-4 shadow-md rounded-md w-[310px]"
          >
            {showDelete && (
              <Image
                onClick={() => deleteCar(carro.id)}
                src="https://super.so/icon/dark/trash-2.svg"
                alt="delete icon"
                width={15}
                height={15}
                className="mb-2 cursor-pointer"
              />
            )}
            <article className="flex text-[#1A3430] justify-between">
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

export async function setCarro(carro) {
  if (
    !carro ||
    !carro.modelo ||
    !carro.categoria ||
    !carro.marca ||
    !carro.ano
  ) {
    return undefined;
  }
  let { modelo, categoria, marca, ano } = carro;
  let options = {
    method: "POST",
    body: JSON.stringify({ modelo, categoria, marca, ano }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    alert("Erro ao adicionar carro");
    console.log(error);
  }

  return undefined;
}

export async function deleteCar(id) {

  const deleteUrl = (`${url}/${id}`);

  let options = {
    method: "DELETE",
  };
  

  // O metodo nao funciona quando tento deletar um carro
  // que criei no front, caso tenha criado utilizando thunderclient
  // ele deleta, estranho pois o status vem 200 no front, o mesmo que vem no thunderclient
  try {
    let response = await fetch(deleteUrl, options);
    if (response.ok) {
      console.log(response);
      return { success: true };
    } else {

      console.error('Request failed with status:', response.status);
      return null; 
    }
  } catch (error) {
    console.error('Error:', error);
    return null; 
  }
  


  return undefined;
}

