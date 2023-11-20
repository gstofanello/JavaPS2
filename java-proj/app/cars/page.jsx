"use client";
import { useEffect, useState } from "react";

export default function Cars() {
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
            className="border-solid border-2 border-[#1A3430] bg-[#E1CCA8]  p-4 shadow-md rounded-md w-[310px]"
          >
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

export async function setCard(data) {
    if (
      !data ||
      !data.name ||
      !data.date ||
      !data.salary ||
      !data.email ||
      !data.status ||
      !data.avatar
    ) {
      return undefined;
    }
    let { name, date, salary, email, status, avatar } = data;
    let number = parseInt(Math.random() * 100);
    let gender = Math.random() > 0.5 ? "men" : "women";
    let url =
      "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";
    avatar = url;
    let options = {
      method: "POST",
      body: JSON.stringify({ name, date, salary, email, status, avatar }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(APIURL, options);
      return await response.json();
    } catch (error) {
      <Link to="/error"></Link>;
    }
  
    return undefined;
  }
  
  export async function deletePost(id) {
    if (!id) {
      return undefined;
    }
  
    let options = {
      method: "DELETE",
    };
  
    try {
      let response = await fetch(APIURL + "/" + id, options);
      return await response.json();
    } catch (error) {
      <Link to="/error"></Link>;
    }
  
    return undefined;
  }
  export async function editPost(data) {
    let { name, date, salary, email, status, id, avatar } = data;
  
    if (!data) {
      return undefined;
    }
  
    let options = {
      method: "PUT",
      body: JSON.stringify({ name, date, salary, email, status, id, avatar }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      let response = await fetch(APIURL + "/" + id, options);
      return await response.json();
    } catch (error) {
      <Link to="/error"></Link>;
    }
  
    return undefined;
  } 