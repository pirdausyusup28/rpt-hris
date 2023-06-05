import { React, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData } from './actions';
import { persistor } from './store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography, Button, Dialog, CardFooter, Input
} from "@material-tailwind/react";

function Home({ responseData, setResponseData }) {

  const [updatedData, setUpdatedData] = useState(responseData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCuti, setOpenCuti] = useState(false);
  const [tglAwal, settglAwal] = useState('');
  const [tglAkhir, settglAkhir] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleApiResponse = (data) => {
    setResponseData(data);
  };

  const handleOpen = () => {
    setOpen(!open)
  };

  const handleOpenCuti = () => {
    setOpenCuti(!openCuti)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target || {};
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputCuti = (e) => {
    setKeterangan(e.target.value);
  };

  const handleInputTglAwalCuti = (e) => {
    settglAwal(e.target.value);
  };

  const handleInputTglAkhirCuti = (e) => {
    settglAkhir(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        'http://127.0.0.1:5000/updatedata', updatedData
      );

      dispatch(updateResponseData(updatedData));
      persistor.persist();
    
      Swal({
        position: 'top-end',
        icon: 'success',
        title: 'Updated data berhasil',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        handleOpen();
      });
    } catch (error) {
      console.error(error);
    }
  };

  const ajukanCuti = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/addcuti',
        { nik: updatedData.nik },
      );

      if (response.data.success) {
        const data = response.data.data;
        setResponseData(data);
        Swal({
            position: 'top-end',
            icon: 'success',
            title: 'Pengajuan Cuti Terkirim',
            showConfirmButton: false,
            timer: 1500
          })
      } else {
        Swal('Gagal', 'Silahkan Hubungi HRD', 'error');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
      <div className="flex p-10 flex-start">
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
        <Card className="p-3 w-96">
          <Button style={{ marginBottom: '10px' }} color="blue" onClick={handleOpen} >Edit Profil</Button>
          <Button style={{ marginBottom: '10px' }} color="amber">Lihat Absensi</Button>
          <Button style={{ marginBottom: '10px' }} color="red" onClick={handleOpenCuti} >Pengajuan Cuti</Button>
          <Button style={{ marginBottom: '10px' }} color="green">Pengajuan Lembur</Button>
        </Card>
        <Dialog size="md" open={open} handler={handleOpen} className="bg-transparent shadow-none">
        <Card className="w-full mx-auto">
          <CardHeader variant="gradient" color="blue" className="grid mb-4 h-28 place-items-center">
            <Typography variant="h3" color="white">DATA KARYAWAN</Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="NIK KARYAWAN" size="lg" name="nik" value={updatedData.nik}  onChange={handleInputChange} readOnly/>
            <Input label="NAMA LENGKAP" size="lg" name="nama_lengkap" value={updatedData.nama_lengkap} onChange={handleInputChange} />
            <Input label="TEMPAT LAHIR" size="lg" name="tempatlahir" value={updatedData.tempatlahir} onChange={handleInputChange} />
            <Input label="TANGGAL LAHIR" size="lg" name="tgllahir" value={updatedData.tgllahir} onChange={handleInputChange} />
            <Input label="AGAMA" size="lg" name="agama" value={updatedData.agama} onChange={handleInputChange} />
            <Input label="ALAMAT" size="lg" name="alamat" value={updatedData.alamat} onChange={handleInputChange} />
            <Input label="NO HP" size="lg" name="nohp" value={updatedData.nohp} onChange={handleInputChange} />
            <Input label="GOL DARAH" size="lg" name="golongandarah" value={updatedData.golongandarah} onChange={handleInputChange} />
            <Input label="STATUS" size="lg" name="status" value={updatedData.status} onChange={handleInputChange} />
            {/* <Input label="PHOTO" type="file" size="lg" name="photo" value={updatedData.photo} onChange={handleInputChange} /> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleUpdate} fullWidth>Update Data</Button>
          </CardFooter>
        </Card>
      </Dialog>

      <Dialog size="md" open={openCuti} handler={handleOpenCuti} className="bg-transparent shadow-none">
        <Card className="w-full mx-auto">
          <CardHeader variant="gradient" color="blue" className="grid mb-4 h-28 place-items-center">
            <Typography variant="h3" color="white">FORM PENGAJUAN CUTI</Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="NIK KARYAWAN" size="lg" name="nik" value={updatedData.nik}  />
            <Input label="NAMA LENGKAP" size="lg" name="nama_lengkap" value={updatedData.nama_lengkap} />
            <Input label="TGL AWAL CUTI" size="lg" name="tglawal" type="date" value={tglAwal} onChange={handleInputTglAwalCuti}  />
            <Input label="TGL AKHIR CUTI" size="lg" name="tglakhir" type="date" value={tglAkhir}  onChange={handleInputTglAkhirCuti} />
            <Input label="KETERANGAN" size="lg" name="keterangan" value={keterangan} onChange={handleInputCuti} />
          </CardBody>
          <CardFooter className="pt-2">
            <Button variant="gradient" onClick={ajukanCuti} style={{ marginLeft: '10px' }} >Ajukan Cuti</Button>
          </CardFooter>
        </Card>
      </Dialog>
      </div>      
    );
};

const mapStateToProps = (state) => ({
  responseData: state.responseData,
});
  
export default connect(mapStateToProps, { setResponseData })(Home);