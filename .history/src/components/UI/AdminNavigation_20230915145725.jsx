const AdminNavigation = () => {
  return (
    <div className="">
      <nav className="flex flex-col ">
        <NavLink
          to="restaurantInformation"
          className="pr-10  p-3 border-r border-b"
        >
          Personal Information
        </NavLink>
        <NavLink
          to="upcomingReservations"
          className="pr-5  p-3 border-r border-b"
        >
          Upcoming Reservations
        </NavLink>
        <NavLink to="PastReservations " className="pr-5  p-3 border-r border-b">
          Past Reservations
        </NavLink>
      </nav>
    </div>
  );
};
export default AdminNavigation;
