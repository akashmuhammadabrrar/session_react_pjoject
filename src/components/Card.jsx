/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ coffee }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative mt-10">
      <Link
        to=""
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
        <figure className="w-full  h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div>
          <h1 className="text-xl">Name:</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
