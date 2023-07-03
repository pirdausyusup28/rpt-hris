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
import { Navbar, Typography, Button,} from "@material-tailwind/react";
 
function Menu({ responseData, setResponseData, logoutUser }) {
  const handleApiResponse = (data) => {
    setResponseData(data);
  };

  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
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
    <div className="flex">
    <div className={` ${ open ? "w-40" : "w-80 " } flex flex-col h-screen p-3 shadow duration-300`} style={{ backgroundColor:'#6c39a0'}}>
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                    Dashboard
                </h2>
                <button onClick={() => setOpen(!open)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center py-4">
                    <button type="submit" className="p-2 focus:outline-none focus:ring">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </button>
                </span>
                <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"/>
            </div>
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm"><Link to="/datakaryawan" className="flex items-center p-2 space-x-3 rounded-md" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Data Karyawan</Link></li>
                    <li className="rounded-sm"><Link to="/datacuti" className="flex items-center p-2 space-x-3 rounded-md" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Data Cuti</Link></li>
                    <li className="rounded-sm"><Link to="/datakehadiran" className="flex items-center p-2 space-x-3 rounded-md" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Data Kehadiran</Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container mx-10 mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <Routes>
          <Route path="/datakaryawan" element={<MenuKaryawan />} />
        </Routes>
        </div>
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