import React,{useState,useEffect} from "react";

import {Form, Modal} from 'antd';
import { Input, Select } from "antd";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { Button } from "antd";
import { message } from "antd";
import Spinner from "./../components/Spinner";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = () => {
   const[loading,setLoading] = useState(false);
  const [showModal,setShowModal] = useState(false);

  ///get all transactions
  const getAllTransactions = async()=>{
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      await axios.post('/transaction/get-transaction',{userid:user._id});
    }catch(error){

    }
  }




  //form handling
  const handleSubmit =  async(values) => {
   
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      await axios.post('/transaction/add-transaction',{...values,userid:user._id});
      setLoading(false);
      message.success('Transaction added successfully');
      setShowModal(false);
    }
    catch(error){
      setLoading(false);
      message.error('Error in adding transaction');
    }
  };
  return (
    <Layout>
      {loading && <Spinner/>}
      <h3>

        <div className="filters">
          <div>
            range filters
          </div>
          <div>
          <Button type="primary" onClick={()=>setShowModal(true)}>Add New</Button>;
          </div>
        </div>
      </h3>
      <div className="content"> </div>
        <Modal title="Add Transaction" open={showModal} onCancel={()=>setShowModal(false)} footer={false}>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Amount in ₹" name="amount">
              <Input type="text"/>
              </Form.Item>
              <Form.Item label="Type" name="type">
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense">Expense</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Category" name="category">
              <Select>
               <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="travel">Travel</Select.Option>
                <Select.Option value="shopping">Shopping</Select.Option>
               <Select.Option value="entertainment">Entertainment</Select.Option>
                <Select.Option value="medical">Medical</Select.Option>
                <Select.Option value="education">Education</Select.Option>
                <Select.Option value="tax">tax</Select.Option>
                <Select.Option value="other">Other</Select.Option>

                </Select>
              </Form.Item>
              <Form.Item label="Date" name="date">
                <Input type="date"/>
                </Form.Item>
                <Form.Item label="Reference" name="reference">
                <Input type="text"/>
                </Form.Item>
                <Form.Item label="Description" name="description">
                <Input type="text"/>
                </Form.Item>
                <div className="d-flex justify-content-end">
                  <button type ="submit" className="btn btn-primary">
                    SAVE
                </button>

                </div>
              
          </Form>
        </Modal>
     
    </Layout>
  );
};

export default HomePage;