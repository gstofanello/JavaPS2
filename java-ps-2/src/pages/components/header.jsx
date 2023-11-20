import Link from "next/link";

export default function Header() {
    return (
<header className="flex  w-full md:w-full justify-around items-center gap-2 bg-[#1A3430]">
        <h1 className="m-3 text-4xl italic text-[#E1CCA8]">
          HorizonAuto Imports
        </h1>
        <section>
          <Link href="/employees">
            <button
              type="submit"
              className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              Consultores
            </button>
          </Link>
          <Link href="/">
            <button
              type="submit"
              className="bg-[#E1CCA8] m-2 w-fit h-fit text-white rounded-md p-2 hover:bg-[#a68855] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              Dashboard
            </button>
          </Link>
        </section>
      </header>
    );
}