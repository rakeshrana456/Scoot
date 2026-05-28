import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
import Image from "next/image";

interface ItemType {
  title: string;
  description: string;
  buttonText: string;
  ShowButton: boolean
  image: {
    src: string;
    alt: string;
  };
}

interface TelematryProps {
  items: ItemType;
  reverse?: boolean

}

export default function Telematry({ items, reverse }: TelematryProps) {



  return (
    <section className=" my-5 lg:my-20 px-5 overflow-hidden">
      <div className="container mx-auto relative">

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${reverse ? "lg:flex-row-reverse" : ""
            }`}
        >


          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <Typography
              variant="heading"
              className="text-[#525C68] text-[32px] sm:text-[40px] lg:text-[48px] max-w-full lg:max-w-120 leading-tight"
            >
              {items.title}
            </Typography>

            <Typography
              variant="paragraph"
              className="text-[#A2A7AD] max-w-full lg:max-w-110 text-[15px] sm:text-[16px]"
            >
              {items.description}
            </Typography>

            {items.ShowButton && (
              <Button variant="primary" className="w-fit">
                {items.buttonText}
              </Button>
            )}
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
                src={items?.image?.src}
                alt={items?.image?.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-115 transition-all duration-700 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}