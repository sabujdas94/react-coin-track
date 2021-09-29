import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
// import { blue } from "@mui/material/colors";

import LogoUrl from "../static/logo-without-title.png";
import Dummy from "../static/dummy.png";
import UserStore from "../store/UserStore";

const useStyles = makeStyles({
    root: {
        background: "#6200ee",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        border: 0,
        color: "white",
        height: 50,
        padding: "0 30px",
        zIndex: 1032,
        display: "flex",
        alignItems: "center",
    },
});

function Header(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box component='img' src={LogoUrl} sx={{ height: 30 }} />
            <Box component='div' sx={{ fontWeight: 600, marginLeft: "20px" }}>
                {props.tite}
            </Box>
            <Box
                component='img'
                src={UserStore.avater.length > 0 ? UserStore.avater : Dummy}
                sx={{
                    marginLeft: "auto",
                    height: 38,
                    width: 38,
                    background: "#e6e6e6",
                    borderRadius: "100%",
                    border: "2px solid #fff",
                }}
            />
        </Box>
    );
}

export default Header;
