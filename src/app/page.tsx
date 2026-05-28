
import Hero from "./components/Hero/Hero";
import Guider from "./components/Guider/Guider"
import Telematry from "./components/Telematry/Telematry";
import City from "./components/YourCity/City";
import Hassel from "./components/Hassel/Hassel";
import Card from "./components/Card/Card";
import SecondCard from "./components/SecondCard/SecondCard";
import { Rept, HasselData, cityData} from "@/app/staticData/data";

export default function Home() {
  return (
    <>
     <main className="flex flex-col ">
      
       <Hero/>
       <Guider/>
       <Card data={Rept}/>   
       <SecondCard data={cityData}/>
       <Card data={HasselData}/>
      
  
      </main>
    </>
  );
}
