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
  const [tableCuti, setTableCuti] = useState([]);

  useEffect(() => {
    fetchData();
    fetchDataCuti();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/kehadiran/${responseData.nik}`);
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataCuti = async () => {
    try{
      const response = await axios.get(`http://127.0.0.1:5000/cuti/${responseData.nik}`);
      setTableCuti(response.data);
    } catch(error) {
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
        </div>
        <div className="flex p-10 flex-start">
        <Card className="w-full p-3">
          <div className="flex justify-center">
            <Button style={{ marginBottom: '10px' }} color="blue" onClick={handleOpen}>
              Edit Profil
            </Button>
            <Button style={{ marginBottom: '10px' }} color="red" onClick={handleOpenCuti}>
              Pengajuan Cuti
            </Button>
            <Button style={{ marginBottom: '10px' }} color="green">
              Pengajuan Lembur
            </Button>
          </div>
        </Card>
          <EditProfil responseData={responseData} setResponseData={setResponseData} open={open} handleOpen={handleOpen} />
          <AddCuti responseData={responseData} setResponseData={setResponseData} openCuti={openCuti} handleOpenCuti={handleOpenCuti} />
        </div>
        <div className="flex p-10 flex-start">
          <p>INFORMASI PENGAJUAN CUTI</p>
          <Card className="w-full h-full overflow-scroll">
          <table className="w-full text-left table-auto min-w-max table-responsive">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-gray-100">TANGGAL AWAL</th>
                <th className="px-4 py-2 bg-blue-gray-100">TANGGAL AKHIR</th>
                <th className="px-4 py-2 bg-blue-gray-100">KETERANGAN</th>
                <th className="px-4 py-2 bg-blue-gray-100">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(tableCuti) ? (
                tableCuti.map((item, index) => (
                  <tr key={index} className={(index % 2 === 0) ? 'bg-blue-gray-50' : 'bg-transparent'}>
                    <td className="px-4 py-2">{item['tglawal']}</td>
                    <td className="px-4 py-2">{item['tglakhir']}</td>
                    <td className="px-4 py-2">{item['keterangan']}</td>
                    <td className="px-4 py-2">{item['status']}</td>
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
          <table className="w-full text-left table-auto min-w-max table-responsive">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-gray-100">TANGGAL</th>
                <th className="px-4 py-2 bg-blue-gray-100">JAM KELUAR</th>
                <th className="px-4 py-2 bg-blue-gray-100">JAM MASUK</th>
                <th className="px-4 py-2 bg-blue-gray-100">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(tableData) ? (
                tableData.map((item, index) => (
                  <tr key={index} className={(index % 2 === 0) ? 'bg-blue-gray-50' : 'bg-transparent'}>
                    <td className="px-4 py-2">{item['tanggal']}</td>
                    <td className="px-4 py-2">{item['jamkeluar']}</td>
                    <td className="px-4 py-2">{item['jammasuk']}</td>
                    <td className="px-4 py-2">{item['keterangan']}</td>
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