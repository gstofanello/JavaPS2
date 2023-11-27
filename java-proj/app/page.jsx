import Cars from "./cars/page";
import Link from "next/link";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

export default function Home() {
  return (
    <main className="font-sans w-full h-vh">
      <Header />
      <section className=" w-full  flex justify-center items-center flex-col">
        <hr className="border-[#E1CCA8]  w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
        <div className="bg-[#1A3430] w-full flex justify-center items-center ">
          <img
            className="my-4 "
            src="https://s3.ecompletocarros.dev/images/lojas/152/veiculos/167065/original/vehicle_image_1698860174_ea2c65da4adf87888779cb9f17483a38.jpg"
            width="600"
            height="500"
          />
        </div>
        <hr className="border-[#E1CCA8]  w-full border-solid border-0 border-t-[1.5px] m-0 p-0" />
      </section>

      <section className="flex py-4 justify-center items-center bg-[#1A3430] flex-col gap-4">
        <h2 className="text-2xl text-[#E1CCA8] ">Catálogo</h2>
        <section className="max-w-[1060px] ">
          <Cars showDelete={false}/>
        </section>
      </section>
      <Footer />
    </main>
  );
}
