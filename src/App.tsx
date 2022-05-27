import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myInit = {
  headers: {},
  response: true,
};

const myAPI = "apia0a87111";
const path = '/customers';

let customer_name=""
let customer_msg = ""

const App = () => {
  const [input, setInput] = useState("");
  const [customers,setCustomers] = useState([]);

  function getCustomer() {
    API.get(myAPI,path, myInit)
    .then(response => {
      console.log(response.data);
      customer_name = response.data.customerName;
      customer_msg = response.data.Msg;
      console.log(customer_msg);
      console.log("hi");
      <div>
        <h2>Response</h2>
        document.body.innerHTML = "<p><strong>" + customer_name + "</strong></p>"
        <span><b>Customer Name:</b> customer_name - <b>Customer Msg:</b> {customer_msg}</span>
      </div>
      
    })
    
    .then((myJson) => {
      return (
        document.body.innerHTML = "<span><b>Customer Name:</b> "+ customer_name + " - <b>Customer Msg:</b> " + customer_msg + "</span>"

    );
    });
  }

  return (
    <div className="App">
      
      <p> hello </p>
      <h1>Simple React App using TS and JS</h1>
      <button onClick={() => getCustomer()}>Get Customer Name</button>
    </div>
  )
}

export default App;
