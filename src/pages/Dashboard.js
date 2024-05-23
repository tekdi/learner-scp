import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from "@mui/material";
import CardComponent from "../components/common/Card";
import { sectionContent } from "../components/player/playerData";
import { assessmentStatusCheck } from "../apis/assessment";
import Loading from "../components/common/Loading";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [responseCode, setResponseCode] = useState(null);

  const instructions = [
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
  ];

  useEffect(() => {
    const fetchAssessmentStatus = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const statusCheck = await assessmentStatusCheck(userId);
          setResponseCode(statusCheck.responseCode);
        }
      } catch (error) {
        console.error("Error fetching assessment status:", error);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchAssessmentStatus();
  }, []);

  return (
    <Box >
      <Header />
      <Box
        sx={{
          m: 2,
        }}
      >

      </Box>
      <Box
       sx={{
        display: "flex",
        flexDirection: "column",
        
        alignItems: "center",
       
      }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              
            }}
          >
            <Loading />
          </Box>
        ) : (
          <CardComponent sectionContent={sectionContent} responseCode={responseCode} />
        )}
      </Box>
      <Box
      sx={{
        
        padding: 3, // Padding inside the box
        borderRadius: 1, // Rounded corners
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        General Instructions
      </Typography>
      <List>
        {instructions.map((instruction, index) => (
          <ListItem key={index} sx={{ display: 'list-item' }}>
            <ListItemText primary={instruction} />
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );
}

export default Dashboard;
