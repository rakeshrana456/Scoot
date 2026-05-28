'use client'
import Typography from "@/app/Typography/Typography"
import { Frequently,feq } from "@/app/staticData/data"
import { useState } from "react"
import { ChevronDown } from "lucide-react";
export default function Faqs() {
    const [open, setOpen] = useState<number | null>(null);
    const [openSecond, setOpenSecond] = useState<number | null>(null);

    function handleClick(index: number) {

        setOpen(prev => (prev === index ?  null: index));
       
    }
      function handleClickSec(index: number) {

        setOpenSecond(prev => (prev === index ?  null: index));
       
    }
    return (
        <>     
        <section className="bg-[#ffffff]">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#495567]">
                          FAQ
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                        <div>
                            <Typography
                                className="text-[36px] text-[#525C68]"
                                variant="heading">
                                How it works
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-6">
                            {
                                Frequently.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#F2F5FA] p-5 rounded-xl cursor-pointer"
                                    >
                                        <div onClick={() => handleClick(index)} className="flex justify-between items-center">
                                            <Typography
                                                variant="heading"
                                                className="text-[24px] text-[#525C68]"
                                            >
                                                {data.questionFirst}
                                            </Typography>
                                            <ChevronDown
                                                size={18}
                                                className={`text-amber-600 transition-transform duration-500 ${open === index ? "rotate-180" : ""
                                            }`}/>
                                        </div>
                                        <div
                                            className={`
                                                overflow-hidden
                                                transition-all
                                                duration-500
                                                ease-in-out
                                                ${open === index
                                                    ? "max-h-40 opacity-100 mt-4"
                                                    : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            <Typography
                                                variant="paragraph"
                                                className="text-[16px] text-[#414350]"
                                            >
                                                {data.AnswerFirst}
                                            </Typography>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>




                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20">
                        <div>
                            <Typography
                                className="text-[36px] text-[#525C68]"
                                variant="heading">
                              Safe driving
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-6">
                            {
                                feq.map((data, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#F2F5FA] p-5 rounded-xl cursor-pointer"
                                    >
                                        <div onClick={() => handleClickSec(index)} className="flex justify-between items-center">
                                            <Typography
                                                variant="heading"
                                                className="text-[24px] text-[#525C68]"
                                            >
                                                {data.questionSecond}
                                            </Typography>
                                            <ChevronDown
                                                size={18}
                                                className={`text-amber-600 transition-transform duration-500 ${openSecond === index ? "rotate-180" : ""
                                            }`}/>
                                        </div>
                                        <div
                                            className={`
                                                overflow-hidden
                                                transition-all
                                                duration-500
                                                ease-in-out
                                                ${openSecond === index
                                                    ? "max-h-40 opacity-100 mt-4"
                                                    : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            <Typography
                                                variant="paragraph"
                                                className="text-[16px] text-[#414350]"
                                            >
                                                {data.AnsweSecond}
                                            </Typography>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}