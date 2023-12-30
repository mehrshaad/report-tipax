// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/style.css';
import "./mdbreact/dist/css/mdb.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBDataTable } from 'mdbreact';
import { MDBSpinner } from 'mdb-react-ui-kit';
import logoTipax from "./static/media/logoTipax.svg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col, Button, Card, ButtonGroup } from 'react-bootstrap';
import { DatePicker } from "zaman";
import { useNavigate } from "react-router-dom";
import { downloadExcel } from 'react-export-table-to-excel';
import ContentLoader, { Code } from 'react-content-loader'

function App() {
  const navigate = useNavigate();
  // {
  //   "Period": "d/w/m/y",
  //   "CampaignId": 0,
  //   "ProvinceId": "00000000-0000-0000-0000-000000000000",
  //   "CityId": "00000000-0000-0000-0000-000000000000",
  //   "BranchId": "00000000-0000-0000-0000-000000000000"
  // }

  // const url = "http://jet.tipax.ir:100/odata/Tipax/DspContractTrackings/Tipax.GetGeneralResult";
  // const url = "http://jet.tipax.ir:100/odata/Tipax/CmnCampaigns/Tipax.GetCampaignReport";
  const url = "http://jet.tipax.ir:100/odata/Tipax/$metadata#Tipax.Api.Dispatch.TrackingResult";
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showSpinner, setSpinner] = useState(false);
  const [selectedDate, setDate] = useState(new Date())
  const getRequest = () => {
    return axios
      .get(url)
      .then((res) => setData(res.data));
  };
  function processData() {
    // setShowTable(false)
    if (!data) {
      // setShowTable(true)
      return {};
    }
    const jsonDataset = data;
    const keys = Object.keys(jsonDataset);
    const values = Object.values(jsonDataset);
    const columns = keys.map((key, index) => ({
      label: key.toUpperCase(),
      field: key.toLowerCase(),
      sort: 'asc',
      width: 'auto',
    }));
    const rows = values.map((_, rowIndex) => {
      const row = {};
      keys.forEach((key, colIndex) => {
        row[key.toLowerCase()] = values[colIndex][rowIndex];
      });
      return row;
    });
    const dataTableData = {
      columns,
      rows,
    };
    // setShowTable(true)
    return dataTableData;
  }
  function postRequest() {
    setSpinner(true)
    setData(require('./static/data/tempData.json'))
    console.log(selectedDate)
    // axios
    //   .post(url, jsonData)
    //   .then((response) => {
    //     alert(`posted\nresponse: ${response}`);
    //   });
    setSpinner(false)
    setShowTable(true)
  }
  function logOut() {
    navigate("/", { replace: true })
  };
  function handleDownloadExcel() {
    if (!data) {
      return;
    }
    const jsonDataset = data;
    const header = Object.keys(jsonDataset);
    const body = Object.values(jsonDataset);
    downloadExcel({
      fileName: `Report ${new Date()}`,
      sheet: "Sheet1",
      tablePayload: {
        header,
        body: body,
      },
    });
  };
  useEffect(() => {
    if (showTable) {
      setTimeout(() => {
        setShowTable(true);
      }, 2000);
    } else {
      setShowTable(false);
    }
    console.log(process.env.REACT_APP_API_KEY)
  }, [showTable]);
  return (
    <>
      <header className="w-full fixed top-0 z-50 d-flex justify-between h-20 bg-green-700 border-b-2">
        <div><img src={logoTipax} alt="TipaxLogo"
          className="inline-block mx-5 w-32 mt-4" /></div>
        <div className="mt-7 mx-14"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" onClick={() => logOut()}
          className="text-2xl text-white cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 12 5 4v-3h9v-2H7V8z"></path>
          <path
            d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z">
          </path>
        </svg></div>
      </header>
      <div className="py-2 mt-20 px-20">
        <Container fluid size='md'>
          <Row className="d-flex justify-content-around text-xl shadow bg-body rounded p-4">
            <Col className="d-flex justify-content-center">
              <p>تاریخ را انتخاب کنید</p>
            </Col>
            <Col className="d-flex justify-content-center" md={1}>
              <div class="vr"></div>
            </Col>
            <Col className="d-flex justify-content-center">
              <DatePicker
                className="datepicker border-none"
                accentColor="#15803d"
                round="x4"
                position="center"
                defaultValue={new Date()}
                weekends={[6]}
                direction="rtl"
                onChange={(e) => setDate(e.value)}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="mt-2 shadow bg-body rounded p-4">
            <Col className="justify-content-center" md={6}>
              <Card className="shadow bg-body rounded">
                <Card.Body>
                  <Card.Title>گزارشات پورسانت مدل درآمدی جدید</Card.Title>
                  <Card.Text>توضیحات</Card.Text>
                  <ButtonGroup aria-label="Basic example" className="d-flex justify-content-center" dir="ltr">
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>جمع آوری</Button>
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>توزیع</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col className="justify-content-center" md={3}>
              <Card className="shadow bg-body rounded">
                <Card.Body>
                  <Card.Title>گزارشات پورسانت بر مبنای مالی</Card.Title>
                  <Card.Text>توضیحات</Card.Text>
                  <ButtonGroup aria-label="Basic example" className="d-flex justify-content-center" dir="ltr">
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>جمع آوری</Button>
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>توزیع</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col className="justify-content-center" md={3}>
              <Card className="shadow bg-body rounded">
                <Card.Body>
                  <Card.Title>سایر گزارشات</Card.Title>
                  <Card.Text>توضیحات</Card.Text>
                  <ButtonGroup aria-label="Basic example" className="d-flex justify-content-center" dir="ltr">
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>عودتی</Button>
                    <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => postRequest()}>مختومه</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid className="shadow bg-body rounded">
          <Row className={`mt-2 p-2 d-flex justify-content-around ${(!showTable) ? "blur-bg" : ""}`}>
            <Button variant="success" className="bg-green-700 hover:bg-green-600 border-none text-center" onClick={() => handleDownloadExcel()}>دریافت خروجی به صورت اکسل</Button>
          </Row>
          {(!showTable) ?
            <div className='d-flex justify-content-center align-items-center'>
              <strong className="px-2 loader-text">درحال خواندن دیتا...</strong>
              <MDBSpinner role='status' size='sm' className="green-spinner">
                <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
            </div> : ''}
          <Row className={`p-2 px-0 text-center justify-content-center align-items-center ${(!showTable) ? "blur-bg" : ""}`}>
            <MDBDataTable
              striped
              entriesOptions={[5, 10, 15, 20, 25]}
              // order={['name', 'asc']}
              info={true}
              entries={10}
              hover
              noBottomColumns
              searchLabel={'جست و جو کردن'}
              infoLabel={['نمایش آیتم های ', ' تا ', ' از ', ' رکورد پیدا شده.']}
              advancedData
              displayEntries={true}
              responsiveMd
              barReverse
              // scrollX
              // exportToCSV={true}
              className="mx-2"
              // searchingLabel={"hello"}
              entriesLabel={'تعداد نمایش در هر صفحه'}
              // onPageChange={(e)=>console.log(e)}
              search
              fixedHeader
              paginationLabel={['<', '>']}
              noRecordsFoundLabel={"موردی یافت نشد!"}
              data={processData()}
            />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;