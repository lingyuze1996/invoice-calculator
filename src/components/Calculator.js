import { Container, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import InvoiceTable from "./InvoiceTable";

export default function Calculator() {
    const [invoices, setInvoices] = useState([])
    const [number, setNumber] = useState(0)
    const [amount, setAmount] = useState(0)
    const [invoice, setInvoice] = useState()
    const [result, setResult] = useState([])

    const handleAddInvoice = () => {
        setInvoices((preState) => {
            let newState = [...preState]
            newState.push(invoice)
            setInvoice("")
            return newState
        })
    }

    const handleDeleteInvoice = (index) => {
        setInvoices((preState) => {
            let newState = [...preState]
            newState.splice(index, 1)
            return newState
        })
    }

    const handleCalculation = async () => {

    }

    return (
        <Container maxWidth="xl" >
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <h2>{`请输入分配人数:`}
                        <TextField
                            style={{ marginLeft: "10px" }}
                            size="small"
                            value={number}
                            onChange={(e) => setNumber(+ e.target.value)}
                            type="number"
                        />
                    </h2>
                </Grid>
                <Grid item md={4}>
                    <h2>{`请输入人均分配额度: `}
                        <TextField
                            style={{ marginLeft: "10px" }}
                            size="small"
                            value={amount}
                            onChange={(e) => setAmount(+ e.target.value)}
                            type="number"
                        />
                    </h2>
                </Grid>
                <Grid item md={4}>
                    <h2>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleCalculation}>
                            生成分配结果
                        </Button>
                    </h2>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item md={6}>
                    <h2>{`请输入发票金额: `}
                        <TextField
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                            size="small"
                            value={invoice}
                            onChange={(e) => setInvoice(+ e.target.value)}
                            type="number"
                        />

                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAddInvoice}>
                            添加
                        </Button>
                    </h2>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item md={3}>
                    <h2>{`当前发票张数: ${invoices.length}`}</h2>
                    <h2>{`当前发票金额总额: ${Math.round(invoices.reduce((a, b) => a + b, 0) * 100) / 100}`}</h2>
                    <InvoiceTable deleteElement={handleDeleteInvoice} invoices={invoices} />
                </Grid>
                <Grid item md={4}>

                </Grid>

            </Grid>
        </Container >
    )
}