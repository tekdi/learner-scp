import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ sectionContent }) => {
  console.log(sectionContent);
  const navigate = useNavigate();

  const handleAssessment = () => {
    navigate("/assessment", {
      state: {
        sectionContent,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345, ml: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/150"
          alt={"Image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            Name : {sectionContent.name}
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
              bgcolor: "#fdbe16", // Background color
              "&:hover": {
                bgcolor: "#dca10f", // Darker shade for hover state
              },
              color: "black", // Text color
            }}
            onClick={handleAssessment}
          >
            Take Assessment
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    );
 };

export default CardComponent;
