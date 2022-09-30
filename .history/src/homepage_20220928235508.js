import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
const Homepage = () => {
  const [data, setdata] = useState("Test");
  const [data1, setdata1] = useState("Test");
  const [response, setResponse] = useState();

  useEffect(()=>{
   
  });

    const postdata = () =>{
         axios.post("http://sdj.freshmindz.in/api/sendotpp",
         {
          "otp":data,
          "mobile_no":data1
         });
         axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>setResponse(res));
         
    }
  return (
    <form>
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={(event)=>{
        setdata(event.target.value);
      }}/><br></br>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(event)=>{
        setdata1(event.target.value);
      }}/>
      {console.log(response)}
<Button variant="contained" onClick={postdata}>Submit</Button>
    </form>
  )
}

export default Homepage