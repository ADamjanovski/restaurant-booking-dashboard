import { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import AuthContext from "../context/auth-context";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
import NewTable from "./NewTable";

const Tables = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [tables, setTables] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const request = {
    url: `http://localhost:3000/api/dashboard/tables/${
      authCtx.user.restaurantId
    }/${tables !== undefined ? tables.length : 0}`,
    method: "GET",
    headers: {
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
        <div className="flex flex-col">
          <button
            onClick={handleOpen}
            className="w-1/3 mb-10 self-center bg-accent rounded-lg p-2"
          >
            Add a Table
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="absolute top-[15%] sm:left-[10%] lg:left-[25%] md:w-[600px] w-3/4 m-10 border-2 border-neutral-400 bg-secondary">
              <NewTable />
            </div>
          </Modal>
          <table className="w-full border-spacing-3 border-collapse ">
            <thead>
              <tr className="">
                <th className="border font-medium border-neutral-500">Table number</th>
                <th className="border font-medium border-neutral-500">
                  Number of Seats
                </th>
              </tr>
            </thead>
            <tbody className="">
              {tables &&
                tables.map((reservation) => {
                  const date = new Date(reservation.datetime);
                  return (
                    <tr key={reservation.id} className="pt-4">
                      <td className="text-center mt-4">
                        {reservation.customer.id}
                      </td>

                      <td className="text-center mt-4">
                        {reservation.tableId}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            {tables && tables.length === 0 && <p>No tables yet!!!</p>}
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Tables;
