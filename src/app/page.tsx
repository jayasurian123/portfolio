import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-4 gap-x-4">
        <section className="col-span-1 lg:col-span-2">
          <div className="lg:fixed lg:w-min">
            <div className="mt-10">
              <h1 className="lg:text-3xl xl:text-4xl">jayasurian</h1>
              <h2 className="lg:text-6xl xl:text-8xl text-sky-300">makkoth.</h2>
              <p>
                Or you can call me{' '}
                <span className="text-xl text-sky-200">"jay"</span>
              </p>
            </div>
            <h3 className="mt-10 text-2xl text-sky-300">Software Engineer</h3>
            <div className="mt-4 flex flex-col gap-y-2">
              <p className="text-sm">Hi, thanks for looking around :) </p>
              <p className="text-sm">
                I'm a fullstack developer heavily focused on frontend! These
                days work as a freelancer.
              </p>
              <p>Berlin, Germany</p>
              <button className="border-2 w-max py-2 px-3 mt-4">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
        <section className="col-span-1 lg:col-span-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            odio veritatis nihil! Facilis dolor omnis sed, accusantium ad sit
            dolorem sunt doloribus nostrum amet ipsam saepe nesciunt? Expedita,
            qui eum.
          </p>
        </section>
      </div>
    </main>
  );
}
