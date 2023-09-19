import PhoneInput from "react-phone-number-input";

const NewRestaurant = () => {
  return (
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
          onChange={setPhoneValue}
        />
      </form>
    </div>
  );
};

export default NewRestaurant;
