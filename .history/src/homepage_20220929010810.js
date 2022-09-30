import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Test from "./Test";
const Homepage = () => {
  const [data, setdata] = useState("Test");
  const [data1, setdata1] = useState("Test");
  const [response, setResponse] = useState();


  function getData() {
    axios
      .get("http://sdj.freshmindz.in/api/getschemegram")
      .then((res) => setResponse(res.data));
  }

  const postdata = () => {
    axios
      .post("http://sdj.freshmindz.in/api/sendotpp", {
        otp: data,
        mobile_no: data1,
      })
      .then((res) => {
        if (res.status === 200) getData();
      });
  };
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          onChange={(event) => {
            setdata(event.target.value);
          }}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          onChange={(event) => {
            setdata1(event.target.value);
          }}
        />
        <Button variant="contained" onClick={postdata}>
          Submit
        </Button>
      
        
      </form>


      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
    </tr>
  </thead>
  <tbody>
  {response.map((el) => {
          
      return (
    <tr>
      <th scope="row">1</th>
      <td>{el.id}</td>
      <td>{el.scheme_name}</td>
      
    </tr>
          )
  })}
  </tbody>
</table>
    </div>
  );
};

export default Homepage;
