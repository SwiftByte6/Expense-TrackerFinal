import React from "react";
import { motion } from "framer-motion";
import RecentCard from "./RecentCard";
import MyBarChart from "./BarChartHome";
import NavbarTop from "./NavbarTop";

const Main = () => {
  const stats = [
    { title: "Total Expenses", amount: "$6000.09", color: "text-green-500", icon: "fa-solid fa-money-bill-wave" },
    { title: "Income", amount: "$8000.09", color: "text-green-500", icon: "fa-solid fa-wallet" },
    { title: "Expenses Limit", amount: "$8000.09", color: "text-red-600", icon: "fa-solid fa-chart-pie" },
  ];

  return (
    <div className="w-full min-h-screen mt-16 md:mt-0 md:p-6 bg-gray-100">
      <NavbarTop />

      {/* Top Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10"
      >
        {stats.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl p-6 rounded-3xl flex items-center justify-between h-[18vh] md:h-[15vh] lg:h-[20vh] relative"
          >
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{item.title}</h3>
              <p className={`font-bold mt-2 text-3xl md:text-4xl ${item.color}`}>{item.amount}</p>
            </div>
            <i className={`${item.icon} text-5xl md:text-6xl text-gray-400`}></i>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Expenses & Chart Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-[75vh] gap-6 mt-10 mx-auto rounded-3xl"
      >
        {/* Recent Expenses */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white rounded-3xl p-6 shadow-lg"
        >
          <h1 className="font-bold text-2xl md:text-3xl">Recent Expenses</h1>
          <div className="space-y-4 mt-4 overflow-auto max-h-[50vh] pr-2">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <RecentCard />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white rounded-3xl p-6 flex flex-col items-center shadow-lg"
        >
          <h1 className="font-bold text-2xl md:text-3xl">Expense Overview</h1>
          <MyBarChart />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[20vh] w-full md:w-[90%] bg-gray-300 rounded-3xl mt-4"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;
