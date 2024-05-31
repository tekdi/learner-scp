import React from "react";
import SmallCard from "./SmallCard";
import { Box } from "@mui/material";

const QuestionSetList = ({ questionSets }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {questionSets.map((questionSet) => {
        let maxTimeMinutes = 0;
        try {
          const timeLimits = JSON.parse(questionSet.timeLimits);
          const maxTime = parseInt(timeLimits.maxTime, 10) || 0;
          maxTimeMinutes = Math.floor(maxTime / 60);
        } catch (error) {
          console.error("Error parsing timeLimits:", error);
        }

        return (
          <SmallCard
            key={questionSet.identifier}
            date={new Date(questionSet.lastPublishedOn).toLocaleDateString()}
            subject={questionSet.subject.join(", ")}
            minutes={maxTimeMinutes} // Pass the converted maxTime
            sectionContent={questionSet}
            identifier={questionSet.identifier} // Pass the identifier
          />
        );
      })}
    </Box>
  );
};

export default QuestionSetList;
