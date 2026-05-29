import Card from "../components/Card/Card"
import SecondCard from "../components/SecondCard/SecondCard";
import { Mobility, Urbandata } from "@/app/staticData/data";
import Faqs from "./Faq/Faqs";

export default function About() {
    return (
        <>
            <section
                className="relative h-50 lg:h-62.5 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/About/Hero-section-img.png')",
                }}
            >

                <div className="absolute inset-0 bg-[#2F3B59]/70"></div>


                <div className="container mx-auto h-full flex items-center  relative z-10">
                    <h1 className="text-white text-[40px] sm:text-[48px] lg:text-[56px] font-bold">
                        About
                    </h1>
                </div>
            </section>
            <Card data={Mobility} />
            <SecondCard data={Urbandata} />
            <section className="py-20 bg-[#F2F5F9]">
                <div className="container mx-auto px-5">

                    <div className="text-center mb-16">
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#495567]">
                            Our values
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">


                        <div className="flex flex-col items-center text-center relative">


                            <div className="relative">
                                <div className="w-60 h-60 rounded-full overflow-hidden">
                                    <img
                                        src="/About/Mask group (2).png"
                                        alt="Our tech"
                                        className="w-full h-full object-cover hover:scale-115 transition-all duration-700 ease-in-out cursor-pointer"
                                    />
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center text-[#495567] font-bold text-[24px]">
                                    01
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-16 flex flex-col gap-6">
                                <h3 className="text-[28px] font-bold text-[#495567]">
                                    Our tech
                                </h3>

                                <p className="text-[#939CAA] max-w-87.5 leading-7">
                                    We’re using cutting edge technology to drive accessible urban
                                    transportation forward. Our fully electric scooters are a joy to
                                    ride!
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center relative">

                            <div className="relative">
                                <div className="w-60 h-60 rounded-full overflow-hidden">
                                    <img
                                        src="/About/Mask group (3).png"
                                        alt="Our integrity"
                                        className="w-full h-full object-cover hover:scale-115 transition-all duration-700 ease-in-out cursor-pointer"
                                    />
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center text-[#495567] font-bold text-[24px]">
                                    02
                                </div>
                            </div>

                            <div className="mt-16 flex flex-col gap-6">
                                <h3 className="text-[28px] font-bold text-[#495567]">
                                    Our integrity
                                </h3>

                                <p className="text-[#939CAA] max-w-87.5 leading-7">
                                    We are fully committed to deliver a great yet safe, sustainable
                                    micro-mobility experience in every city we serve.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center relative">

                            <div className="relative">
                                <div className="w-60 h-60 rounded-full overflow-hidden">
                                    <img
                                        src="/About/Mask group (4).png"
                                        alt="Our community"
                                        className="w-full h-full object-cover hover:scale-115 transition-all duration-700 ease-in-out cursor-pointer"
                                    />
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-20 h-20 rounded-full bg-[#FCB72B] flex items-center justify-center text-[#495567] font-bold text-[24px]">
                                    03
                                </div>
                            </div>

                            <div className="mt-16 flex flex-col gap-6">
                                <h3 className="text-[28px] font-bold text-[#495567]">
                                    Our community
                                </h3>

                                <p className="text-[#939CAA] max-w-87.5 leading-7">
                                    We support every community we serve. All workers are paid a living
                                    wage based on their location and are Scoot employees.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Faqs />

        </>
    )
}