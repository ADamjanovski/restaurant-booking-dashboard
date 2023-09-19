import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const UpcomingReservations = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState();
  console.log(authCtx.user.restaurantId);
  const request = {
    url: `http://localhost:3000/api/dashboard/upcomingReservations/${authCtx.user.restaurantId}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${authCtx.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    if (reservations === undefined) {
      useHttp(request).then((data) => setReservations(data));
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
              <th className="border font-medium border-neutral-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.map((reservation) => {
                const date = new Date(reservation.datetime);
                return (
                  <tr key={reservation.id}>
                    <td className="text-center">{reservation.customer.name} {reservation.customer.lastName}</td>
                    <td className="text-center">{date.toDateString()}</td>
                    <td className="text-center">{reservation.tableId}</td>
                    {reservation.status ==="ACCE"<td className="text-center text-sm">
                      {reservation.status}
                    </td>}
                  </tr>
                );
              })}
          </tbody>
          {reservations && reservations.length === 0 && (
            <p>No upcoming reservations!!</p>
          )}
        </table>
      </Card>
    </div>
  );
};

export default UpcomingReservations;
