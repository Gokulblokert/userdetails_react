import React from 'react'

const Homepage = () => {
    const getdata = () =>{
        alert("test alert");
    }
  return (
    <div>
<button onclick={getdata}>submit</button>
    </div>
  )
}

export default Homepage