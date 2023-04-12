import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SideNav from "@/component/SideNav";
import Intro from "@/component/Intro";
import DashBoard from "@/component/DashBoard";
import NotFound from "@/component/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideNav />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dashboard/:dashboardName" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
