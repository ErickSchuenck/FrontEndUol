import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './pages/LoginScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
