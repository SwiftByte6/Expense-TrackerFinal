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

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [5000, 7000, 8000, 6000, 9000, 11000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)", // Neon Red
          "rgba(54, 162, 235, 0.8)", // Electric Blue
          "rgba(255, 206, 86, 0.8)", // Bright Yellow
          "rgba(75, 192, 192, 0.8)", // Teal Green
          "rgba(153, 102, 255, 0.8)", // Vibrant Purple
          "rgba(255, 159, 64, 0.8)", // Orange Glow
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#333" } },
      title: { display: true, text: "Revenue Growth", color: "#333" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#666", font: { size: 12 } },
      },
      x: {
        ticks: { color: "#666", font: { size: 12 } },
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
