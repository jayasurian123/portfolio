import Navbar from "@/components/Navbar";
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
                <span className="text-xl text-sky-200">"jay"</span>
              </p>
            </div>
            <h3 className="mt-10 text-2xl text-sky-300">Software Engineer</h3>
            <div className="mt-4 flex flex-col gap-y-2 text-sm">
              <p>Hi, thanks for looking around :) </p>
              <p>
                I'm a fullstack developer heavily focused on frontend! These
                days work as a freelancer.
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
          <h4 className="text-4xl">What do I do.</h4>
          <p className="mt-3">
            I am a software professional for last 18 years! I do fullstack
            development but heavily focused on frontend development. Hands on
            frontend architecture to react native development in these years :)
          </p>
          <p className="mt-10">Here are few techs I do these days</p>
          <div className="mt-4 flex flex-col gap-5">
            {/* {<ul className="grid grid-cols-2 gap-2 w-1/2">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:javascript" className="text-2xl" />
                Javascript
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:typescript" className="text-2xl" />
                Typescript
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:nodejs" className="text-2xl" />
                Node
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:react" className="text-2xl" />
                React
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:nextjs" className="text-2xl" />
                NextJs
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:prisma" className="text-2xl" />
                Prisma
              </li>
            </ul>} */}
            <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
              Frontend Centric
            </h5>
            <ul className="grid w-1/2 grid-cols-2 gap-4">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:javascript" className="text-2xl" />
                Javascript
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:typescript" className="text-2xl" />
                Typescript
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:react" className="text-2xl" />
                React
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:nextjs" className="text-2xl" />
                NextJs
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:redux" className="text-2xl" />
                redux
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:tailwindcss" className="text-2xl" />
                Tailwind
              </li>
            </ul>

            <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
              Backend Centric
            </h5>
            <ul className="grid w-1/2 grid-cols-2 gap-4">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:nodejs" className="text-2xl" />
                Node
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon
                  icon="fa6-brands:node-js"
                  className="text-2xl text-green-300"
                />
                Express
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:prisma" className="text-2xl" />
                Prisma
              </li>
            </ul>

            <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
              Mobile development
            </h5>
            <ul className="grid w-1/2 grid-cols-2 gap-4">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:react" className="text-2xl" />
                React Native
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="ion:logo-pwa" className="text-2xl text-green-300" />
                Web PWA
              </li>
            </ul>

            <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
              UI Frameworks
            </h5>
            <ul className="grid w-1/2 grid-cols-2 gap-4">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:antdesign" className="text-2xl" />
                AntDesign
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon
                  icon="simple-icons:expo"
                  className="text-xl text-green-300"
                />
                Expo
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon
                  icon="devicon:materialui"
                  className="text-2xl text-green-300"
                />
                Material UI
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon
                  icon="simple-icons:cssmodules"
                  className="text-2xl text-green-300"
                />
                CSS Modules
              </li>
            </ul>

            <h5 className="my-2 w-max border-b-[1px] border-cyan-50 text-sky-300">
              Tools
            </h5>
            <ul className="grid w-1/2 grid-cols-2 gap-4">
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:vscode" className="text-2xl" />
                VSCode
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon icon="devicon:git" className="text-2xl text-green-300" />
                Git
              </li>
              <li className="flex gap-x-2 align-middle">
                <Icon
                  icon="devicon:linux"
                  className="text-2xl text-green-300"
                />
                Scripting
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
