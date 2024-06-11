import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 mx-auto flex w-full justify-between border-[1px] border-red-100 p-4">
      <p className="text-2xl text-blue-300">Jay</p>

      <ul className="flex gap-4">
        <li>
          <Link href="#about">{`// about`}</Link>
        </li>
        <li>
          <Link href="#experience">{`// experience`}</Link>
        </li>
        <li>
          <Link href="#contact">{`// contact`}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
