import Image from "next/image";
import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import { cityData } from "@/app/staticData/data";

export default function City() {
  interface CityData {
    title: string;
    description: string;
    buttonText: string;
    image: {
      src: string;
    };
  }

  return (
    <>
      <section className="mt-20 px-5 overflow-hidden">
        <div className="container mx-auto relative">
          {cityData.map((item: CityData, index) => (
           <div
  key={index}
  className="grid lg:grid-cols-2 grid-cols-1 gap-14 lg:gap-23 items-center mb-20"
>

  {/* Right Content */}
  <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
    <Typography
      variant="heading"
      className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-full lg:max-w-[462px] leading-tight"
    >
      {item.title}
    </Typography>

    <Typography
      variant="paragraph"
      className="text-[#A2A7AD] text-[15px] sm:text-[16px] max-w-full lg:max-w-[450px]"
    >
      {item.description}
    </Typography>

    <Button variant="primary" className="w-fit">
      {item.buttonText}
    </Button>
  </div>

  {/* Left Image */}
  <div className="flex items-center justify-center lg:justify-start relative order-2 lg:order-1">

    {/* Background Pattern */}
    <div className=" absolute -left-16 lg:-left-82  lg:top-0 z-20">
      <Image
        src="/City/tick-icon (1).png"
        alt="tick icon"
        width={500}
        height={500}
        className="w-[220px] lg:w-[364px] h-auto object-cover"
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
    </>
  );
}