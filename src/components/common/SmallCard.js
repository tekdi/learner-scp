import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { RadioButtonUnchecked } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ date, subject, minutes, identifier }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/dashboard", {
      state: {
        identifier, // Pass the identifier to the Dashboard
      },
    });
  };

  return (
    <Card
      sx={{ width: "150px", m: 1, boxShadow: 3, borderRadius: 2, p: 1 }}
      onClick={handleCardClick}
    >
      <CardContent sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <RadioButtonUnchecked sx={{ p: 0 }} />
          {date && (
            <Typography
              color="textSecondary"
              variant="caption"
              display="block"
              gutterBottom
              sx={{ m: 1 }}
            >
              {date}
            </Typography>
          )}
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "#dca10f" }}
        >
          {subject}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontSize: "0.75rem" }}
        >
          {minutes} MIN
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
