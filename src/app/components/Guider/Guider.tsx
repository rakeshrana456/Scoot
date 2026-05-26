import Image from "next/image";
import { guide } from "@/app/staticData/data";
import Typography from "@/app/Typography/Typography";

export default function Guider() {
  interface GuideData {
    id: string;
    image: string;
    heading: string;
    paragraph: string;
  }

  return (
    <section className="mt-20 overflow-hidden">
      <div className="relative">
        
        {/* Background Line */}
        <div className="hidden lg:block w-full max-w-305 h-5 bg-[#5a595346] absolute top-12 left-0"></div>

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:gap-8">
            
            {guide.map((item: GuideData) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 max-w-full lg:max-w-[320px] text-center lg:text-left items-center lg:items-start mx-auto"
              >
                
                {/* Icon */}
                <div className="relative z-10">
                  <Image
                    src={item?.image}
                    alt={item.heading}
                    height={100}
                    width={100}
                    className="w-20 h-20 sm:w-23 sm:h-23 lg:w-25 lg:h-25"
                  />
                </div>

                {/* Heading */}
                <div>
                  <Typography
                    variant="heading"
                    className="text-[#525C68] text-[22px] sm:text-[24px]"
                  >
                    {item.heading}
                  </Typography>
                </div>

                {/* Paragraph */}
                <div>
                  <Typography
                    variant="paragraph"
                    className="text-[#A2A7AD] text-[15px] sm:text-[16px] leading-7"
                  >
                    {item.paragraph}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}