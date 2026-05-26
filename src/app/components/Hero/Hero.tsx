import Typography from "@/app/Typography/Typography";
import Image from "next/image";
import { data } from "@/app/staticData/data";
import Button from "@/app/Button/Button";

export default function Hero() {
  interface HeroData {
    heading: string;
    paragraph: string;
    btnText: string;
  }

  return (
    <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero/hero.png"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

     
      <div className="absolute inset-0 bg-black/4"></div>

   
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/3 w-82 h-4 bg-[#FCB72B] z-10"></div>

      
      <div className="relative z-10 container mx-auto min-h-170 flex items-center px-5">
        {data.map((item: HeroData, index) => (
          <div
            key={index}
            className="max-w-full lg:max-w-175 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start h-115"
          >
            
         
            <Typography
              variant="heading"
              className="text-white text-[38px] sm:text-[52px] lg:text-[64px] font-bold leading-tight lg:leading-19"
            >
              {item.heading}
            </Typography>

            
            <div className="flex flex-col items-center lg:items-start gap-8 lg:ml-15 max-w-full lg:max-w-133">
              
              <Typography
                variant="paragraph"
                className="text-white text-[17px] sm:text-[18px] leading-7 lg:leading-8"
              >
                {item.paragraph}
              </Typography>

              <Button variant="primary">
                <Typography
                  variant="paragraph"
                  className="text-[16px] sm:text-[18px]"
                >
                  {item.btnText}
                </Typography>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}