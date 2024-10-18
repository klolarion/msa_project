import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Accounts: React.FC = () => {
    const [accounts, setAccounts] = useState<string[]>([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8082/accounts', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAccounts(response.data);
        };
        fetchAccounts();
    }, []);

    return (
        <div>
            <h2>Accounts</h2>
            <ul>
                {accounts.map((account, index) => (
                    <li key={index}>{account}</li>
                ))}
            </ul>
        </div>
    );
};

export default Accounts;
