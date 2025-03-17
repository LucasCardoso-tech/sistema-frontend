
import { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";

export default function Dashboard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api/financeiro")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const lineData = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
            {
                label: "Receita Mensal",
                data: [10000, 12000, 13000, 15000, 16000, 18000],
                borderColor: "#4F46E5",
                backgroundColor: "rgba(79, 70, 229, 0.2)",
                fill: true,
            },
        ],
    };

    const pieData = {
        labels: ["Operacional", "Marketing", "Impostos"],
        datasets: [
            {
                data: [3000, 2000, 1500],
                backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
            },
        ],
    };

    return (
        <div className="p-8 bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold">Dashboard Financeiro</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg">Receita Mensal</h3>
                    <Line data={lineData} />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg">Despesas</h3>
                    <Pie data={pieData} />
                </div>
            </div>
        </div>
    );
}
