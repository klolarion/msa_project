import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Recommendation {
    product_name: string;
    score: number;
}

const Recommendations: React.FC = () => {
    const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/recommendations', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRecommendations(response.data);
        };
        fetchRecommendations();
    }, []);

    return (
        <div>
            <h2>Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec.product_name} - {rec.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
