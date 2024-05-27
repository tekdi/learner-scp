import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SmallCard from "../components/common/SmallCard";
import Header from "../components/common/header";
import { parseISO, format } from "date-fns";
import { userIdApi, cohortSearch } from "../apis/loginApi";
import { contentSearch, mainContentSearch } from "../apis/assessment";

const MainComponent = () => {
  const [sectionContent, setSectionContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userID = await userIdApi(token);
        const cohort = await cohortSearch(userID.result.userId);
        const cohortValue =
          cohort?.data?.cohortDetails[0]?.cohortData?.customFields[3]?.value;

        if (cohortValue) {
          const identifier = await contentSearch(cohortValue);
          const questionSetIdentifier =
            identifier?.result?.QuestionSet[0]?.identifier;

          if (questionSetIdentifier) {
            localStorage.setItem("identifier", questionSetIdentifier);
            const playerData = await mainContentSearch(questionSetIdentifier);
            const sectionContent = playerData?.result?.questionSet;
            setSectionContent(sectionContent);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dateString = sectionContent?.createdOn;
  const parsedDate = parseISO(dateString || "2024-05-15T13:36:32.427+0000");
  const formattedDate = format(parsedDate, "dd MMMM, yyyy");
  const timeLimits = JSON.parse(sectionContent?.timeLimits || "{}");
  const maxTimeMinutes = timeLimits?.maxTime / 60;

  const cardsData = [
    {
      date: formattedDate,
      subject: sectionContent?.subject[0],
      minutes: maxTimeMinutes,
    },
  ];

  const instructions = [
    "Duration: The test is timed and will last for 20 minutes. Please manage your time accordingly.",
    "Number of Questions: The test comprises multiple-choice questions. Ensure you answer all questions within the given time frame.",
    "Submission: You can only submit the test once. Make sure you review your answers carefully before submitting, as you will not have another opportunity to submit.",
    "Starting the Test: Ensure you are in a quiet environment with no interruptions.Make sure your internet connection is stable.",
    " Navigating the Test: Read each question carefully before selecting your answer. You may skip questions and return to them later if needed, but keep an eye on the timer. Use the Next and Previous buttons to navigate between questions.",
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
        width: "100%",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Header />
      <Box
        sx={{
          backgroundColor: "#ede1cf",
          p: 3,
          width: "100%",
        }}
      >
        <Typography variant="h6">Pre Test</Typography>
        <Typography variant="body2" color="textSecondary">
          Deadline: 28 May, 2024
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="body1">
          Complete the tests for each of the subjects below. Feel free to do
          them in any order
        </Typography>
        <Grid container spacing={1} justifyContent="left" sx={{ mt: 2 }}>
          {cardsData.map((data, index) => (
            <SmallCard
              key={index}
              date={data.date}
              subject={data.subject}
              minutes={data.minutes}
              sectionContent={sectionContent}
            />
          ))}
        </Grid>
        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: "#ffdea1",
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="textPrimary">
            Note: Your Pre-test will be considered only if you complete all the
            subjects
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">General Instructions</Typography>
          <List>
            {instructions.map((instruction, index) => (
              <ListItem key={index} sx={{ display: "list-item" }}>
                <ListItemText primary={instruction} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default MainComponent;
