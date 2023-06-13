import { React, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData } from '../actions';
import { persistor } from '../store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography, Button, Dialog, CardFooter, Input} from "@material-tailwind/react";


function InformasiData({ responseData, setResponseData })
{
    return (
        <>
            <Card className="w-96">
            <CardHeader floated={false} className="flex items-center justify-center h-80">
                <img src="./foto.jpg" alt="profile-picture" className="h-80" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">{responseData?.nama_lengkap}</Typography>
            </CardBody>
            </Card>
            <Card className="w-full">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                    <th className="px-6 py-3 text-left">NIK</th>
                    <th className="px-20 py-3 text-left">{responseData?.nik}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Nama Lengkap</th>
                    <th className="px-20 py-3 text-left">{responseData?.nama_lengkap}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Tempat, Tgl Lahir</th>
                    <th className="px-20 py-3 text-left">{responseData?.tempatlahir} / {responseData?.tgllahir}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Agama</th>
                    <th className="px-20 py-3 text-left">{responseData?.agama}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Alamat</th>
                    <th className="px-20 py-3 text-left">{responseData?.alamat}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Golongan Darah</th>
                    <th className="px-20 py-3 text-left">{responseData?.golongandarah}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">No Handphone</th>
                    <th className="px-20 py-3 text-left">{responseData?.nohp}</th>
                </tr>
                <tr>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-20 py-3 text-left">{responseData?.status}</th>
                </tr>
                </thead>
            </table>
            </Card>
        </>
    );
}

const mapStateToProps = (state) => ({
    responseData: state.responseData,
  });
    
export default connect(mapStateToProps, { setResponseData })(InformasiData)