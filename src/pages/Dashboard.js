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
import { useTranslation } from "react-i18next";
import { assessmentStatusCheck } from "../apis/assessment";
import Loading from "../components/common/Loading";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [responseCode, setResponseCode] = useState(null);
  const [sectionContent, setSectionContent] = useState(null);
  const { t } = useTranslation();
  const location = useLocation();
  const identifier = location.state?.identifier; // Retrieve the identifier from the location state

  const instructions = [
    t("DASHBOARD.GENERAL_INSTRUCTIONS_6"),
    t("DASHBOARD.GENERAL_INSTRUCTIONS_7"),
    t("DASHBOARD.GENERAL_INSTRUCTIONS_8"),
    t("DASHBOARD.GENERAL_INSTRUCTIONS_9"),
    t("DASHBOARD.GENERAL_INSTRUCTIONS_10"),
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
  }, [identifier]);

  return (
    <Box
      sx={{
        height: "100vh",
        mt: 5,
        width: "100%",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Header />
      <Box
        sx={{
          m: 2,
          mt: 6,
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
          padding: 3,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {t("MAIN.HEADING_5")}
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
