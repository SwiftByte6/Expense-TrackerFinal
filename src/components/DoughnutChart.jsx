import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Food", "Rent", "Utilities", "Entertainment", "Savings"],
    datasets: [
      {
        label: "Expense Distribution ($)",
        data: [500, 1200, 300, 400, 600],
        backgroundColor: [
          "rgba(255, 0, 102, 0.8)", // Neon Pink
          "rgba(0, 191, 255, 0.8)", // Electric Blue
          "rgba(255, 215, 0, 0.8)", // Neon Yellow
          "rgba(34, 255, 34, 0.8)", // Bright Green
          "rgba(153, 51, 255, 0.8)", // Vibrant Purple
        ],
        borderColor: [
          "rgba(255, 0, 102, 1)",
          "rgba(0, 191, 255, 1)",
          "rgba(255, 215, 0, 1)",
          "rgba(34, 255, 34, 1)",
          "rgba(153, 51, 255, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 8, // Enlarges on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#333" } },
      title: { display: true, text: "Expense Breakdown", color: "#333" },
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
