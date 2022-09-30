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

  function getData (){
    axios.get("https://test.saitechnosolutions.net/api/getuser").then(res=>setResponse(res.data));
  }

    const postdata = () =>{
         axios.post("https://test.saitechnosolutions.net/api/savedata",
         {
          "username":data,
          "email":data1
         }).then(res=>{if(res.status === 200) getData()});
         

    }
  return (
    <div>
       <form>
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={(event)=>{
        setdata(event.target.value);
      }}/><br></br>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(event)=>{
        setdata1(event.target.value);
      }}/>
<Button variant="contained" onClick={postdata}>Submit</Button>
<p>{JSON.stringify(response)}</p>

    </form>
  
    </div>
   
  )
}

export default Homepage