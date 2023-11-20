"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cars from "../cars/page";
import Employees from "../employees/page";

export default function Dashboard() {
  const [showFormCars, setShowFormCars] = useState(false);
  const [modelFilter, setModelFilter] = useState("");

  const handleAddCarClick = () => {
    setShowFormCars(true);
  };

  const handleModelFilterChange = (event) => {
    setModelFilter(event.target.value);
    // Aqui você pode filtrar a lista de carros com base no modelo
    // Implemente a lógica para filtrar a lista de carros
  };

  const handleFormSubmitCars = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário (modelo, marca, ano, categoria) para a API
    // Reset do estado do formulário após o envio bem-sucedido
    setShowFormCars(false);
  };

  const [showForm, setShowForm] = useState(false);
  const [nameFilter, setNameFilter] = useState("");

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
    // Aqui você pode filtrar a lista de funcionários com base no nome
    // Implemente a lógica para filtrar a lista de funcionários
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário (nome, cargo, salário) para a API
    // Reset do estado do formulário após o envio bem-sucedido
    setShowForm(false);
  };
  return (
    <>
      <Header showButtonDashboard={false} />
      <hr className="border-[#E1CCA8]  w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
      <section className="bg-[#1A3430]">
        <div className="flex flex-col items-center justify-center">
          {!showFormCars && (
            <button
              onClick={handleAddCarClick}
              className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 pl-4 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              Adicionar Carro
            </button>
          )}
          {showFormCars && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleFormSubmitCars}
                  type="submit"
                  className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  Adicionar
                </button>
                <button
                  onClick={() => setShowFormCars(false)}
                  className="bg-[#E1CCA8] m-2 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  <span className="text-[#1A3430] font-bold text-sm">X</span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Modelo"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />

              <input
                type="text"
                placeholder="Marca"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
              <input
                type="number"
                placeholder="Ano"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
              <input
                type="text"
                placeholder="Categoria"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
            </div>
          )}
        </div>

        <hr className="border-[#E1CCA8]  w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />

        <div className="flex flex-col items-center justify-center">
          {!showForm && (
            <button
              onClick={handleAddEmployeeClick}
              className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 pl-4 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              Adicionar Empregado
            </button>
          )}
          {showForm && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  Adicionar
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-[#E1CCA8] m-2 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  <span className="text-[#1A3430] font-bold text-sm">X</span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
              <input
                type="text"
                placeholder="Cargo"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
              <input
                type="number"
                placeholder="Salário"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
              />
            </div>
          )}
        </div>
      </section>
      <hr className="border-[#E1CCA8] w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />

      <div className="bg-[#1A3430]   ">
        <section className="flex flex-col items-center justify-center py-4">
          <h2 className="text-2xl text-[#E1CCA8] ">Carros</h2>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Filtrar por modelo"
              value={modelFilter}
              onChange={handleModelFilterChange}
              className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
            />
          </div>
          <Cars />
        </section>
        <section className="flex flex-col items-center justify-center ">
          <hr className="border-[#E1CCA8] w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
          <h2 className="text-2xl text-[#E1CCA8] pt-4">Consultores</h2>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Filtrar por modelo"
              value={modelFilter}
              onChange={handleModelFilterChange}
              className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
            />
          </div>
          <Employees
            showSalary={true}
            showHeader={false}
            showFooter={false}
            showLine={false}
            showTitle={false}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
