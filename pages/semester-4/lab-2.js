import { useState, useEffect } from "react";

export default function Lab2() {
    const [clothes, setClothes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://mongol-api-rest.vercel.app/clothes');
                const data = await response.json();
                console.log(data);
                setClothes(data);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Clothes List</h1>
                <ul>
                    {clothes.map((item) => (
                        <li key={item.id || item.name}>{item.name}</li>
                    ))}
                </ul>
        </div>
    );
}
