import { React, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData } from '../actions';
import { persistor } from '../store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography, Button, Dialog, CardFooter, Input} from "@material-tailwind/react";


function EditProfil({ responseData, setResponseData, open, handleOpen })
{
    const [updatedData, setUpdatedData] = useState(responseData);
    const dispatch = useDispatch();

    const handleApiResponse = (data) => {
        setResponseData(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target || {};
        setUpdatedData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
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

    return (
        <>
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
        </>
    );
}

const mapStateToProps = (state) => ({
    responseData: state.responseData,
  });
    
export default connect(mapStateToProps, { setResponseData })(EditProfil)