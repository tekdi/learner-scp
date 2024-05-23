import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import { Box, Typography, CircularProgress } from "@mui/material";
import CardComponent from "../components/common/Card";
import { sectionContent } from "../components/player/playerData";
import { assessmentStatusCheck } from "../apis/assessment";
import Loading from "../components/common/Loading";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [responseCode, setResponseCode] = useState(null);

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
    </Box>
  );
}

export default Dashboard;
