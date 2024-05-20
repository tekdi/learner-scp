import React from 'react';
import { Card, CardContent, CardHeader, Avatar, IconButton, Typography, Grid, Paper, Divider, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Header from './header';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate("/")
      };

  return (
    <Box>

<Header />
    <Card sx={{ mt: 4, padding: 2, borderRadius: '15px' }}>
        
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="John Doe"
            src="/static/images/avatar/1.jpg" // You can replace this with the actual image URL
          />
        }
        action={
          <IconButton aria-label="edit profile">
            <EditIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="Pune, Maharashtra"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              <PhoneIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> 
              +91 0000000000
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              <EmailIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> 
              user_id@email.com
            </Typography>
          </Grid>
          
        </Grid>
        <Box mt={2}>
        <Typography variant="body2" color="textSecondary" component="p">
              Bio
            </Typography>
          <Typography variant="body1" mt={2}>
            Teaching for a decade, my mission is to make math enjoyable and accessible, turning each lesson into a mathematical adventure.
          </Typography>
        </Box>
        <Box mt={3} p={2} bgcolor="#e0f7fa" borderRadius="10px">
          <Typography variant="h6" component="div">
            Interview & Test Scores
          </Typography>
          <Divider sx={{ marginY: 1 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ textAlign: 'center', padding: 1, bgcolor: '#ffffff', borderRadius: '10px' }}>
                <Typography variant="body2" color="textSecondary">Interview Score</Typography>
                <Typography variant="h6">82%</Typography>
                <Typography variant="body2" color="textSecondary">Held on: 02/01/23</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0} sx={{ textAlign: 'center', padding: 1, bgcolor: '#ffffff', borderRadius: '10px' }}>
                <Typography variant="body2" color="textSecondary">Test Score</Typography>
                <Typography variant="h6">86%</Typography>
                <Typography variant="body2" color="textSecondary">Held on: 19/01/23</Typography>
              </Paper>
            </Grid>
            
          </Grid>
          
        </Box>

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
            onClick={handleLogout}
          >
            Logout
          </Button>
      </CardContent>
    </Card>

    </Box>
  );
};

export default Profile;
