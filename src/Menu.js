import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setResponseData } from './actions';
import { logoutUser } from './actions';
import Home from './Home.js'
import About from './About.js'
import Login from './Login.js'
import Beranda from './Beranda.js'
import { Navbar, Typography, Button, IconButton, Collapse} from "@material-tailwind/react";
 
function Menu({ responseData, setResponseData, logoutUser }) {
  const handleApiResponse = (data) => {
    setResponseData(data);
  };

  const handleLogout = () => {
    // Call the logout action
    logoutUser();
  };

  console.log(responseData)
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
      <Navbar className="sticky inset-0 z-10 max-w-full px-4 py-2 bg-green-500 rounded-none h-max lg:px-8 lg:py-4" style={{ backgroundColor:'aliceblue'}}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}> HRIS PT. ALFATIH HUMAIRA </Typography>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                  <Link to="/" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Home</Link>
                </Typography>
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                  <Link to="/about" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Tentang Aplikasi</Link>
                </Typography>
                
                {responseData !== null && responseData !== undefined ? (
                  <>
                  <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                      <Link to="/home" className="flex items-center" style={{ fontFamily: 'cursive', fontSize: 'initial', fontWeight: 'bold' }}>Profil</Link>
                      </Typography>
                      <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={handleLogout}><Link to="/Login"><span>Logout</span></Link></Button>
                      </>
                    ) : (
                      <Button variant="gradient" size="sm" className="hidden lg:inline-block"><Link to="/Login"><span>Login</span></Link></Button>
                    )}
              </ul>
            </div>
          </div>
        </div>
      </Navbar>
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