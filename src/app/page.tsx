import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className=" flow-root">
        <section>
          <Hero />
        </section>
      </main>
    </>
  );
};

export default Home;
