import PropTypes from "prop-types";
// material
import Box from "@mui/material/Box";

import LogoUrl from "../static/logo.png";

Logo.propTypes = {
    sx: PropTypes.object,
};

export default function Logo({ sx }) {
    return (
        <Box
            component='img'
            src={LogoUrl}
            sx={{ width: 100, height: 100, ...sx }}
        />
    );
}
