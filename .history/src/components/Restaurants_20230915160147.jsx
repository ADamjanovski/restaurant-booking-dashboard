import { useState } from "react";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();
  const [open, setOpen] = useState(false);
  const [phoneValue, setPhoneValue] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <div>
              <form className="flex flex-col">
                <label>Username</label>
                <input type="text" />
                <label>Name</label>
                <input type="text" />
                <label>Telephone number</label>
                <PhoneInput
                  defaultCountry="MK"
                  value={phoneValue}
                  onChange={phoneValue}
                />
              </form>
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
