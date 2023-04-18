import {BrowserRouter, Routes, Route} from "react-router-dom";
import SideNav from "@/component/SideNav";
import Intro from "@/component/Intro";
import DashBoard from "@/component/DashBoard";
import NotFound from "@/component/NotFound";
import Header from "./component/test/Header";

function App() {
  return (
    <div className="flex flex-col items-center min-w-[1600px] h-screen">
      <div className="w-full h-12 bg-gray-500">
        <Header />
      </div>
      <BrowserRouter>
        <main className="flex w-[1600px] h-full bg-gray-300">
          <div className="bg-gray-800">
            <SideNav />
          </div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dashboard/:dashboardName" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
