import Telematry from "../Telematry/Telematry";

interface ItemType {
  title: string;
  description: string;
  buttonText: string;
  ShowButton:boolean
  image: {
    src: string;
    alt: string;
  };
}

interface CardProps {
  data: ItemType[];
  reverse?:boolean;
}

export default function Card({ data }: CardProps) {
  return (
    <>
      {data.map((item, index) => (
        <Telematry key={index} items={item} />
      ))}
    </>
  );
}