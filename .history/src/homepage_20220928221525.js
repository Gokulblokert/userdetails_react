import React from 'react'

const Homepage = () => {
    const getdata = () =>{
        alert("test alert");
    }
  return (
    <div>
<button onClick={getdata}>submit</button>
    </div>
  )
}

export default Homepage