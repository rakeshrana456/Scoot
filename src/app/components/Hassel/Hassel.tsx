import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import Image from "next/image";
import { HasselData } from "@/app/staticData/data";

export default function Hassel() {
  interface HasselData {
    title: string;
    description: string;
    buttonText: string;
    image: {
      src: string;
    };
  }

  return (
    <section className="mt-10 px-5 overflow-hidden">
      <div className="container mx-auto relative">
        {HasselData.map((item: HasselData, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12  mb-20"
          >

            <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
              <Typography
                variant="heading"
                className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-[320px] leading-tight"
              >
                {item.title}
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[#A2A7AD] text-[15px] sm:text-[16px] max-w-full lg:max-w-115"
              >
                {item.description}
              </Typography>

              <Button variant="primary" className="w-fit">
                {item.buttonText}
              </Button>
            </div>


            <div className="flex items-center justify-center lg:justify-end relative">


              <div className=" absolute -right-20 lg:-right-72 top-10 z-20">
                <Image
                  src="/Hassel/tick-icon (2).png"
                  alt="TicIcon"
                  width={500}
                  height={500}
                  className="w-55 lg:w-110  object-cover"
                />
              </div>

              
              <div className="w-full h-65 sm:w-88 sm:h-88 lg:w-full lg:h-125 rounded-full overflow-hidden relative z-10">
                <Image
                  src={item?.image?.src}
                  alt="bike"
                  width={500}
                  height={500}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}