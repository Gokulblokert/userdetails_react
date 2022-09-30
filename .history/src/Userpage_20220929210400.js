import React, { useState } from "react";
 import axios from "axios";
 import Button from "react-bootstrap/Button";
 import Form from "react-bootstrap/Form";
 import Table from "react-bootstrap/Table";
 
 function Userpage() {
   const [data, setdata] = useState("");
   const [data1, setdata1] = useState("");
   const [response, setResponse] = useState();
   const [tableVisibility, setvisibility] = useState(false);
 
   function getData() {
     axios
       .get("https://test.saitechnosolutions.net/api/getuser")
       .then((res) => {setResponse(res.data);setvisibility(true)});
   }
 
   const postData = () => {
     axios
       .post("https://test.saitechnosolutions.net/api/savedata", {
         username: data,
         email: data1,
       })
       .then((res) => {
         if (res.status === 200) {
           var r = JSON.parse(res.data.status);
           if (r === 200) {
             alert("Data saved");
             getData();
             setdata("");
             setdata1("");
           } else if (r === 202) {
             alert("Email Already Exists");
           } else if (r === 203) {
             alert("Please provide valid data");
           }
         }
       });
   };
   return (
     <div className="container">
       <Form >
         <Form.Group className="mb-3" controlId="text">
           <Form.Label>Username</Form.Label>
           <Form.Control
             type="text"
             placeholder="Username"
             onChange={(event) => {
               setdata(event.target.value);
             }}
             value={data}
             required
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email Id</Form.Label>
           <Form.Control
             type="email"
             placeholder="Enter email id"
             onChange={(event) => {
               setdata1(event.target.value);
             }}
             value={data1}
             required
           />
         </Form.Group>
         <Button variant="primary" onClick={postData}>
           Submit
         </Button>
       </Form>
 
       {tableVisibility ? <Table striped bordered hover style={{ marginTop: "2rem" }}>
         <thead>
           <tr>
             <th>Id</th>
             <th>Username</th>
             <th>Email Id</th>
           </tr>
         </thead>
         <tbody>
           {response &&
             response.map((row) => {
               return (
                 <tr>
                   <td>{row.id}</td>
                   <td>{row.user_name}</td>
                   <td>{row.email_id}</td>
                 </tr>
               );
             })}
         </tbody>
       </Table> : <></>
 }
     </div>
   );
 }
 
 export default Userpage;
