import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import FavoriteIcon from "../components/FavoriteIcon";

const useStyles = makeStyles({
    card: {
        background: "#fff",
        borderRadius: "2px",
        display: "inline-block",
        height: "250px",
        margin: "1rem",
        position: "relative",
        width: "94%",
        boxShadow:
            "0px 0px 4px 0px rgb(0 0 0 / 30%), 0px 1px 0px rgb(0 0 0 / 22%)",
    },
});

export default function BasicCard() {
    const classes = useStyles();
    return (
        <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardHeader
                title='Income'
                sx={{
                    background: "#f4f4f4",
                }}
            />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                >
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
                                    borderBottom: "3px solid #ddd",
                                    justifyContent: "space-between",
                                    flexGrow: 1,
                                    alignItems: "center",
                                    paddingBottom: 1,
                                    position: "relative",
                                }}
                            >
                                <Box component='div'>Income Category {i}</Box>
                                <Box component='div'>3250/9000</Box>
                            </Box>
                        </Box>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    );
}
