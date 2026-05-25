import Typography from "@/app/Typography/Typography";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      {/* Background Image */}
      <Image
        src="/hero/hero.png"
        alt="hero"
        fill
        className="object-cover"
      />

   
      <div className="absolute inset-0 bg-black/50"></div>

     <div className=" absolute top-110 w-75 h-3 bg-[#FCB72B] mt-4"></div>
      <div className="relative z-10 container mx-auto h-full flex items-center">

        <div className="max-w-150 flex flex-col gap-8">

        
          <Typography variant="heading" className="text-white text-[64px] font-bold  leading-19">
            Scooter sharing made simple
          </Typography>

         
          <div className="flex flex-col items-start gap-8 mx-15">

         
         

            
            <p className="text-white text-lg leading-8 ">
              Scoot takes the hassle out of urban mobility. Our bikes are
              placed in convenient locations in each of our cities. Use our
              app to locate the nearest bike, unlock it with a tap, and
              you’re away!
            </p>
<button className="bg-[#FCB72B] text-white px-10 py-4 w-fit font-semibold hover:bg-yellow-400 transition">
            Get Scootin
          </button>
          </div>

          

        </div>

      </div>
    </section>
  );
}