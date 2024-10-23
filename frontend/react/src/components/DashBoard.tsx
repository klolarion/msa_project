import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
    id: string;
    email: string;
}

const Dashboard: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // 사용자가 로그인했는지 확인하고 유저 정보 가져오기
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please login first.');
            navigate('/login');
            return;
        }

        axios
            .get('http://localhost:8081/auth/me', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                alert('Failed to fetch user data. Please login again.');
                navigate('/login');
            })
            .finally(() => setIsLoading(false));
    }, [navigate]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Welcome, {user?.email}</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => navigate('/accounts')}>View Accounts</button>
                <button onClick={() => navigate('/payments')}>Make a Payment</button>
                <button onClick={() => navigate('/recommendations')}>Get Recommendations</button>
                <button onClick={() => navigate('/keys')}>ApiKey</button>
            </div>
        </div>
    );
};

export default Dashboard;
