import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';
import { connect } from 'react-redux';
import { setResponseData } from './actions';
import { Card, Typography} from "@material-tailwind/react";

function Login({ setResponseData }) {
    const [nik, setNik] = useState('');
    const navigate = useNavigate();

    const handleNikChange = (e) => {
      setNik(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post(
            'http://127.0.0.1:5000/login',
            { nik: nik },
            { headers: { 'Content-Type': 'application/json' } }
          );
      
          if (response.data.success) {
            const data = response.data.data;
            setResponseData(data);
            Swal({
                position: 'top-end',
                icon: 'success',
                title: 'login success',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/home');
          } else {
            Swal('Login Gagal', 'Silahkan Hubungi HRD', 'error');
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="container flex flex-col items-center justify-center h-screen">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray" className="text-center">Login Karyawan</Typography>
                <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                    <div className="flex flex-col gap-6 mb-4">
                        <input
                            type="text"
                            value={nik}
                            onChange={handleNikChange}
                            placeholder="Masukan NIK"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleLogin}>Login </button>
                </form>
            </Card>
          </div>
        </div>
      );
  }
  
  export default connect(null, { setResponseData })(Login);