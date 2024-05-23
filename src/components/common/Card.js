import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ sectionContent, responseCode }) => {
  
  const navigate = useNavigate();

  const handleAssessment = () => {
    if (responseCode !== 200) {
      navigate("/assessment", {
        state: {
          sectionContent,
        },
      });
    }
  };

  return (
    <Card sx={{ maxWidth: 345, ml: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/150"
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            Name: {sectionContent.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Medium: {sectionContent.medium}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Board: {sectionContent.board}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {sectionContent.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              mt: 2,
              bgcolor: responseCode === 200 ? "#d3d3d3" : "#fdbe16", // Grayed out background color
              "&:hover": {
                bgcolor: responseCode === 200 ? "#d3d3d3" : "#dca10f", // Prevent hover effect when disabled
              },
              color: responseCode === 200 ? "#a9a9a9" : "black", // Grayed out text color
              pointerEvents: responseCode === 200 ? "none" : "auto" // Prevent click when disabled
            }}
            onClick={handleAssessment}
            disabled={responseCode == 200}
          >
            {responseCode == 200 ? "Completed" : "Take Assessment"}
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
