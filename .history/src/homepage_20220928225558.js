import React from 'react'
import axios from 'axios'
const Homepage = () => {
    const getdata = () =>{

        axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>{alert(JSON.stringify(res.data))})
        // alert("test alert");
    }
  return (
    <div>
<button onClick={getdata}>submit</button>
    </div>
  )
}

export default Homepage