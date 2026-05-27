import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import Image from "next/image";
import { Rept } from "@/app/staticData/data";

export default function Telematry() {
  interface Telematry {
    title: string;
    description: string;
    buttonText: string;
    image: {
      src: string;
      alt: string;
    };
  }

  return (
    <section className=" my-5 lg:my-20 px-5 overflow-hidden">
      <div className="container mx-auto relative">
        {Rept.map((item: Telematry, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center "
          >
            
        
            <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
              <Typography
                variant="heading"
                className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-full lg:max-w-120 leading-tight"
              >
                {item.title}
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[#A2A7AD] max-w-full lg:max-w-110 text-[15px] sm:text-[16px]"
              >
                {item.description}
              </Typography>

              <Button variant="primary" className="w-fit">
                {item.buttonText}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-end relative">
              
              <div className=" absolute -right-16 lg:-right-32 top-10 lg:top-20 z-20">
                <Image
                  src="/Telematray/TicIcon.png"
                  alt="pattern"
                  width={500}
                  height={500}
                  className=" lg:w-full h-auto object-cover"
                />
              </div>

              <div className="w-65 h-65 sm:w-88 sm:h-88 lg:w-100 lg:h-100 rounded-full overflow-hidden relative z-10">
                <Image
                  src={item?.image?.src}
                  alt={item?.image?.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}