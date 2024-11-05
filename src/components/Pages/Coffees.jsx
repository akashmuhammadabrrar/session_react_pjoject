import { useLoaderData } from "react-router-dom";
import Card from "../Card";

const Coffees = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default Coffees;
