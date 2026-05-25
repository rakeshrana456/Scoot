import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import Image from "next/image";
import { HasselData } from "@/app/staticData/data";

export default function Hassel() {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        {HasselData.map((item, index) => (
          <div className="grid grid-cols-2 gap-10 ">
            <div key={index} className="flex flex-col gap-12 ">
              <Typography variant="heading" className="text-[#525C68] text-[48px] max-w-80 leading-14">
                {item.title}
              </Typography>

              <Typography variant="paragraph" className="text-[#A2A7AD] text-[16px] max-w-114">
                {item.description}
              </Typography>

              <Button variant="primary" className="w-fit">
                {item.buttonText}
              </Button>
            </div>
            <div className="flex items-center justify-end">

              <div className="w-100 h-100 rounded-full overflow-hidden ">

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