import Typography from "@/app/Typography/Typography"
import Button from "@/app/Button/Button"
import Image from "next/image"
export default function Footer() {
  const arr = [
    {
      src: "/Footer/facebook.png",
      hover: "hover:bg-[#1877F2]", // Facebook blue
    },
    {
      src: "/Footer/twitter.png",
      hover: "hover:bg-[#1DA1F2]", // Twitter blue
    },
    {
      src: "/Footer/insta.png",
      hover: "hover:bg-[#E4405F]", // Instagram pink
    },
  ];
  return (
    

    <>
      <section className="bg-[#495466] h-100">

       <div className=" container mx-auto h-full px-5 py-10 lg:py-0">

  <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-10">

    <div className="max-w-109 mx-auto lg:mx-0 text-center lg:text-left">
      <Typography
        variant="heading"
        className="text-[32px] sm:text-[40px] lg:text-[48px]"
      >
        Sign up and Scoot off today
      </Typography>
    </div>

    <div className="flex gap-5 items-center justify-center lg:justify-end flex-wrap">

      <Image
        src="/Footer/app-store-btn.png"
        alt="App Store"
        width={200}
        height={200}
        className="w-35 sm:w-45 lg:max-w-49 h-15 cursor-pointer"
      />

      <Image
        src="/Footer/google-play-btn.png"
        alt="Google Store"
        width={200}
        height={200}
        className="w-35 sm:w-45 lg:max-w-49 h-15 cursor-pointer"
      />

    </div>

  </div>

</div>
<div className="bg-[#333A44] flex justify-between items-center p-6">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-5 lg:px-0">

  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

    <div>
      <Typography
        variant="heading"
        className="text-[35px] sm:text-[45px] text-[#555E6F] cursor-pointer text-center lg:text-left"
      >
        scoot
      </Typography>
    </div>

    <div className="flex flex-row">
      <ul className="flex flex-col sm:flex-row items-center gap-5 cursor-pointer">

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

      </ul>
    </div>

  </div>

   <div className="flex gap-5">
          {arr.map((item, index) => (
            <div
              key={index}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${item.hover}`}
            >
              <Image
                src={item.src}
                alt="social icon"
                width={30}
                height={30}
              />
            </div>
          ))}
        </div>

</div>
        </div>
      </section>
      <section className="bg-[#333A44] ">
        
      </section>
    </>
  )
}