import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex p-4 justify-between border-red-100 border-[1px] sticky w-full mx-auto top-0">
      <p className="text-2xl text-blue-300">Jay</p>

      <ul className="flex gap-4">
        <li>
          <Link href="">// about</Link>
        </li>
        <li>
          <Link href="">// experience</Link>
        </li>
        <li>
          <Link href="">// works</Link>
        </li>
        <li>
          <Link href="">// contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
