import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  return (
    <header className="flex flex-col gap-y-3 p-3 bg-indigo-800 text-[#FEFAF6] w-full md:flex-row md:gap-x-9 md:h-12 md:w-full">
      <Link href="/" className="text-md font-semibold">
        Country Explorer
      </Link>
      <nav className="flex flex-col gap-y-1 md:flex-row md:gap-x-6">
        <div className="h-full w-px bg-[#EADBC8]"></div>
        <Link
          href="https://github.com/FrancoSanFlo/country-explorer"
          target="_blank"
          className="text-sm font-light hover:underline"
        >
          View on GitHub
        </Link>
        <div className="h-full w-px bg-[#EADBC8]"></div>
        <Link href="#" className="text-sm font-light hover:underline">
          Donate
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;
