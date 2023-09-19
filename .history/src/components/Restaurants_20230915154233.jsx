import { useState } from "react";
import Card from "./UI/Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (
    <div></div>
    <Card>
      <button>Add a Restaurant</button>
      <table>
        <thead>
          <tr>
            <th>Restaurant </th>
            <th>Email</th>
            <th>Tables</th>
          </tr>
        </thead>
      </table>
    </Card>
  );
};

export default Restaurants;
