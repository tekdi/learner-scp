import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CardComponent from "../components/common/Card";
import { mainContentSearch } from "../apis/assessment";

import { assessmentStatusCheck } from "../apis/assessment";
import Loading from "../components/common/Loading";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [responseCode, setResponseCode] = useState(null);
  const [sectionContent, setSectionContent] = useState(null);

  const instructions = [
    "**Navigating the Test**: - Read each question carefully before selecting your answer. - You may skip questions and return to them later if needed, but keep an eye on the timer. - Use the Next and Previous buttons to navigate between questions.",
    "**Answering Questions**: - Each question has multiple choices. Select the option that best answers the question. - Double-check your selected answer before moving to the next question. - There is no negative marking, so it is better to attempt all questions even if you are unsure of the answer.",
  
  ];

  useEffect(() => {
    const fetchAssessmentStatus = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const statusCheck = await assessmentStatusCheck(userId);
          setResponseCode(statusCheck?.responseCode);
        }
      } catch (error) {
        console.error("Error fetching assessment status:", error);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    const fetchSectionData = async () => {
      try {
       
        const identifier = localStorage.getItem("identifier");
        if (identifier) {
          const playerData = await mainContentSearch(identifier);

          setSectionContent(playerData?.result?.questionSet);
        }
      } catch (error) {
        console.error("Error fetching assessment data:", error);
      } finally {
        setLoading(false); // Set loading to false once the API call is complete
      }
    };

    fetchAssessmentStatus();
    fetchSectionData();
  }, []);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          m: 2,
        }}
      ></Box>
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
          <CardComponent
            sectionContent={sectionContent}
            responseCode={responseCode}
          />
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
            <ListItem key={index} sx={{ display: "list-item" }}>
              <ListItemText primary={instruction} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Dashboard;
