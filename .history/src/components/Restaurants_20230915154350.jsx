import { useState } from "react";
import Card from "./UI/Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (
    <div className="w-full">
      <Card>
        <div></div>
        <button className=" bg-accent rounded-lg p-2">Add a Restaurant</button>
        <table className="w-full">
          <thead>
            <tr>
              <th>Restaurant </th>
              <th>Email</th>
              <th>Tables</th>
            </tr>
          </thead>
        </table>
      </Card>
    </div>
  );
};

export default Restaurants;
