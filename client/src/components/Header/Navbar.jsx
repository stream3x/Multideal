
import React from 'react'
import Link from 'next/link';

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";



// dropwown
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Hot Promotion
      </a>
    ),

  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Consumer Electronic
      </a>
    ),
    // icon: <SmileOutlined />,
   
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Computers & Technology
      </a>
    ),
    
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Clothing & appreal
      </a>
    ),
    
  },

  {
    key: '5',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Home Garden & Kitchen
      </a>
    ),
    
  },

  {
    key: '6',
    label: (
      <a c target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Books & Stationery
      </a>
    ),
    
  },

  {
    key: '7',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Health & Beauty
      </a>
    ),
    
  },

  {
    key: '8',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Phone & Accessories
      </a>
    ),
    
  },

  {
    key: '9',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
      Sport & Outdoor
      </a>
    ),
    
  },

  
 
];





function Navbar() {
  return (
    <div className=' border-t-white mt-0 py-4 sticky top-0 bg-slate-800 shadow-md text-white px-12 flex justify-between'>
    
    <div className='flex items-center gap-2 '>

    <div className='text-xl'>
    <AiOutlineMenu />
    </div>

    <div>
    {/* <h1 className='font-medium text-lg'>  Shopping Categories</h1> */}
    <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
    <h1 className='font-medium text-lg'>  Shopping Categories</h1>
        
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>


    </div>


    </div>

    

    <div className='font-medium text-md gap-10'>
        <a className='' href=''>Home</a>
        <a className='ml-8' href=''>Shop</a>
        <a className='ml-8' href=''>Pages</a>
        <a className='ml-8' href=''>Customer Service</a>
     <a className='ml-8' href=''>My order</a>

    </div> 


    

    <div>
     <Link className='ml-8 mr-5 text-lg text-white font-normal bg-yellow-500 py-1.5 px-4 rounded-sm' href='/auth/shopListing'>Become a Seller  </Link> 

    </div>
    </div>
  )
}

export default Navbar