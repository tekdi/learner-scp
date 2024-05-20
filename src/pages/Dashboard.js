import React from "react";
import Header from "../components/common/Header";
import { Box, Typography } from "@mui/material";
import CardComponent from "../components/common/Card";
import { sectionContent } from "../components/player/playerData";

function Dashboard() {
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
      ></Box>
      <Box>
        <CardComponent sectionContent={sectionContent} />
      </Box>
    </Box>
  );
}

export default Dashboard;
