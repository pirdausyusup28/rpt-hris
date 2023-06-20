import { React, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { setResponseData } from './actions';
import axios from 'axios';
import { Card, Button} from "@material-tailwind/react";
import InformasiData from './components/InformasiData';
import EditProfil from './components/EditProfil';
import AddCuti from "./components/AddCuti";

function Home({ responseData, setResponseData }) {

  const [open, setOpen] = useState(false);
  const [openCuti, setOpenCuti] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/kehadiran/${responseData.nik}`);
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {
    setOpen(!open)
  };

  const handleOpenCuti = () => {
    setOpenCuti(!openCuti)
  };

  
  
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
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">TANGGAL</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">JAM KELUAR</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">JAM MASUK</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(tableData) ? (
                tableData.map((item, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">{item['tanggal']}</td>
                    <td className="p-4">{item['jamkeluar']}</td>
                    <td className="p-4">{item['jammasuk']}</td>
                    <td className="p-4">{item['keterangan']}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          </Card>
        </div>
        <div className="flex p-10 flex-start">
          <p>TIMESHEET KEHADIRAN BULAN INI</p>
          <Card className="w-full h-full overflow-scroll">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">TANGGAL</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">JAM KELUAR</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">JAM MASUK</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(tableData) ? (
                tableData.map((item, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4">{item['tanggal']}</td>
                    <td className="p-4">{item['jamkeluar']}</td>
                    <td className="p-4">{item['jammasuk']}</td>
                    <td className="p-4">{item['keterangan']}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No data available</td>
                </tr>
              )}
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