import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
const Homepage = () => {
    const getdata = () =>{

        axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>{alert(JSON.stringify(res.data))})
        // alert("test alert");
    }
  return (
    <form>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<Button variant="contained" onClick={getdata}>Contained</Button>
    </form>
  )
}

export default Homepage