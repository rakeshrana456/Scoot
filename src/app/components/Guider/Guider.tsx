import Image from "next/image";
import { guide } from "@/app/staticData/data";
import Typography from "@/app/Typography/Typography";

export default function Guider() {
  console.log(guide);

  return (
    <section className="mt-20">
      <div className="relative">
        <div className="w-298 h-5 bg-[#5a595346]"></div>
        <div className="container mx-auto relative bottom-15 ">
          <div className="grid grid-cols-3 gap-8">
            {guide.map((item) => (
              <div key={item.id} className="flex flex-col gap-8 max-w-78">
                <div>
                  <Image
                    src={item?.image}
                    alt={item.heading}
                    height={100}
                    width={100}
                  />
                </div>

                <div>
                  <Typography variant="heading" className="text-[#525C68] text-[24px]">
                    {item.heading}
                  </Typography>
                </div>

                <div>
                  <Typography variant="paragraph" className="text-[#A2A7AD] text-[16px]">
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
