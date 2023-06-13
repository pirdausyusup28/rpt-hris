import { React, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData,resetValue } from '../actions';
import { persistor } from '../store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography, Button, Dialog, CardFooter, Input} from "@material-tailwind/react";


function AddCuti({ responseData, setResponseData, openCuti, handleOpenCuti })
{
  const [updatedData, setUpdatedData] = useState(responseData);
  const dispatch = useDispatch();
  const [tglAwal, settglAwal] = useState('');
  const [tglAkhir, settglAkhir] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleApiResponse = (data) => {
    setResponseData(data);
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

  const ajukanCuti = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/addcuti',{ 
          nik: updatedData.nik,
          tglawal: tglAwal,
          tglakhir: tglAkhir,
          keterangan: keterangan 
        },
      );

      if (response.data.success) {
        const data = response.data.data;
        setResponseData(data);
        dispatch(updateResponseData(updatedData));
        persistor.persist();
        Swal({
            position: 'top-end',
            icon: 'success',
            title: 'Pengajuan Cuti Terkirim',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            handleOpenCuti();
          });
          // dispatch(resetValue());
      } else {
        dispatch(updateResponseData(updatedData));
        persistor.persist();
        Swal('Gagal', 'Silahkan Hubungi HRD', 'error');
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <>
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
        </>
    );
}

const mapStateToProps = (state) => ({
    responseData: state.responseData,
  });
    
export default connect(mapStateToProps, { setResponseData })(AddCuti)