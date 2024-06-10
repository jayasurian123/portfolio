import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <Navbar />
      <div className="mt-4 grid grid-cols-1 gap-x-4 lg:grid-cols-5">
        <section className="col-span-1 lg:col-span-2">
          <div className="lg:fixed lg:w-min">
            <div className="mt-10">
              <h1 className="lg:text-3xl xl:text-4xl">jayasurian</h1>
              <h2 className="text-sky-300 lg:text-6xl xl:text-8xl">makkoth.</h2>
              <p>
                Or you can call me{" "}
                <span className="text-xl text-sky-200">&quot;jay&quot;</span>
              </p>
            </div>
            <h3 className="mt-10 text-2xl text-sky-300">Software Engineer</h3>
            <div className="mt-4 flex flex-col gap-y-2 text-sm">
              <p>Hi, thanks for looking around :) </p>
              <p>
                I&apos;m a fullstack developer heavily focused on frontend!
                These days work as a freelancer.
              </p>
              <p className="mt-4 flex gap-x-2">
                <Icon
                  icon="ep:location"
                  className="cursor-pointer text-2xl hover:text-blue-300"
                />
                <span>Berlin, Germany</span>
              </p>
              <button className="mt-4 w-max border-2 px-3 py-2">
                Get in Touch
              </button>
            </div>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link
                    href="https://twitter.com/jayasurian123"
                    target="_blank"
                  >
                    <Icon
                      icon="fa6-brands:x-twitter"
                      className="cursor-pointer text-2xl hover:text-blue-300"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/jayasurian123" target="_blank">
                    <Icon
                      icon="fa6-brands:github"
                      className="cursor-pointer text-2xl hover:text-blue-300"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/jayasurianmakkoth/"
                    target="_blank"
                  >
                    <Icon
                      icon="fa6-brands:linkedin"
                      className="cursor-pointer text-2xl hover:text-blue-300"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="col-span-1 mt-6 lg:col-span-3">
          <TechStack />
        </section>
      </div>
    </main>
  );
}
