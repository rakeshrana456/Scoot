"use client";

import { useState } from "react";
import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center mt-6 px-4">

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
            <span className="w-7 h-1 bg-[#555E6F]"></span>
            <span className="w-7 h-1 bg-[#555E6F]"></span>
            <span className="w-7 h-1 bg-[#555E6F]"></span>
          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md mt-5 py-5 px-4">
            <ul className="flex flex-col gap-5 cursor-pointer">

              <Typography
                variant="paragraph"
                className="text-[18px] text-[#9A9DA2]"
              >
                About
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[18px] text-[#9A9DA2]"
              >
                Location
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[18px] text-[#9A9DA2]"
              >
                Carrers
              </Typography>

              <Button variant="primary">
                <Typography variant="paragraph">
                  Get Scootin
                </Typography>
              </Button>

            </ul>
          </div>
        )}
      </nav>
    </>
  );
}