import * as React from "react";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import { useFormik, FormikProvider } from "formik";
// Material
import LoadingButton from "@mui/lab/LoadingButton";
// Material
import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import TextField from "@mui/material/TextField";
// Extended Component
import Page from "../components/Page";
import Logo from "../components/Logo";
// CSS
const LogoContainer = styled("div")({
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

function Welcome() {
    // const [values, setValues] = React.useState({
    //     wordCount: 1,
    // });
    let history = useHistory();

    const AmountValidaSchema = Yup.object().shape({
        amount: Yup.number().min(0).required("Amount is required"),
    });

    const formik = useFormik({
        initialValues: {
            amount: "",
        },
        validationSchema: AmountValidaSchema,
        onSubmit: () => {
            history.push("/welcomeStepTwo", { replace: true });
        },
    });

    const {
        errors,
        touched,
        values,
        isSubmitting,
        handleSubmit,
        getFieldProps,
    } = formik;

    return (
        <Page title='Welcome'>
            <FormikProvider value={formik}>
                <Box
                    component='form'
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        maxWidth: 500,
                    }}
                >
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <Typography
                        variant='h4'
                        component='h4'
                        align='center'
                        letterSpacing='0.3em'
                    >
                        WELCOME
                    </Typography>
                    <Typography variant='p' component='p' align='center'>
                        How much money you have at the moment?
                    </Typography>

                    <FormControl
                        fullWidth
                        sx={{ m: 1, marginTop: "3em" }}
                        variant='filled'
                        color='primary'
                    >
                        <InputLabel htmlFor='filled-adornment-amount'>
                            Amount
                        </InputLabel>

                        <FilledInput
                            inputProps={{ style: { textAlign: "right" } }}
                            id='filled-adornment-amount'
                            {...getFieldProps("amount")}
                            error={Boolean(touched.amount && errors.amount)}
                            color='primary'
                            endAdornment={
                                <InputAdornment
                                    sx={{
                                        right:
                                            15 +
                                            String(values.amount).length * 9 +
                                            `px`,
                                        position: "absolute",
                                        bottom: "20px",
                                    }}
                                    position='end'
                                >
                                    |
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <LoadingButton
                        sx={{ m: 1, position: "absolute", bottom: "50px" }}
                        fullWidth={true}
                        variant='contained'
                        onClick={handleSubmit}
                        loading={isSubmitting}
                        disabled={values.amount <= 0}
                    >
                        ADD
                    </LoadingButton>
                </Box>
            </FormikProvider>
        </Page>
    );
}

export default Welcome;
