import { useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (<div>
    <table>
        <thead>
            <tr>
                <th>Restaurant Name</th>
            </tr>
        </thead>
    </table>
  </div>)
};

export default Restaurants;
