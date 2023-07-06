import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet  } from 'react-router-dom';
import { connect } from 'react-redux';
import { setResponseData } from './actions';
import { logoutUser } from './actions';
import Home from './Home.js'
import About from './About.js'
import Login from './Login.js'
import Beranda from './Beranda.js'
import MenuKaryawan from './admin/MenuKaryawan.js'
import { Navbar, Typography, Button, Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
 
function Menu({ responseData, setResponseData, logoutUser }) {
  const handleApiResponse = (data) => {
    setResponseData(data);
  };

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const [navbar, setNavbar] = useState(false);
 
  const handleOpen = (index) => {
    setOpen(index);
  };

  const handleLogout = () => {
    // Call the logout action
    logoutUser();
  };

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <>
    <BrowserRouter>
    {responseData !== null && responseData !== undefined && responseData.jabatan == 1 ? ( 
    <div className="flex h-screen">
    <div className="bg-gray-200 w-90">
      <Card className="h-full p-4 shadow-xl">
        <div className="flex items-center gap-4 p-4 mb-2">
          <img src="/img/logo-ct-dark.png" alt="brand" className="w-8 h-8" />
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <div className="p-2">
          <Input icon={<MagnifyingGlassIcon className="w-5 h-5" />} label="Search" />
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="p-3 border-b-0">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="w-5 h-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  <Link to="/datakaryawan" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Karyawan</Link>
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="w-5 h-3" />
                  </ListItemPrefix>
                  <Link to="/datakehadiran" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Kehadiran</Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
        </List>
      </Card>
    </div>
  
    <div className="flex flex-col flex-1">
      <header className="p-4 text-white bg-blue-500">
        <h1>header</h1>
      </header>
  
      <main className="flex-1 p-4">
        <h1>content</h1>
        <Routes>
          <Route path="/datakaryawan" element={<MenuKaryawan />} />
        </Routes>
      </main>
    </div>
    </div>
     ) : ( 
      <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Home</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/about" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Tentang Aplikasi</Link>
                            </li>
                            {responseData !== null && responseData !== undefined ? (
                            <>
                              <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/home" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>
                                  Profil
                                </Link>
                              </li>
                              <li className="text-gray-600 hover:text-blue-600">
                                <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={handleLogout}>
                                  <Link to="/Login">
                                    <span>Logout</span>
                                  </Link>
                                </Button>
                              </li>
                            </>
                          ) : (
                            <li className="text-gray-600 hover:text-blue-600">
                              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                                <Link to="/Login">
                                  <span>Login</span>
                                </Link>
                              </Button>
                            </li>
                          )}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
     )}
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  responseData: state.responseData,
});
  
export default connect(mapStateToProps, { logoutUser, setResponseData })(Menu);