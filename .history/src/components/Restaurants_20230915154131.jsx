import { useState } from "react";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();

  return (<div>
    <button>Add </button>
    <table>
        <thead>
            <tr>
                <th>Restaurant </th>
                <th>Email</th>
                <th>Tables</th>
            </tr>
        </thead>
    </table>
  </div>)
};

export default Restaurants;
