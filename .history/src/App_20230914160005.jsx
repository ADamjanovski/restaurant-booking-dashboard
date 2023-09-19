import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
