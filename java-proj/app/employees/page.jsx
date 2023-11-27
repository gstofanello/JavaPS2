"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Image from "next/image";
const url = "https://java-proj-ps2.onrender.com/empregados";

export default function Employees({
  showSalary = false,
  showHeader = true,
  showFooter = true,
  showLine = true,
  showTitle = true,
  showDelete = false,
}) {
  const [employees, setEmployees] = useState(null);

  const getEmployees = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      {showHeader && <Header showButtonEmployees={false} />}
      <section className="flex py-4 justify-center items-center bg-[#1A3430] flex-col gap-4">
        {showLine && showTitle && (
          <>
            <hr className="border-[#E1CCA8]  w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
            <h2 className="text-2xl text-[#E1CCA8] ">Consultores</h2>
          </>
        )}
        <section className="max-w-[1060px] ">
          <ul className="albuns">
            {!employees ? (
              <img
                src="https://cdn.dribbble.com/users/488614/screenshots/3518706/vroom.gif"
                alt="this slowpoke moves"
                width="250px"
              />
            ) : (
              employees.map((employee) => (
                <section
                  key={employee.id}
                  className="border-solid border-2 border-[#1A3430] bg-[#E1CCA8]  p-4 shadow-md rounded-md w-[310px]"
                >
                   {showDelete && (
              <Image
                onClick={() => deleteEmployee(employee.id)}
                src="https://super.so/icon/dark/trash-2.svg"
                alt="delete icon"
                width={15}
                height={15}
                className="mb-2 cursor-pointer"
              />
            )}
                  <article className="flex ttext-[#1A3430] justify-between">
                    <div>
                      <p>Nome: {employee.nome}</p>
                      <p>Cargo: {employee.cargo}</p>
                    </div>
                    {showSalary && (
                      <div className="">
                        <p>Salario: {employee.salario}</p>
                      </div>
                    )}
                  </article>
                </section>
              ))
            )}
          </ul>
        </section>
      </section>
      {showFooter && <Footer />}
    </>
  );
}
export async function setEmployee(employee) {
  if (
    !employee ||
    !employee.nome ||
    !employee.salario ||
    !employee.cargo 
  ) {
    return undefined;
  }
  let { nome, salario, cargo } = employee;
  let options = {
    method: "POST",
    body: JSON.stringify({ nome, salario, cargo }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    alert("Erro ao adicionar empregado");
    console.log(error);
  }

  return undefined;
}

export async function deleteEmployee(id) {

  const deleteUrl = (`${url}/${id}`);

  let options = {
    method: "DELETE",
  };
  

  // O metodo nao funciona quando tento deletar um empregado
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
