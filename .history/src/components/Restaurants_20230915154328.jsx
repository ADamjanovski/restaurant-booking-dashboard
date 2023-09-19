import { useState } from "react";
import Card from "./UI/Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (
    <div className="w-full">
      <Card>
        <button className="text-center bg-accent rounded-lg">Add a Restaurant</button>
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
