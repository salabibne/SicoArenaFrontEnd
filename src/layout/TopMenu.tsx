import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, } from '@ant-design/s';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
type MenuItemtwo = Required<MenuProps>['itemstwo'][number];

const itemstwo: MenuItemtwo[] = [
   {
      label: 'Sicho Arena',
      key: "sa",
      icons:"../../public/logo/image.png"
   },
]
const items: MenuItem[] = [
 
  
  {
    label: 'Home',
    key: 'home',
    
    style: { color:"white" }
  },
  
  {
    label: 'Our Services',
    key: 'services',
    
     style: { color:"white" }
  },
  
  {
    label: 'Announcements',
    key: 'annc',
    
     style: { color:"white" }
  },
  
  {
    label: 'About',
    key: 'about',
    style: { color: "white" },
   
    
  },
  
  {
    label: 'Contact',
    key: 'contact',
  
     style: { color:"white" }
  },
  {
     label: 'Book Now',
     
    key: 'booking',
    
     style: {
        color: "white",
        backgroundColor: "#6EC1E4",
        
        
      }
  },
  
  
];

const TopMenu: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    if (e.key === "about") {
     navigate('/about')
    }
    else if (e.key === "booking") {
      navigate("/booking")
    }
    else {
      navigate("/")
    }
  };

   return <Menu onClick={onClick}  mode="horizontal" selectedKeys={[current]} multiple={true} items={itemstwo,items} className='p-6 items-center justify-end gap-4  bg-[#17295A]  font-semibold  '/>;
   
};

export default TopMenu;