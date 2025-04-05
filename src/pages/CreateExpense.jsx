import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const CreateExpense = () => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 w-full">
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Placeholder for Pie Chart */}
        <motion.div
          className="bg-white shadow-lg w-full h-[40vh] md:h-[50vh] rounded-2xl flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-gray-400 font-bold text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Pie Chart Placeholder
          </motion.div>
        </motion.div>

        {/* Expense Form */}
        <motion.div
          className="bg-white shadow-2xl w-full h-auto p-6 rounded-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="font-bold text-3xl text-center mb-4">Add New Expense</h1>

          <form className="flex flex-col space-y-3">
            {/* Expense Name */}
            <motion.input
              type="text"
              className="bg-gray-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the Expense"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Amount */}
            <motion.input
              type="text"
              className="bg-gray-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Amount"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Expense Category */}
            <div className="w-full">
              <label className="block text-lg font-bold mb-1">Expense Category</label>
              <motion.select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="" disabled>Select a category</option>
                <option value="food">🍕 Food</option>
                <option value="travel">✈️ Travel</option>
                <option value="shopping">🛍️ Shopping</option>
                <option value="bills">📑 Bills</option>
                <option value="entertainment">🎬 Entertainment</option>
              </motion.select>
              {category && <p className="mt-1 text-green-600">{`Selected: ${category}`}</p>}
            </div>

            {/* Date Picker */}
            <motion.input
              type="date"
              className="bg-gray-200 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Submit Button */}
            <motion.button
              className="bg-blue-500 text-white rounded-3xl p-3 w-full font-bold text-xl mt-2"
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Floating Animated Boxes - Now Closely Positioned */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mt-4">
        {[0.2, 0.4, 0.6].map((delay, index) => (
          <motion.div
            key={index}
            className="bg-white w-full h-[120px] md:h-[150px] rounded-2xl shadow-xl flex justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay }}
          >
            Box {index + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreateExpense;
