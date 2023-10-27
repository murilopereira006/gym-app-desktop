import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import Routine from "../pages/Routine";
import Goals from "../pages/Goals";
import GymInfo from "../pages/GymInfo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/profile" element={<UserPage />} />
                <Route path="/training" element={<Routine />} />
                <Route path="/diet" element={<Routine />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/gym-info" element={<GymInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;