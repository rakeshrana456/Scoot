"use client";

import { useState } from "react";
import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center m-2  px-4 lg:px-0">

          {/* Logo */}
          <div>
            <Typography
              variant="heading"
              className="text-[45px] text-[#555E6F] cursor-pointer"
            >
              scoot
            </Typography>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-20">
            <div>
              <ul className="flex gap-5 cursor-pointer">
                <Typography
                  variant="paragraph"
                  className="text-[18px] text-[#9A9DA2] hover:text-purple-300"
                >
                  About
                </Typography>

                <Typography
                  variant="paragraph"
                  className="text-[18px] text-[#9A9DA2]  hover:text-purple-300"
                >
                  Location
                </Typography>

                <Typography
                  variant="paragraph"
                  className="text-[18px] text-[#9A9DA2]  hover:text-purple-300"
                >
                  Carrers
                </Typography>
              </ul>
            </div>

            <div>
              <Button variant="primary">
                <Typography variant="paragraph">
                  Get Scootin
                </Typography>
              </Button>
            </div>
          </div>

          {/* Hamburger */}
          <div
  className="lg:hidden flex flex-col gap-1 cursor-pointer"
  onClick={() => setIsOpen(!isOpen)}
>
  <span
    className={`w-7 h-1 bg-[#555E6F] rounded transition-all duration-300 ${
      isOpen ? "rotate-45 translate-y-2" : ""
    }`}
  ></span>

  <span
    className={`w-7 h-1 bg-[#555E6F] rounded transition-all duration-300 ${
      isOpen ? "opacity-0" : ""
    }`}
  ></span>

  <span
    className={`w-7 h-1 bg-[#555E6F] rounded transition-all duration-300 ${
      isOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  ></span>
</div>
        </div>

        
        <div
  className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen
      ? "max-h-[400px] opacity-100 translate-y-0 mt-5"
      : "max-h-0 opacity-0 -translate-y-5"
  }`}
>
  <div className="bg-white shadow-md py-5 px-4">
    <ul className="flex flex-col gap-5 cursor-pointer">

      <Typography
        variant="paragraph"
        className="text-[18px] text-[#9A9DA2] hover:text-purple-300 transition-colors duration-300"
      >
        About
      </Typography>

      <Typography
        variant="paragraph"
        className="text-[18px] text-[#9A9DA2] hover:text-purple-300 transition-colors duration-300"
      >
        Location
      </Typography>

      <Typography
        variant="paragraph"
        className="text-[18px] text-[#9A9DA2] hover:text-purple-300 transition-colors duration-300"
      >
        Careers
      </Typography>

      <Button variant="primary">
        <Typography variant="paragraph">
          Get Scootin
        </Typography>
      </Button>

    </ul>
  </div>
</div>
      </nav>
    </>
  );
}