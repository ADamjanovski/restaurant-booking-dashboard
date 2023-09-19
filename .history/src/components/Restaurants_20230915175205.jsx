import { useEffect, useState } from "react";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
import "react-phone-number-input/style.css";
import NewRestaurant from "./NewRestaurant";
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(()=>{

  })
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
