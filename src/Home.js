import { React, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { setResponseData, updateResponseData } from './actions';
import { persistor } from './store';
import axios from 'axios';
import Swal from 'sweetalert';
import { Card, CardHeader, CardBody, Typography, Button, Dialog, CardFooter, Input} from "@material-tailwind/react";
import InformasiData from './components/InformasiData';
import EditProfil from './components/EditProfil';
import AddCuti from "./components/AddCuti";

function Home({ responseData, setResponseData }) {

  const [updatedData, setUpdatedData] = useState(responseData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCuti, setOpenCuti] = useState(false);

  const handleApiResponse = (data) => {
    setResponseData(data);
  };

  const handleOpen = () => {
    setOpen(!open)
  };

  const handleOpenCuti = () => {
    setOpenCuti(!openCuti)
  };

  const TABLE_HEAD = ["TANGGAL", "NIK", "JAM MASUK", "JAM KELUAR","KETERANGAN"];
 
const TABLE_ROWS = [
  {
    tanggal: "2023-06-01",
    nik: "12345",
    jammasuk: "09:00",
    jamkeluar: "17:00",
    keterangan: "TELAT",
  }
];

  
  
    return (
      <>
        <div className="flex p-10 flex-start">
          <InformasiData></InformasiData>
          
          <Card className="p-3 w-96">
            <Button style={{ marginBottom: '10px' }} color="blue" onClick={handleOpen} >Edit Profil</Button>
            {/* <Button style={{ marginBottom: '10px' }} color="amber">Lihat Absensi</Button> */}
            <Button style={{ marginBottom: '10px' }} color="red" onClick={handleOpenCuti} >Pengajuan Cuti</Button>
            <Button style={{ marginBottom: '10px' }} color="green">Pengajuan Lembur</Button>
          </Card>

          <EditProfil responseData={responseData} setResponseData={setResponseData} open={open} handleOpen={handleOpen} />
          <AddCuti responseData={responseData} setResponseData={setResponseData} openCuti={openCuti} handleOpenCuti={handleOpenCuti} />
        </div>
        <div className="flex p-10 flex-start">
          <p>INFORMASI PENGAJUAN CUTI</p>
          <Card className="w-full h-full overflow-scroll">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ tanggal, nik, jammasuk, jamkeluar, keterangan }, index) => (
                  <tr key={nik} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {tanggal}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {nik}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {jammasuk}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {jamkeluar}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {keterangan}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
        <div className="flex p-10 flex-start">
          <p>TIMESHEET KEHADIRAN HARI INI</p>
          <Card className="w-full h-full overflow-scroll">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ tanggal, nik, jammasuk, jamkeluar, keterangan }, index) => (
                  <tr key={nik} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {tanggal}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {nik}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {jammasuk}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {jamkeluar}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {keterangan}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </>      
    );
};

const mapStateToProps = (state) => ({
  responseData: state.responseData,
});
  
export default connect(mapStateToProps, { setResponseData })(Home);