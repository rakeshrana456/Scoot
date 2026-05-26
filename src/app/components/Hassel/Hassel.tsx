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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
              <Typography
                variant="heading"
                className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-[320px] leading-tight"
              >
                {item.title}
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[#A2A7AD] text-[15px] sm:text-[16px] max-w-full lg:max-w-[460px]"
              >
                {item.description}
              </Typography>

              <Button variant="primary" className="w-fit">
                {item.buttonText}
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center lg:justify-end relative">
              
              {/* Background Pattern */}
              <div className=" absolute -right-20 lg:-right-32 top-10 z-20">
                <Image
                  src="/Telematray/TicIcon.png"
                  alt="TicIcon"
                  width={500}
                  height={500}
                  className="w-[220px] lg:w-[440px] h-auto object-cover"
                />
              </div>

              {/* Main Image */}
              <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden relative z-10">
                <Image
                  src={item?.image?.src}
                  alt="bike"
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