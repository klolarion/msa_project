import React, { useState } from 'react';
import axios from 'axios';

const Payment: React.FC = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(
                'http://localhost:8083/payments',
                { amount: parseFloat(amount) },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(`Payment status: ${response.data.status}`);
        } catch (error) {
            console.error(error);
            alert('Payment failed');
        }
    };

    return (
        <div>
            <h2>Make a Payment</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay</button>
        </div>
    );
};

export default Payment;
