import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { forwardRef } from "react";
// material
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", ...other }, ref) => (
    <HelmetProvider>
        <Box ref={ref} {...other}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Container
                maxWidth='sm'
                sx={{
                    bgcolor: "white",
                    height: "100vh",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {children}
            </Container>
        </Box>
    </HelmetProvider>
));

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default Page;
