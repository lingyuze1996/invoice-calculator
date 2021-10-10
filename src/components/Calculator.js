import { Container, Grid } from "@mui/material";

export default function Calculator() {
    return (
        <>
            <Container maxWidth="xl" >
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        输入发票
                    </Grid>
                    <Grid item md={6}>
                        分配结果
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}