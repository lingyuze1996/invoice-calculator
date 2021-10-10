import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function InvoiceTable(props) {
    let invoices = props.invoices

    return (
        <TableContainer style={{marginBottom: "20px"}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell variant="head"><b>序号</b></TableCell>
                        <TableCell align="right" variant="head"><b>金额</b></TableCell>
                        <TableCell align="center" variant="head"><b>删除</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoices.length > 0
                    ?
                    invoices.map((row, index) => (
                        <TableRow
                            key={index}
                        >
                            <TableCell size="small">{index + 1}</TableCell>
                            <TableCell align="right" size="small">{row}</TableCell>
                            <TableCell align="center"><IconButton onClick={() => { props.deleteElement(index) }}><DeleteIcon color="warning" /></IconButton></TableCell>
                        </TableRow>
                    )) 
                    : 
                    ""}
                </TableBody>
            </Table>
        </TableContainer>
    )
}