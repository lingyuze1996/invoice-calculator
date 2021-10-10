import { Container, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import { InvoiceTable, DistributionTable } from "./DataTable";
import { calculate } from "../utils/APICalculation"

export default function Calculator() {
    const [invoices, setInvoices] = useState([])
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")
    const [invoice, setInvoice] = useState("")
    const [distribution, setDistribution] = useState([])

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
        if (number === "" || amount === "" || amount * number > Math.round(invoices.reduce((a, b) => a + b, 0) * 100) / 100) {
            alert("发票总金额不足以完成分配, 请添加新的发票！")
            return
        }

        const response = await calculate(number, amount, invoices)
        setDistribution(response)
    }

    return (
        <Container maxWidth="xl" >
            <Grid container spacing={12}>
                <Grid item md={6}>
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
                <Grid item md={6}>
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
            </Grid>

            <Grid container spacing={12}>
                <Grid item md={6}>
                    <h2>{`请输入发票金额: `}
                        <TextField
                            style={{ marginLeft: "10px", marginRight: "20px" }}
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
                <Grid item md={6}>
                    <h2>
                        <Button
                            variant="contained"
                            size="large"
                            color="success"
                            onClick={handleCalculation}>
                            生成分配结果
                        </Button>
                    </h2>
                </Grid>
            </Grid>

            <Grid container spacing={12}>
                <Grid item md={6}>
                    <h2>{`当前发票张数: ${invoices.length}`}</h2>
                    <h2>{`当前发票金额总额: ${Math.round(invoices.reduce((a, b) => a + b, 0) * 100) / 100}`}</h2>
                    <InvoiceTable deleteElement={handleDeleteInvoice} invoices={invoices} />
                </Grid>
                <Grid item md={6} justifyContent="flex-end">
                    {
                        distribution.length > 0
                            ?
                            <div>
                                <h2 style={{textAlign: "center"}}>发票金额分配表</h2>
                                <DistributionTable distributions={distribution} />
                            </div>
                            : ""
                    }
                </Grid>
            </Grid>
        </Container >
    )
}