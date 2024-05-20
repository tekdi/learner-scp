import React from "react";
import Header from "../components/common/header";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleAssessment = () => {

        navigate('/assessment')

      };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          m: 2,
        }}
      >
        <Typography variant="h5" component="h2">
          My Assessment
        </Typography>
      </Box>
      <Box
        sx={{
          m: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            mt: 2,
            bgcolor: "#fdbe16", // Background color
            "&:hover": {
              bgcolor: "#dca10f", // Darker shade for hover state
            },
            color: "black", // Text color
          }}
          onClick={handleAssessment}
        >
          Take Assessment
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
