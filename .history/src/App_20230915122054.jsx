import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
