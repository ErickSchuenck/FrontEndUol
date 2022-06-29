import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './pages/LoginScreen'
import Button from "./Components/Button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/test' element={<Button />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
