import Image from "next/image"
import Typography from "@/app/Typography/Typography"
import Button from "@/app/Button/Button";
import { cityData } from "@/app/staticData/data";
export default function City() {
    return (

        <>
            <section className="mt-20">
                <div className="container mx-auto">
                    {cityData.map((item, index) => (
                        <div className="grid grid-cols-2 gap-23 ">
                            <div className="flex items-center justify-start">
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
                            <div key={index} className="flex flex-col gap-12 ">
                                <Typography variant="heading" className="text-[#525C68] text-[48px] max-w-116 leading-14">
                                    {item.title}
                                </Typography>

                                <Typography variant="paragraph" className="text-[#A2A7AD] text-[16px] max-w-113 ">
                                    {item.description}
                                </Typography>

                                <Button variant="primary" className="w-fit">
                                    {item.buttonText}
                                </Button>
                            </div>

                        </div>

                    ))}

                </div>
                
            </section>

        </>
    )

}