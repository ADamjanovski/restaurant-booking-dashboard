import { useState } from "react";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full">
      <Card>
        <div className="flex flex-col">
          <button className="w-1/3 mb-10 self-center bg-accent rounded-lg p-2">
            Add a Restaurant
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

          </Modal>
          <table className="w-full">
            <thead>
              <tr>
                <th>Restaurant </th>
                <th>Email</th>
                <th>Number</th>
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
