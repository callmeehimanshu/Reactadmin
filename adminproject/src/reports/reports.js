import React from 'react'
import { useState } from 'react'
import rows from "../MockData"
const Reports = () => {
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
  console.log("store-----",store1)
  
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  setstore([...store1, data]);
  // setData({ name: "", email: "" });
  // console.log(store);
 
};
  return (
    <div>
     <div>
     <form>
        <input type="text" value={data.DONOR} name="DONOR" onChange={handleChange}></input>
        <input type="text" value={data.PANNEL} name="PANNEL" onChange={handleChange}></input>
        <input type="text" value={data.BARCODE} name="BARCODE" onChange={handleChange}></input>
        <input type="text" value={data.SOURCE} name="SOURCE" onChange={handleChange}></input>
        <input type="text" value={data.DATA} name="DATA" onChange={handleChange}></input>
        <input type="text" value={data.AMOUNT} name="AMOUNT" onChange={handleChange}></input>
        <input type="text" value={data.OBSERVEDBY}name="OBSERVEDBY" onChange={handleChange}></input>
        <input type="text" value={data.STATUS} name="STATUS" onChange={handleChange}></input>
      </form>
     </div>
     <div>
      <button type="submit" onClick={(e) => handleSubmit(e)}> Submit</button>
     </div>
    </div>
  )
} 

export default Reports