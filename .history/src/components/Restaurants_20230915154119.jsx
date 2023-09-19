import { useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (<div>
    <table>
        <thead>
            <tr>
                <th>Restaurant </th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
    </table>
  </div>)
};

export default Restaurants;
