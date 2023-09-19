import { useState } from "react";
import Card from "./UI/Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (
    <div className="w-full">
      <Card>
        <div className="flex flex-col">
          <button className="w-1/3 self-center bg-accent rounded-lg p-2">
            Add a Restaurant
          </button>
          <table className="w-full">
            <thead>
              <tr>
                <th>Restaurant </th>
                <th>Email</th>
                <th>Tables</th>
              </tr>
            </thead>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Restaurants;
