import React from 'react'
// import axios from 'axios'
const Homepage = () => {
    // const handleSubmit = () =>{

    //     axios.get("http://sdj.freshmindz.in/api/getschemegram").then(res=>{alert(JSON.stringify(res.data))})
    //     // alert("test alert");
    // }
    const handleSubmit= (e) => {
        e.preventDefault();
        // ???
      }
  return (
//     <div>
// <button onClick={getdata}>submit</button>
//     </div>
<form onSubmit={e => {handleSubmit(e)}}>
<label>Chore Description</label>
<br />
<input 
  name='choreDesc' 
  type='text'
/>
<br/>
<label>Name</label>
<br />
<input 
  name='userName' 
  type='text' 
/>
<br />
<label>Date</label>
<br />
<input
  name='dt' 
  type='date'
/>
<br/>
<input 
  className='submitButton'
  type='submit' 
  value='Log Chore' 
/>
</form>
  )
}

export default Homepage