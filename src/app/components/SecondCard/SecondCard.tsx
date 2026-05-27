import City from "../YourCity/City";
interface ItemType {
  title: string;
  description: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  };
}

interface CardProps {
  data: ItemType[];
  
}

export default function SecondCard({ data }: CardProps) {
  return (
    <>
      {data.map((item, index) => (
        <City key={index} items={item} />
      ))}
    </>
  );
}