
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Accounts from "./components/Accounts.tsx";
import Navbar from "./components/Navbar.tsx";
import Login from "./components/Login.tsx";
import Payment from "./components/Payments.tsx";
import Recommendations from "./components/Recommendations.tsx";
import Dashboard from "./components/DashBoard.tsx";
import ApiKeyManager from './components/ApiKeyManager';

const userId = 1; // 예시 사용자 ID

const App: React.FC = () => (
    <>
    
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/keys" element={<ApiKeyManager userId={userId} />} />
        </Routes>
    </>
);

export default App
