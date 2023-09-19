import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RestaurantInformation from "./components/RestaurantInformation";
import AdminPage from "./pages/AdminPage";
import PersonalInformation from "./components/PersonalInformation";
import Restaurants from "./components/Restaurants";
import UpcomingReservations from "./components/UpcomingReservations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/main" element={<MainPage />}>
        <Route
          path="restaurantInformation"
          element={<RestaurantInformation />}
        />
        <Route
          path="UpcomingReservations"
          element={<UpcomingReservations />}
        />
                <Route
          path="UpcomingReservations"
          element={<UpcomingReservations />}
        />
      </Route>
      
      <Route path="/admin" element={<AdminPage />}>
        <Route path="personalInformation" element={<PersonalInformation />} />
        <Route path="restaurants" element={<Restaurants />} />

      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
