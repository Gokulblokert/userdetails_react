import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
const Homepage = () => {
  const [data, setdata] = React.useState("Test");
  const [data1, setdata1] = React.useState("Test");
  const [response, setResponse] = React.useState();
    const getdata = () =>{

      alert(data + data1);
        axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>setResponse(res));
        // alert("test alert");
    }
    const postdata = () =>{
         axios.post("http://sdj.freshmindz.in/api/getschemegram",
         {
          "name":data,
          "emailid":data1
         })
    }
  return (
    <form>
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={(event)=>{
        setdata(event.target.value);
      }}/><br></br>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(event)=>{
        setdata1(event.target.value);
      }}/>
      {console.log(data)}
<Button variant="contained" onClick={postdata}>Submit</Button>
    </form>
  )
}

export default Homepage