import React from 'react'
import { useState } from 'react'
const Reports = ({setData1}) => {
  const [store1,setstore]=useState([]);
  const [data,setData]=useState({
    DONOR:"",
    PANNEL:"",
    BARCODE:"",
    SOURCE:"",
    DATA:"",
    AMOUNT:"",
    OBSERVEDBY:"",
    STATUS:""
})
 const handleChange=(e)=>{
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
  
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  setstore([...store1, data]);
  setData1(store1)
 
};
  return (
    <div style={{ width:"100vw"}}>
      <h1>Enter the you want to display on BasicTable</h1>
     <div style={{display:"flex", width:"100%"}} >
     <form>
      <tr style={{display:"flex", flexDirection:"column"}}>
      <div style={{display:"flex",width:"500px",justifyContent:"space-between", margin:"15px",padding:"15px"}}> 
        <td> <input type="text" value={data.DONOR} name="DONOR" placeholder="DONOR..." onChange={handleChange}></input></td>
       <td><input type="text" value={data.PANNEL} name="PANNEL"placeholder="PANNEL..." onChange={handleChange}></input></td> 
        </div>
       
        <div style={{display:"flex",width:"500px",justifyContent:"space-between", margin:"15px",padding:"15px"}}> 
        <td> <input type="text" value={data.BARCODE} name="BARCODE" onChange={handleChange}></input></td>
       <td> <input type="text" value={data.SOURCE} name="SOURCE" onChange={handleChange}></input></td>
       </div> 
       
      <div style={{display:"flex",width:"500px",justifyContent:"space-between", margin:"15px",padding:"15px"}}> 
        <td> <input type="text" value={data.DATA} name="DATA" onChange={handleChange}></input></td>
       <td> <input type="text" value={data.AMOUNT} name="AMOUNT" onChange={handleChange}></input></td>
       </div>
       <div style={{display:"flex",width:"500px",justifyContent:"space-between", margin:"15px",padding:"15px"}}> 
       <td>  <input type="text" value={data.OBSERVEDBY}name="OBSERVEDBY" onChange={handleChange}></input></td>
       <td> <input type="text" value={data.STATUS} name="STATUS" onChange={handleChange}></input></td>
       </div>
        </tr>
      </form>
     </div>
     <div>
      <button type="submit" onClick={(e) => handleSubmit(e)}> Submit</button>
     </div>
    </div>
  )
} 

export default Reports