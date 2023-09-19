import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RestaurantInformation from "./components/RestaurantInformation";
import AdminPage from "./pages/AdminPage";
import PersonalInformation from "./components/PersonalInformation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/main" element={<MainPage />}>
        <Route
          path="restaurantInformation"
          element={<RestaurantInformation />}
        />
      </Route>
      <Route path="/admin" element={<AdminPage />}>
        <Route path="personalInformation" element={<PersonalInformation />} />
        <Route path="restaurants" element={<PersonalInformation />} />

      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
