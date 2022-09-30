import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
const Homepage = () => {
  const [data, setdata] = React.useState("Test");
    const getdata = () =>{
        axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>{alert(JSON.stringify(res.data))})
        // alert("test alert");
    }
  return (
    <form>
      <TextField id="outlined-basic" label="" variant="outlined" onChange={(event)=>{
        setdata(event.target.value);
      }}/><br></br>
      <TextField id="outlined-basic" label={data} variant="outlined" />
      {console.log(data)}
<Button variant="contained" onClick={getdata}>Submit</Button>
    </form>
  )
}

export default Homepage