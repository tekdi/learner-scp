import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SmallCard from "../components/common/SmallCard";
import Header from "../components/common/header";
import { sectionContent } from "../components/player/playerData";
import { parseISO, format } from "date-fns";

const MainComponent = () => {
  const dateString = sectionContent.createdOn;
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, " dd MMMM, yyyy");

  const cardsData = [
    { date: formattedDate, subject: sectionContent.subject[0], minutes: sectionContent.timeLimits.maxTime/60 },
  ];

  const instructions = [
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
    "Some instruction. Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        <Grid  container spacing={1} justifyContent="left" sx={{ mt: 2 }} >
          {cardsData.map((data, index) => (
            <SmallCard
              key={index}
              date={data.date}
              subject={data.subject}
              minutes={data.minutes}
            
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
