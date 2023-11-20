"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Employees({
  showSalary = false,
  showHeader = true,
  showFooter = true,
  showLine = true,
  showTitle = true,
}) {
  const [employees, setEmployees] = useState(null);

  const getEmployees = () => {
    const url = "https://java-proj-ps2.onrender.com/empregados";
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
