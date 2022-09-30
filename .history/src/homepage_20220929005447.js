import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Test from "./Test";
const Homepage = () => {
  const [data, setdata] = useState("Test");
  const [data1, setdata1] = useState("Test");
  const [response, setResponse] = useState();

  useEffect(() => {});

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
        if (res.status === 200) {
          var data = JSON.stringify(res.data.status);
          if(data === "200"){

          }
        }
      });
  };
  return (
    <div class="table">
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
        {/* <p>{JSON.stringify(response)}</p> */}
        <Test response={response}/>
      </form>
    </div>
  );
};

export default Homepage;
