import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const getRequest = () => {
    return axios
      .get(url)
      .then((res) => setData(res.data));
  };
  function postRequest() {
    axios
      .post(url, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        alert('posted');
      });
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "#15803d" }}>صفحه دریافت گزارشات</h1>
      <center>
        <div class="ant-space-item"><button type="button" onClick={postRequest}
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش پورسانت جمع آوری مدل درآمدی جدید</p>
        </button></div>
        <br />
        <div class="ant-space-item"><button type="button"
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش پورسانت توزیع مدل درآمدی جدید</p>
        </button></div>
        <br />
        <div class="ant-space-item"><button type="button"
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش پورسانت جمع آوری بر مبنای مالی</p>
        </button></div>
        <br />
        <div class="ant-space-item"><button type="button"
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش پورسانت توزیع بر مبنای مالی</p>
        </button></div>
        <br />
        <div class="ant-space-item"><button type="button"
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش عودتی</p>
        </button></div>
        <br />
        <div class="ant-space-item"><button type="button"
          class="ant-btn css-1wfosy4 ant-btn-default ant-dropdown-trigger w-50 h-12 bg-green-700 hover:bg-green-600 border-none rounded-md text-white text-center">
          <p class="text-sm" style={{ 'margin': '5px' }}>گزارش مرجوعی</p>
        </button></div>
        {console.log(data)}
        {data.map((dataObj, index) => {
          return (
            <p style={{ fontSize: 20, color: '#15803d' }}>{dataObj.name}</p>
          );
        })}
      </center>
    </div>
  );
}

export default App;