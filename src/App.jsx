import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './pages/LoginScreen'
import StyledLoading from "./Components/StyledLoading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/test' element={<StyledLoading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
