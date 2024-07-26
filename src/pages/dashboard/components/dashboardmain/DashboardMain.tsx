
import './DashboardMain.css';
import DashboardBox from '../dashboardbox/DashboardBox';
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";
import { Chart } from "react-google-charts";

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import HeadPhone from '../../../../images/public/Headphone.jpg';

import { FaStar } from "react-icons/fa6";

import Pagination from "@mui/material/Pagination";
import { useState } from 'react';


const DashboardMain: React.FC = () => {
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const ITEM_HEIGHT = 48;


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const data = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
    ];

    const options = {
        backgroundColor: 'transparent',
        chartArea: { width: "100%", height: "100%" }
    };

    return (
        <div className="dashboard-main">
            <div className="row dashboard-box-wrapper-row">
                <div className="col-md-8">
                    <div className="dashboard-box-wrapper d-flex">
                        <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                        <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} grow={false} />
                        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} grow={true} />
                        <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} grow={false} />
                    </div>
                </div>

                <div className="col-md-4 ps-0">
                    <div className="box graph-box">
                        <div className="d-flex align-items-center w-100 bottom-element">
                            <h6 className="text-white mb-0 mt-0">Total Sales</h6>

                            <div className="ms-auto">
                                <Button className="ms-auto toggle-icon" onClick={handleClick}><HiDotsVertical /></Button>
                                <Menu
                                    className="dropdown_menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                    }}
                                >

                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer />
                                        Last Day
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer />
                                        Last Week
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer />
                                        Last Month
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <IoIosTimer />
                                        Last Year
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                        <p>$3,578.90 in last month</p>

                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="170px"
                            data={data}
                            options={options}
                        />
                    </div>
                </div>
            </div>


            <div className="cart shadow border-0 p-3 mt-4">
                <h3 className='hd'>Best Selling Products</h3>

                <div className="row card-filters mt-3">
                    <div className="col-md-3">
                        <h4>SHOW BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={showBy}
                                onChange={(event: SelectChangeEvent) => setShowBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                labelId="demo-select-small-label"
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-md-3">
                        <h4>CATEGORY BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={categoryBy}
                                onChange={(event: SelectChangeEvent) => setCategoryBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                labelId="demo-select-small-label"
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-md-3">
                        <h4>BRAND BY</h4>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={brandBy}
                                onChange={(event: SelectChangeEvent) => setBrandBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                labelId="demo-select-small-label"
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="table-responsive mt-3">
                    <table className='table table-bordered v-align'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>UID</th>
                                <th style={{ width: '300px' }}>PRODUCT</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th>PRICE</th>
                                <th>STOCK</th>
                                <th>RATING</th>
                                <th>ORDER</th>
                                <th>SALES</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="d-flex align-items-center product-box">
                                        <div className="img-wrapper">
                                            <div className="img">
                                                <img src={HeadPhone} alt="" className='w-100' />
                                            </div>
                                        </div>
                                        <div className="info ps-0 ms-0">
                                            <h6>Tops and skirt set for Female...</h6>
                                            <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <del className="old">$21.00</del>
                                    <span className="new text-danger">$19.00</span>
                                </td>
                                <td>30</td>
                                <td>
                                    <div className="rate d-flex align-items-center justify-content-center">
                                        <FaStar style={{ color: '#FF9900', marginRight: '5px' }} />
                                        <strong>4.9</strong>
                                        <span style={{ opacity: '0.7', marginLeft: '5px' }}>(16)</span>
                                    </div>
                                </td>
                                <td>433</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center justify-content-center">
                                        <Button className="secondary" color='secondary'><FaEye /></Button>
                                        <Button className="success" color='success'><FaPencilAlt /></Button>
                                        <Button className="error" color='error'><MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="d-flex table-footer">
                        <p>Showing <b>12</b> of <b>60</b> results</p>
                        <Pagination count={10} color="primary" className='pagination' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMain;