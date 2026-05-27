import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Guider from "./components/Guider/Guider"
import Telematry from "./components/Telematry/Telematry";
import City from "./components/YourCity/City";
import Hassel from "./components/Hassel/Hassel";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
     <main className="flex flex-col ">
       <Navbar/>
       <Hero/>
       <Guider/>
       <Telematry/>
       <City/>
       <Hassel/>
       <Footer/>
      </main>
    </>
  );
}
