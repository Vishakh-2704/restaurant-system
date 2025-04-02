import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Home,Auth,Orders } from "./pages";
import Header from "./components/shared/Header";
 
function App() {
 

  return (
    <>
      <Router>
        <Header />
        <Routes>
    <Routes paths="/home" element={<Home />} />
    <Routes paths="/auth" element={<Auth />} />
    <Routes paths="/orders" element={<Orders />} />
    </Routes>
     </Router>
</>
  );
}

export default App
