import * as React from "react";
import { useHistory } from "react-router-dom";
// Material
import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import "../static/hide-outline.css";

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

function FavoriteIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
        </SvgIcon>
    );
}

function WelcomeStepThree() {
    const [values, setValues] = React.useState({
        amount: "",
    });

    let history = useHistory();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const submitStepTwo = (event) => {
        event.preventDefault();
        history.push("./home");
    };

    return (
        <Page title='Welcome'>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                    maxWidth: 500,
                    margin: "0 auto",
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
                <Typography
                    variant='p'
                    component='p'
                    align='center'
                    sx={{ m: 1 }}
                >
                    Set how much money you want to spend on each Category
                    monthly
                </Typography>
                <SimpleBar style={{ maxHeight: "40%" }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <Box
                            sx={{
                                m: 1,
                                display: "flex",
                                gap: "1em",
                                alignItems: "center",
                            }}
                            key={i}
                        >
                            <FavoriteIcon />
                            <Box
                                sx={{
                                    display: "flex",
                                    borderBottom: "1px solid #ddd",
                                    justifyContent: "space-between",
                                    flexGrow: 1,
                                    alignItems: "center",
                                }}
                            >
                                <InputLabel
                                    sx={{ fontWeight: 500, color: grey[800] }}
                                    htmlFor={`'input'` + i}
                                >
                                    Category {i}
                                </InputLabel>

                                <TextField
                                    inputProps={{
                                        style: {
                                            textAlign: "right",
                                            paddingRight: "25px",
                                        },
                                    }}
                                    placeholder='amount'
                                    variant='standard'
                                    className='no-outline'
                                    id={`'input'` + i}
                                    type='text'
                                    onChange={handleChange}
                                />
                            </Box>
                        </Box>
                    ))}
                </SimpleBar>
                <Button
                    sx={{ m: 1, position: "absolute", bottom: 40 }}
                    fullWidth={true}
                    variant='contained'
                    onClick={submitStepTwo}
                >
                    COMPLETE
                </Button>
            </Box>
        </Page>
    );
}

export default WelcomeStepThree;
