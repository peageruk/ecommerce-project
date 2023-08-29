/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import CategoryInsert from './CategoryInsert'
const Category = () => {
  // const random = () => Math.round(Math.random() * 100)

const [dataSource, setDataSource] = useState([]);

const url_category_all = "http://localhost:8080/api/category/findAll"
useEffect(() => {
  fetch(url_category_all, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }})
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(jsonData => ()=>{console.log(jsonData.data)})
    .catch(error => console.log('There was an error: ', error));

}, []);

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Code',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Active',
    dataIndex: 'active',
    key: 'active',
  },
  {
    title: 'CreateDate',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button style={{ backgroundColor:'green', color:'white' }} onClick={() => handleEdit(record)}>Edit</Button>
        <Button style={{ backgroundColor:'red', color:'white' }} onClick={() => handleDelete(record)}>Delete</Button>
      </Space>
    ),
  },
];
const handleEdit = (record) => {
  console.log('Edit button clicked for record: ', record);
};

const handleDelete = (record) => {
  console.log('Delete button clicked for record: ', record);
};
const handleButtonClick = (record) => {
  console.log('Button clicked for record: ', record);
};

const handleInsert = ()=>{
  console.log('Insert')
}


const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (

    <div>
      <CategoryInsert isVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
      <Button style={{ backgroundColor:'green', color:'white' }} onClick={()=>showModal()}>Insert Category </Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>

  )
}

export default Category;
