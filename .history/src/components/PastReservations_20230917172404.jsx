import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const PastReservations = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState();
  const request = {
    url: `http://localhost:3000/api/dashboard/pastReservations/${
      authCtx.user.restaurantId
    }/${reservations !== undefined ? reservations.length : 0}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    if (reservations === undefined) {
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
            {reservations &&
              reservations.map((reservation) => {
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
          {reservations && reservations.length === 0 && (
            <p>No reservations yet!!!</p>
          )}
        </table>
      </Card>
    </div>
  );
};

export default PastReservations;
