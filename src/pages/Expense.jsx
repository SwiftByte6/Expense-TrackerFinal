import React, { useState } from 'react';
import LineChart from '../components/LineChart';
import RecentCard from '../components/RecentCard';
import DoughnutChart from '../components/DoughnutChart';
import { motion } from 'framer-motion';
import BarChart from '../components/BardChart';
import RectangleGraph from '../components/RectangleGraph';
import ItemLIst from '../components/ItemLIst';

const Expense = () => {

  const [ispopUp,setIspopUP]=useState(false);
  return (
    <div className='relative '>
    {/* {
      ispopUp?<>
        <div className='md:w-[70vw] md:h-[100vh]  absolute z-90 p-20'>
        
        </div>
      </>:""
    } */}

     <div className="w-full px-4 py-6 flex flex-col items-center  relative space-y-8 md:space-y-10 overflow-hidden">
      {/* Line Chart Section */}

     

      <motion.div
        className="bg-white w-full mt-13 md:mt-0 max-w-screen-xl shadow-lg md:p-4 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <LineChart />
      </motion.div>

      {/* List + Doughnut Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-xl">
        <motion.div
          className="bg-white w-full h-auto md:h-[55vh] p-4 rounded-2xl shadow-lg overflow-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='flex justify-between'>
            <h1 className="font-bold text-2xl md:text-3xl mb-4">List of Expenses</h1>
            <span className=' text-2xl md:text-3xl underline ' onClick={()=>{setIspopUP(!ispopUp)}}>see all</span>
          </div>

          
          
          
          {[...Array(4)].map((_, i) => (
            <RecentCard key={i} />
          ))}
        </motion.div>

        <motion.div
          className="bg-white w-full h-[250px] md:h-[55vh] p-4 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <DoughnutChart />
        </motion.div>
      </div>


      {/* Bar + Rectangle Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        <motion.div
          className="bg-white w-full h-[250px] md:h-[55vh] col-span-1 lg:col-span-2 p-4 rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <BarChart />
        </motion.div>

        <motion.div
          className="bg-white w-full h-[250px] md:h-[55vh] p-4 rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <RectangleGraph />
        </motion.div>
      </div>
    </div>
    </div>

   
  );
};

export default Expense;
