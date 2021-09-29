import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
    root: {
        background: "#6200ee",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        border: 0,
        color: "white",
        height: 50,
        padding: "0 30px",
        zIndex: 1032,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
    active: {
        color: "#03dac5",
        fontWeight: 600,
    },
    addIcon: {
        color: "#000",
        background: "#03dac5",
        height: 60,
        width: 60,
        zIndex: 1033,
        position: "absolute",
        bottom: 30,
        right: 40,
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box
                component='div'
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "60%",
                }}
            >
                <Box
                    component='div'
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "20%",
                        alignItems: "center",
                    }}
                >
                    <HomeIcon className={classes.active} />
                    <Box component='div' className={classes.active}>
                        Overview
                    </Box>
                </Box>
                <Box
                    component='div'
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "20%",
                        alignItems: "center",
                    }}
                >
                    <CategoryIcon />
                    <Box component='div'>Categories</Box>
                </Box>
                <Box
                    component='div'
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "20%",
                        alignItems: "center",
                    }}
                >
                    <BarChartIcon />
                    <Box component='div'>Statistics</Box>
                </Box>
            </Box>

            <Box component='div' className={classes.addIcon}>
                <AddIcon />
            </Box>
        </Box>
    );
}

export default Footer;
