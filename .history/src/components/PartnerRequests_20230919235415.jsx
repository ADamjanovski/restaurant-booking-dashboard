import { useEffect, useState } from "react";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
import "react-phone-number-input/style.css";
import NewRestaurant from "./NewRestaurant";
import { useHttp } from "../hooks/useHttp";

const PartnerRequests = () => {
  const [requests, setRequests] = useState();
  const [openModal, setopenModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleOpen = (data) => {
    setSelectedData(data);
    setopenModal(true);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (requests === null || requests == undefined) {
      useHttp({
        url: "http://localhost:3000/api/dashboard/partnerRequests",
        method: "GET",

      }).then((data) => setRequests(data));
    }
  }, []);
  console.log(requests);
  return (
    <div className="w-full">
      <Card>
        <div className="flex flex-col">
          <button
            onClick={handleOpen}
            className="w-1/3 mb-10 self-center bg-accent rounded-lg p-2"
          >
            Add a Restaurant
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="absolute top-[15%] sm:left-[10%] lg:left-[25%] md:w-[600px] w-3/4 m-10 border-2 border-neutral-400 bg-secondary">
              <NewRestaurant />
            </div>
          </Modal>
          <table className="w-full">
            <thead>
              <tr>
                <th>Restaurant Name</th>
                <th>Email</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {requests &&
                requests.map((request) => {
                  return (
                    <tr key={request.id}>
                      <td className="text-center">{request.name}</td>
                      <td className="text-center">{request.email}</td>
                      <td className="text-center text-sm">
                        <button onClick={() => handleOpen(request.description)}>
                          Open description
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="absolute top-[15%] sm:left-[10%] left-[3%] lg:left-[25%] md:w-[600px] w-3/4 m-10 border-2 border-neutral-400 bg-secondary">
              <p>{selectedData}</p>
            </div>
          </Modal>
        </div>
      </Card>
    </div>
  );
};

export default PartnerRequests;
