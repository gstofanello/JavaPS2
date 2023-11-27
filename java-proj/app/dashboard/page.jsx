"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cars, { setCarro } from "../cars/page";
import Employees, { setEmployee } from "../employees/page";

export default function Dashboard() {
  const [showFormCars, setShowFormCars] = useState(false);
  const [modelFilter, setModelFilter] = useState("");
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("0");
  const [category, setCategory] = useState("");

  function carModelHandler(event) {
    setModel(event.target.value);
  }
  function carMakeHandler(event) {
    setMake(event.target.value);
  }
  function carYearHandler(event) {
    setYear(event.target.value);
  }
  function carCategoryHandler(event) {
    setCategory(event.target.value);
  }
  function submitCarHandler(event) {
    event.preventDefault();
    let post = { modelo: model, categoria: category, marca: make, ano: year };
    setCarro(post)
      .then((response) => {
        response = alert("Carro adicionado com sucesso ");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [showForm, setShowForm] = useState(false);
  const [nameFilter, setNameFilter] = useState("");

  const [name, setName] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("0");

  function nameHandler(event) {
    setName(event.target.value);
  }
  function salarioHandler(event) {
    setSalario(event.target.value);
  }
  function cargoHandler(event) {
    setCargo(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    let post = { nome: name, cargo: cargo, salario: salario };
    setEmployee(post)
      .then((response) => {
        response = alert("Empregado adicionado com sucesso ");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

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
              onClick={() => setShowFormCars(true)}
              className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 pl-4 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              Adicionar Carro
            </button>
          )}
          {showFormCars && (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-between">
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
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e] text-white p-1 my-2  rounded-md w-[210px]"
                onChange={carModelHandler}
              />

              <input
                type="text"
                placeholder="Marca"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e] text-white p-1 my-2  rounded-md w-[210px]"
                onChange={carMakeHandler}
              />
              <input
                type="number"
                placeholder="Ano"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e] text-white  p-1 my-2  rounded-md w-[210px]"
                onChange={carYearHandler}
              />
              <input
                type="text"
                placeholder="Categoria"
                className="border-solid border-2 border-[#E1CCA8] bg-[#33403e] text-white p-1 my-2  rounded-md w-[210px]"
                onChange={carCategoryHandler}
              />
              <button
                onClick={submitCarHandler}
                type="submit"
                className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              >
                Adicionar
              </button>
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
                  onClick={() => setShowForm(false)}
                  className="bg-[#E1CCA8] m-2 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  <span className="text-[#1A3430] font-bold text-sm">X</span>
                </button>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="border-solid border-2 text-white border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
                onChange={nameHandler}
              />
              <input
                type="text"
                placeholder="Cargo"
                className="border-solid border-2 text-white border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
                onChange={cargoHandler}
              />
              <input
                type="number"
                placeholder="Salário"
                className="border-solid border-2 text-white border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
                onChange={salarioHandler}
              />
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  Adicionar
                </button>
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
              onChange={handleFormSubmit}
              className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
            />
          </div>
          <Cars showDelete={true}/>
        </section>
        <section className="flex flex-col items-center justify-center ">
          <hr className="border-[#E1CCA8] w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
          <h2 className="text-2xl text-[#E1CCA8] pt-4">Consultores</h2>
          <div className="flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Filtrar por modelo"
              value={modelFilter}
              onChange={handleFormSubmit}
              className="border-solid border-2 border-[#E1CCA8] bg-[#33403e]  p-1 my-2  rounded-md w-[210px]"
            />
          </div>
          <Employees
            showSalary={true}
            showHeader={false}
            showFooter={false}
            showLine={false}
            showTitle={false}
            showDelete={true}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
