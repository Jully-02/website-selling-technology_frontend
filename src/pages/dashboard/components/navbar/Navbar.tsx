import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../../../images/public/Logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdMenuOpen } from 'react-icons/md';
import { MdOutlineMenu } from 'react-icons/md';
import SearchBox from '../search/SearchBox';
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaRegBell } from "react-icons/fa6";
import AvatarProfile from '../../../../images/public/profile-image.png';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';

import { IoShieldHalfSharp } from "react-icons/io5";

const Navbar: React.FC = () => {

    const [isOpenMyAccDrop, setIsOpenMyAccDrop] = useState<null | HTMLElement>(null);
    const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState<null | HTMLElement>(null);
    const openMyAcc = Boolean(isOpenMyAccDrop);
    const openNotification = Boolean(isOpenNotificationDrop);
    const [isLogin, setIsLogin] = useState(true);

    const handleOpenMyAccDrop = (event: React.MouseEvent<HTMLElement>) => {
        setIsOpenMyAccDrop(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setIsOpenMyAccDrop(null);
    };

    const handleOpenNotificationsDrop = (event: React.MouseEvent<HTMLElement>) => {
        setIsOpenNotificationDrop(event.currentTarget);
    }

    const handleCloseNotificationsDrop = () => {
        setIsOpenNotificationDrop(null);
    }

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/dashboard'} className='d-flex align-items-center logo justify-content-center'>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className='rounded-circle me-3'><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className='rounded-circle me-3'><MdOutlineLightMode /></Button>
                            <Button className='rounded-circle me-3'><IoCartOutline /></Button>
                            <Button className='rounded-circle me-3'><MdOutlineMailOutline /></Button>

                            <div className="dropdown-wrapper position-relative">
                                <Button className='rounded-circle me-3' onClick={handleOpenNotificationsDrop}><FaRegBell /></Button>
                                <Menu
                                    anchorEl={isOpenNotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotification}
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head ms-3 pb-0">
                                        <h4>Notifications (12)</h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="dropdown-info">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list <b>Leather belth steve
                                                                madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>

                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="dropdown-info">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list <b>Leather belth steve
                                                                madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>

                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="dropdown-info">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list <b>Leather belth steve
                                                                madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>

                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="dropdown-info">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list <b>Leather belth steve
                                                                madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>

                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                            <div className="d-flex">
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="dropdown-info">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list <b>Leather belth steve
                                                                madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky mb-0">
                                                        few seconds ago
                                                    </p>
                                                </div>

                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                                        <Button className='btn-blue w-100'>View all notifications</Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                !isLogin === true ? (
                                    <Button className="btn btn-blue btn-lg btn-round">Sign In</Button>
                                )
                                    : (
                                        <div className="my-acc-wrapper">
                                            <Button className="my-acc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                                <div className="user-img">
                                                    <span className="rounded-circle">
                                                        <img src={AvatarProfile} alt="" />
                                                    </span>
                                                </div>

                                                <div className="user-info">
                                                    <h4>Gizmos Service</h4>
                                                    <p className='mb-0'>@Gizmos-Service</p>
                                                </div>
                                            </Button>

                                            <Menu
                                                anchorEl={isOpenMyAccDrop}
                                                id="account-menu"
                                                open={openMyAcc}
                                                onClose={handleCloseMyAccDrop}
                                                onClick={handleCloseMyAccDrop}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <ListItemIcon>
                                                        <PersonAdd fontSize="small" />
                                                    </ListItemIcon>
                                                    My Account
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <ListItemIcon>
                                                        <IoShieldHalfSharp />
                                                    </ListItemIcon>
                                                    Reset Password
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;