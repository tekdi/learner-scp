import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const CardComponent = ({ sectionContent, responseCode }) => {
  const timeLimits = JSON.parse(sectionContent?.timeLimits || "{}");

  const maxTimeMinutes = timeLimits?.maxTime / 60;
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
    <Card
      sx={{
        maxWidth: 345,
        m: 3,
        borderRadius: 3,
        boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
        p: 1,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              sx={{
                fontWeight: "bold.100",
                color: "#daa200",
              }}
              variant="h3"
              component="span"
            >
              {maxTimeMinutes}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              style={{ marginLeft: 8 }}
            >
              <Typography
                sx={{
                  fontWeight: "bold.100",
                  color: "#daa200",
                }}
                variant="body2"
                component="span"
              >
                MIN
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold.100",
                  color: "#daa200",
                }}
                variant="h7"
                component="span"
              >
                {sectionContent?.name}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Typography sx={{ mt: 2 }} variant="body2" color="text.primary">
            Description<br></br> {sectionContent?.description}
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
            Test Medium<br></br>
            <Typography
              variant="body3"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              {sectionContent?.medium}
            </Typography>
          </Typography>

          <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
            Board
            <br></br>
            <Typography
              variant="body3"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              {sectionContent?.board}
            </Typography>
          </Typography>
          <Button
            sx={{
              width: "100%",
              borderRadius: "50px",
              mt: 2,
              bgcolor: responseCode == 200 ? "#d3d3d3" : "#fdbe16", // Grayed out background color
              "&:hover": {
                bgcolor: responseCode == 200 ? "#d3d3d3" : "#dca10f", // Prevent hover effect when disabled
              },
              color: responseCode === 200 ? "#a9a9a9" : "black", // Grayed out text color
              pointerEvents: responseCode == 200 ? "none" : "auto", // Prevent click when disabled
              fontWeight: "bold",
              textTransform: "none",
            }}
            onClick={handleAssessment}
            disabled={responseCode == 200}
          >
            {responseCode == 200 ? "Completed" : "Start Test"}
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
