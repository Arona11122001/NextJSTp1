import Link from "next/link";

function Home () {
  return (
    <div>
      <h1 className="font-bold text-2xl py-5 text-black-700">Project Tp Lab Gamma</h1>

      <Link
       className="px-3 transition hover:text-red-500 font-bold" style={{ color: "yellow" }}
       href="/product">
        Products
        </Link>

      <Link
       className="px-3 transition hover:text-teal-500 font-bold" style={{ color: "green" }}
       href="/MoviesList">
        Movies
        </Link>

      <Link
       className="px-3 transition hover:text-teal-500 font-bold" style={{ color: "blue" }}
       href="/about">
        About
        </Link>
        

    </div>
  );
};

export default Home;