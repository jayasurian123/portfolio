"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    if (resolvedTheme) {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    }
  }

  return (
    <nav className="sticky top-0 mx-auto flex w-full justify-between bg-primary-foreground p-4">
      <p className="text-blue-300">Jay</p>

      <ul className="flex items-center gap-4">
        <li>
          <Link href="#about">{`// about`}</Link>
        </li>
        <li>
          <Link href="#experience">{`// experience`}</Link>
        </li>
        <li>
          <Link href="#contact">{`// contact`}</Link>
        </li>
        <li>
          <Button variant="link">
            <Icon
              icon={
                resolvedTheme === "dark"
                  ? "line-md:sun-rising-filled-loop"
                  : "line-md:moon-loop"
              }
              onClick={toggleTheme}
              className="text-2xl"
            />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
