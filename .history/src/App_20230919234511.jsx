import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RestaurantInformation from "./components/RestaurantInformation";
import AdminPage from "./pages/AdminPage";
import PersonalInformation from "./components/PersonalInformation";
import Restaurants from "./components/Restaurants";
import UpcomingReservations from "./components/UpcomingReservations";
import PastReservations from "./components/PastReservations";
import Tables from "./components/Tables";
import Images from "./components/Images";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/main" element={<MainPage />}>
        <Route
          path="restaurantInformation"
          element={<RestaurantInformation />}
        />
        <Route path="UpcomingReservations" element={<UpcomingReservations />} />
        <Route path="pastReservations" element={<PastReservations />} />
        <Route path="tables" element={<Tables />} />
        <Route path="images" element={<Images />} />
      </Route>

      <Route path="/admin" element={<AdminPage />}>
        <Route path="personalInformation" element={<PersonalInformation />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="partnerRequests" element={<Part}
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
