import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
function Userpage() {
    const [data, setdata] = useState("");
const [data1, setdata1] = useState("");
const [response, setResponse] = useState();



function getData() {
    axios
      .get("https://test.saitechnosolutions.net/api/getuser")
      .then((res) => alert(res.data));
      
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
            window.location.reload(false);
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
        <from id="myForm">
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
        <br></br>
        <Button variant="contained" onClick={postdata}>
          Submit
        </Button>
        </from>

        <br></br>
        <br></br>
        <div className="App">
       <table>
  <tr>
    <th>S.no</th>
    <th>User Name</th>
    <th>Email</th>
  </tr>
  {/* {response.map((e1l) => {
          return (
            <tr>
              <td>{e1l.id}</td>
              <td>{e1l.user_name}</td>
              <td>{e1l.email_id}</td>
            </tr>
          );
        })
      } */}
</table>
</div>

    </div>
  )
}

export default Userpage