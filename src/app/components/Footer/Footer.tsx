import Typography from "@/app/Typography/Typography"
import Button from "@/app/Button/Button"
import Image from "next/image"
export default function Footer() {
  const arr:string []=["/Footer/facebook.png","/Footer/twitter.png","/Footer/insta.png",]
  return (
    

    <>
      <section className="bg-[#495466] h-100">

        <div className="container mx-auto h-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">

            <div className="max-w-109">
              <Typography
                variant="heading"
                className="text-[48px]"
              >
                Sign up and Scoot off today
              </Typography>
            </div>

            <div className="flex gap-5 items-center justify-end">

              <Image
                src="/Footer/app-store-btn.png"
                alt="App Store"
                width={200}
                height={200}
                className="max-w-49 max-h-15 cursor-pointer"
              />

              <Image
                src="/Footer/google-play-btn.png"
                alt="Google Store"
                width={200}
                height={200}
                className="max-w-49 max-h-15 cursor-pointer"
              />

            </div>

          </div>

        </div>
<div className="bg-[#333A44] flex justify-between items-center p-6">
  <div className="container mx-auto flex justify-between">
          <div className="flex items-center gap-20">
            <div>
              <Typography
                variant="heading"
                className="text-[45px] text-[#555E6F] cursor-pointer"
              >
                scoot
              </Typography>
            </div>
            <div className="flex flex-row">
              <ul className="flex gap-5 cursor-pointer">
                <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> About</Typography>
                <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> Location</Typography>
                <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> Carrers</Typography>
              </ul>
            </div>
          </div>    
           <div className="flex gap-5">
  {arr.map((item, index) => (
    <div key={index}>
      <Image
        src={item}
        alt="social icon"
        width={30}
        height={30}
        className="cursor-pointer"
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