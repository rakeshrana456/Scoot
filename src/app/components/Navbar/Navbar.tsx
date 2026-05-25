import Typography from "@/app/Typography/Typography";
import Button from "@/app/Button/Button";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center mt-10 ">
          <div className="flex items-center gap-20">
            <div>
              <Typography
                variant="heading"
                className="text-[45px] text-[#555E6F]"
              >
                scoot
              </Typography>
            </div>
            <div className="flex flex-row">
              <ul className="flex gap-5">
                <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> About</Typography>
                 <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> Location</Typography>
              <Typography variant="paragraph" className="text-[18px] text-[#9A9DA2]"> Carrers</Typography>
              </ul>
            </div>
          </div>
          <div>
            <Button variant="primary">
          <Typography variant="paragraph">Get Scootin</Typography>   
                
                </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
