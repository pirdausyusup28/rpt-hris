import { React, useRef, useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData } from '../actions';
import { persistor } from '../store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography} from "@material-tailwind/react";


function InformasiData({ responseData })
{
    const [updatedData, setUpdatedData] = useState(responseData);
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

      useEffect(() => {
        axios.get(`http://127.0.0.1:5000/image/${responseData.photo}`, { responseType: 'blob' })
          .then(response => {
            const reader = new FileReader();
            reader.onloadend = () => {
              const imageData = reader.result;
              setImageUrl(imageData);
            };
            reader.readAsDataURL(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const handleFileUpload = () => {
        const file = fileInputRef.current.files[0];
        setSelectedFile(URL.createObjectURL(file));
      
        const formData = new FormData();
        formData.append('photo', file);
        formData.append('nik', responseData.nik);
      
        axios.post('http://127.0.0.1:5000/uploadphoto', formData)
          .then(response => {
            dispatch(updateResponseData(updatedData));
            persistor.persist();
            console.log('updatedData')
            console.log(updatedData)
          
            Swal({
              position: 'top-end',
              icon: 'success',
              title: 'Updated Photo berhasil, Silakan Melakukan Logout Kemudian Login Kembali untuk melihat perubahan photo',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(error => {
            console.error(error);
          });
      };

    return (
      <>
  <Card className="w-96">
    <CardHeader floated={false} className="flex items-center justify-center h-80">
      {selectedFile ? (
        <img src={selectedFile} alt="Preview" className="h-80" />
      ) : (
        <img src={imageUrl} alt="Default" className="h-80" />
      )}
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" color="blue-gray" className="mb-2">
        {responseData?.nama_lengkap}
      </Typography>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileUpload} />
      <button style={{ marginBottom: '10px' }} color="blue" onClick={() => fileInputRef.current.click()}>
        Ganti Photo
      </button>
    </CardBody>
  </Card>
  <Card className="w-full overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 table-responsive">
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