import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RectangleGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 7000, 8000, 6000, 9000, 11000],
        backgroundColor: "rgba(54, 162, 235, 0.8)", // Electric Blue
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
      {
        label: "Expenses ($)",
        data: [4000, 6000, 7000, 5000, 8000, 10000],
        backgroundColor: "rgba(255, 99, 132, 0.8)", // Neon Red
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows resizing
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#333", font: { size: 14 } },
      },
      title: {
        display: true,
        text: "Sales & Expenses Overview",
        color: "#333",
        font: { size: 16 },
      },
    },
    scales: {
      x: { stacked: true, ticks: { color: "#666", font: { size: 12 } } },
      y: { stacked: true, beginAtZero: true, ticks: { color: "#666", font: { size: 12 } } },
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-white p-4 rounded-xl shadow-lg">
        <h2 className="text-center text-lg font-bold mb-2">Stacked Rectangle Graph</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RectangleGraph;
