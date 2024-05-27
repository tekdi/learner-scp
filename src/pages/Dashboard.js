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
"Final Submission: Once you have completed all the questions, review your answers. Click the Submit button to submit your test. Remember, once submitted, you cannot make any changes or resubmit the test.",
 "Technical Issues: If you encounter any technical issues, contact the test administrator immediately." ,
 "Academic Integrity: This test is to be completed individually. Do not seek help from others or use unauthorized materials. Adhere to the test rules and maintain academic honesty." ,
"Test Environment:  Ensure you have all necessary materials (e.g., paper, pen) before starting the test.  Make sure your device is fully charged or plugged in.",

"Ending the Test:  If you finish early, use the remaining time to review your answers.  Submit your test before the time expires. If you do not submit in time, your test may be automatically submitted with your current progress.", 
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
    <Box sx={{
      height: "100vh",
    
      mt: 5,
      width: "100%",
      flex: 1,
      overflowY: "auto",
    }}>
      <Header />
      <Box
        sx={{
          m: 2,
          mt: 6
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
