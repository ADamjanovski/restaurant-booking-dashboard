import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";

const UpcomingReservations = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reservations, setReservations] = useState();
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
      useHttp(request).then((data) => console.log(data));
    }
  }, []);
  const StatusHandler = (id, status) => {
    setIsLoading(true);
    const acceptRequest = {
      url: `http://localhost:3000/api/dashboard/updateStatus`,
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        status: status,
      }),
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = useHttp(acceptRequest).then((data) => setIsLoading(false));
  };
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
                    {reservation.status === "CONFIRMED" ? (
                      <td className="text-center text-sm">
                        {reservation.status}
                      </td>
                    ) : reservation.status === "DECLINED" ? (
                      <td className="text-center text-sm">
                        {reservation.status}
                      </td>
                    ) : (
                      <td className="text-center text-sm flex justify-around mt-4">
                        <button
                          className="rounded-lg border bg-green-500 p-2 b"
                          value="CONFIRMED"
                          onClick={() =>
                            StatusHandler(reservation.id, "CONFIRMED")
                          }
                        >
                          CONFIRM{" "}
                        </button>
                        <button
                          className="rounded-lg border bg-red-500 p-2 b"
                          value="DECLINED"
                          onClick={() =>
                            StatusHandler(reservation.id, "DECLINED")
                          }
                        >
                          DECLINE
                        </button>
                      </td>
                    )}
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
