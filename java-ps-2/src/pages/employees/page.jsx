import Header from "../components/header";

export default function EmployeeCards({
  showSalary = false,
  showHeader = true,
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
      {showHeader && <Header />}
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
              className="border-solid border-2 border-[#1A3430] bg-[#E1CCA8]  p-4 shadow-md rounded-md w-[320px]"
            >
              <article className="flex ttext-[#1A3430] justify-between">
                <div>
                  <p>Nome: {employee.nome}</p>
                  <p>Cargo: {employee.cargo}</p>
                </div>
                {showSalary && (
                  <div className="">
                    <p>Ano: {employee.salario}</p>
                  </div>
                )}
              </article>
            </section>
          ))
        )}
      </ul>
    </>
  );
}
