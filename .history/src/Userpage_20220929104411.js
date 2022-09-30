import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
function Userpage() {
    const [data, setdata] = useState("Test");
const [data1, setdata1] = useState("Test");
const [response, setResponse] = useState();

useEffect(()=>{
 
});
function getData() {
    axios
      .get("https://test.saitechnosolutions.net/api/getuser")
      .then((res) => setResponse(res.data));

      alert(response);
  }

  const postdata = () => {
    axios
      .post("https://test.saitechnosolutions.net/api/savedata", {
        username: data,
        email: data1,
      })
      .then((res) => {
        if (res.status === 200){
          var r= JSON.parse(res.data.status);

         
          if(r===200){
            alert("Data saved");
            getData();

          }else if(r===202){
            alert("Email Already Exist");
          }else if(r===203){
            alert("Please Enter Required Feild");
          }
        };
      });
  };
  return (
    <div className="App">
        <from>
         <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          required
          onChange={(event) => {
            setdata(event.target.value);
          }}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          required
          onChange={(event) => {
            setdata1(event.target.value);
          }}
        />
        <br></br>
        <Button variant="contained" onClick={postdata}>
          Submit
        </Button>
        </from>
        {/* <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {response.map((el) => {
          
          return (
            <tr>
              <td>{el.id}</td>
              <td>{el.scheme_name}</td>
            </tr>
          );
        })
      </table> */}
    </div>
  )
}

export default Userpage