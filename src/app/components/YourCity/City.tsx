import Image from "next/image";
import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import { cityData } from "@/app/staticData/data";
 interface CityData {
    title: string;
    description: string;
    buttonText: string;
    image: {
      src: string;
    };
  }
  interface CityProps{
    items:CityData
  }

export default function City({ items }: CityProps) {
 

  return (
    <>
      <section className="mt-20 px-5 overflow-hidden">
        <div className="container mx-auto relative">
          
            <div
            
              className="grid lg:grid-cols-2 grid-cols-1 gap-14 lg:gap-23 items-center mb-20"
            >

             
              <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
                <Typography
                  variant="heading"
                  className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-full lg:max-w-115 leading-tight"
                >
                  {items.title}
                </Typography>

                <Typography
                  variant="paragraph"
                  className="text-[#A2A7AD] text-[15px] sm:text-[16px] max-w-full lg:max-w-113"
                >
                  {items.description}
                </Typography>

                <Button variant="primary" className="w-fit">
                  {items.buttonText}
                </Button>
              </div>

              
              <div className="flex items-center justify-center lg:justify-start relative order-2 lg:order-1">

                
                <div className=" absolute -left-16 lg:-left-82  lg:top-0 z-20">
                  <Image
                    src="/City/tick-icon (1).png"
                    alt="tick icon"
                    width={500}
                    height={500}
                    className="w-55 lg:w-91 h-auto object-cover"
                  />
                </div>

               
                <div className="w-65 h-65 sm:w-87.5 sm:h-87.5 lg:w-100 lg:h-100 rounded-full overflow-hidden relative z-10">
                  <Image
                    src={items?.image?.src}
                    alt="bike"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          
        </div>
      </section>
    </>
  );
}