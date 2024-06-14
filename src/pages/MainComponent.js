import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import QuestionSetList from "../components/common/QuestionSetList";
import Header from "../components/common/header";
import { userIdApi, cohortSearch } from "../apis/loginApi";
import { contentSearch, mainContentSearch } from "../apis/assessment";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MainComponent = () => {
  const [questionSets, setQuestionSets] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userID = await userIdApi(token);
        const cohort = await cohortSearch(userID.result.userId, token);
        console.log(cohort?.result?.results?.cohortDetails[0]?.cohortData.customFields[3].value);
        localStorage.setItem("cohortId", cohort?.result?.results?.cohortDetails[0]?.cohortData.customFields[3].value);
        const cohortValue = cohort?.result?.results?.cohortDetails[0]?.cohortData.customFields[3].value; // Hardcoded for demonstration

        if (cohortValue) {
          const states = cohortValue.split(",")[0].trim();
          const identifier = await contentSearch(cohortValue);
          setQuestionSets(identifier?.result?.QuestionSet);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (identifier) => {
    localStorage.setItem("identifier", identifier);
    navigate(`/dashboard/${identifier}`);
  };

  const instructions = [
    t("MAIN.GENERAL_INSTRUCTIONS_1"),
    t("MAIN.GENERAL_INSTRUCTIONS_2"),
    t("MAIN.GENERAL_INSTRUCTIONS_3"),
    t("MAIN.GENERAL_INSTRUCTIONS_4"),
    t("MAIN.GENERAL_INSTRUCTIONS_5"),
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
        <Typography variant="h6">{t("MAIN.HEADING_1")}</Typography>
        {/* <Typography variant="body2" color="textSecondary">
          {t("MAIN.HEADING_2")}
        </Typography> */}
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="body1">{t("MAIN.HEADING_3")}</Typography>
        {questionSets?.length > 0 ? (
          <QuestionSetList
            questionSets={questionSets}
            onCardClick={handleCardClick}
          />
        ) : (
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
              {t("MAIN.NO_ASSESSMENT_AVAILABLE")}
            </Typography>
          </Box>
        )}
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
            {t("MAIN.HEADING_4")}
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">{t("MAIN.HEADING_5")}</Typography>
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
