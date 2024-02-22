import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import rows from "../MockData"


export default function BasicTable({data1}) {
 
    const [data,setdata]=useState([...rows,...data1]);
   
    const handledelete=(index)=>{
        let data2=data.filter((i,ind)=>{
            return index!==ind;
        })
        setdata(data2)
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>DONOR</TableCell>
            <TableCell align="right">PANNEL</TableCell>
            <TableCell align="right">BARCODE&nbsp;</TableCell>
            <TableCell align="right">SOURCE&nbsp;</TableCell>
            <TableCell align="right">DATA&nbsp;</TableCell>
            <TableCell align="right">AMOUNT&nbsp;</TableCell>
            <TableCell align="right">OBSERVEDBY&nbsp;</TableCell>
            <TableCell align="right">STATUS&nbsp;</TableCell>
            <TableCell align="right">ACTION(Delete entry)&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.DONOR}</TableCell> */}
              <TableCell align="right">{row.PANNEL}</TableCell>
              <TableCell align="right">{row.BARCODE}</TableCell>
              <TableCell align="right">{row.SOURCE}</TableCell>
              <TableCell align="right">{row.DATA}</TableCell>
              <TableCell align="right">{row.AMOUNT}</TableCell>
              <TableCell align="right">{row.OBSERVEDBY}</TableCell>
              <TableCell align="right">{row.STATUS}</TableCell>
              <TableCell align="right"><button onClick={()=>{handledelete(index)}}>{row.ACTION}</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}