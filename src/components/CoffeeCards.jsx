import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  // navigate
  const navigate = useNavigate();
  const coffeeData = useLoaderData();
  console.log(coffeeData);

  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...coffeeData].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(coffeeData.slice(0, 6));
    }
  }, [category, coffeeData]);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button onClick={() => navigate("/coffees")} className="btn btn-warning">
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
