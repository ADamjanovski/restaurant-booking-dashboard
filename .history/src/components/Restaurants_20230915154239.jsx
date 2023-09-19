import { useState } from "react";
import Card from "./UI/Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (
    <div c>
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
    </div>
  );
};

export default Restaurants;
