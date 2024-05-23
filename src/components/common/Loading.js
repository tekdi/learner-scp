import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";


function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      
      <CircularProgress sx={{ mt: 2 }} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default Loading;
