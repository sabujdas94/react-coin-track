import * as React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik, FormikProvider } from "formik";
// Material
import LoadingButton from "@mui/lab/LoadingButton";
import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
// Extended Component
import Page from "../components/Page";
import Logo from "../components/Logo";

import UserStore from "../store/UserStore";

// CSS
const LogoContainer = styled("div")({
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

function Login() {
    const history = useHistory();
    const [showPassword, setShowPassword] = React.useState(false);

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: true,
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            axios.get(`https://randomuser.me/api/`).then((res) => {
                const persons = res.data.results[0];
                UserStore.avater = persons.picture.thumbnail;
                history.push("/overview", { replace: true });
            });
        },
    });

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } =
        formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <Page title='Welcome'>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Typography
                    variant='h4'
                    component='h4'
                    align='center'
                    letterSpacing='0.3em'
                >
                    SIGN IN
                </Typography>
            </Box>
            <FormikProvider value={formik}>
                <Box
                    component='form'
                    sx={{ display: "flex", flexWrap: "wrap" }}
                    autoComplete='off'
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            autoComplete='username'
                            id='username-basic'
                            label='Username'
                            variant='outlined'
                            {...getFieldProps("username")}
                            error={Boolean(touched.username && errors.username)}
                            helperText={touched.username && errors.username}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant='outlined'>
                        <TextField
                            fullWidth
                            autoComplete='current-password'
                            type={showPassword ? "text" : "password"}
                            label='Password'
                            {...getFieldProps("password")}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleShowPassword}
                                            edge='end'
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                        />
                    </FormControl>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "3em",
                            width: "100%",
                        }}
                    >
                        <LoadingButton
                            variant='contained'
                            onClick={handleSubmit}
                            loading={isSubmitting}
                        >
                            SIGN IN
                        </LoadingButton>
                    </Box>
                </Box>
            </FormikProvider>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "1em",
                    }}
                    variant='subtitle2'
                    component='div'
                >
                    Don't have account yet?
                </Typography>
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                    }}
                    variant='subtitle2'
                    component='div'
                >
                    <Link href='/signup' variant='body2'>
                        Sign up now, it is free!
                    </Link>
                </Typography>
            </Box>
        </Page>
    );
}

export default Login;
