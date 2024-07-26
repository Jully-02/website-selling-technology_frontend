import React, { useState } from 'react';
import './Sidebar.css';
import Button from "@mui/material/Button";
import { MdDashboard } from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa6';
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { FaUser } from "react-icons/fa";

interface SidebarProps {
    setIsSidebar: (value: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({setIsSidebar}) => {
    const [activeTab, setActiveTab] = useState<number | null>(0);
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

    const handleOpenSubMenu = (index: number) => {
        setActiveTab(index);
        index !== 2 && setIsSidebar(index)
        setIsToggleSubMenu(!isToggleSubMenu);
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(1)}>
                                <span className="icon"><MdDashboard /></span>
                                Dashboard
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 2 && isToggleSubMenu === true ? 'active' : ''}`} onClick={() => handleOpenSubMenu(2)}>
                            <span className="icon"><FaProductHunt /></span>
                            Products
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                        <div className={`sub-menu-wrapper ${activeTab === 2 && isToggleSubMenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className="sub-menu">
                                <li onClick={() => handleOpenSubMenu(21)}>
                                    <Link to="#">Products</Link>
                                </li>
                                <li onClick={() => handleOpenSubMenu(22)}>
                                    <Link to="#">Add a product</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(3)}>
                                <span className="icon"><FaCartArrowDown /></span>
                                Orders
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(4)}>
                                <span className="icon"><FaUser /></span>
                                Customers
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(5)}>
                                <span className="icon"><MdMessage /></span>
                                Messages
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(6)}>
                                <span className="icon"><FaBell /></span>
                                Notifications
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(7)}>
                                <span className="icon"><IoIosSettings /></span>
                                Settings
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(8)}>
                                <span className="icon"><MdMessage /></span>
                                Messages
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(9)}>
                                <span className="icon"><FaBell /></span>
                                Notifications
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => handleOpenSubMenu(9)}>
                                <span className="icon"><IoIosSettings /></span>
                                Settings
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>


                <br />
                <div className="logout-wrapper">
                    <div className="logout-box">
                        <Button variant='contained'><IoMdLogOut/>Logout</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;