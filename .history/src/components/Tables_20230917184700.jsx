import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const Tables = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [tables, setTables] = useState();
  const request = {
    url: `http://localhost:3000/api/dashboard/pasttables/${
      authCtx.user.restaurantId
    }/${tables !== undefined ? tables.length : 0}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    if (tables === undefined) {
      useHttp(request).then((data) => console.log(data));
    }
  }, []);
  return (
    <div className=" w-full">
      <Card>
        <table className="w-full border-spacing-3 border-collapse ">
          <thead>
            <tr className="">
              <th className="border font-medium border-neutral-500">User</th>
              <th className="border font-medium border-neutral-500">
                DateTime
              </th>
              <th className="border font-medium border-neutral-500">Table</th>
            </tr>
          </thead>
          <tbody className="">
            {tables &&
              tables.map((reservation) => {
                const date = new Date(reservation.datetime);
                return (
                  <tr key={reservation.id} className="pt-4">
                    <td className="text-center mt-4">
                      {reservation.customer.name}{" "}
                      {reservation.customer.lastName}
                    </td>
                    <td className="text-center mt-4">{date.toDateString()}</td>
                    <td className="text-center mt-4">{reservation.tableId}</td>
                  </tr>
                );
              })}
          </tbody>
          {tables && tables.length === 0 && (
            <p>No tables yet!!!</p>
          )}
        </table>
      </Card>
    </div>
  );
};

export default Tables;
