import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Enquiry from "./enquiry/Enquiry";
import Welcome from "./welcome/Welcome";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className=" flow-root">
        <section>
          <Hero />
          <Enquiry />
          <Welcome />
        </section>
      </main>
    </>
  );
};

export default Home;
