// Header.js
import React from 'react';
import { AppBar, Toolbar    , Select, MenuItem, IconButton, Box, InputLabel, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/prathamSingle.png'; // Update the path to your logo image
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = React.useState();
const {t} = useTranslation();
  const isHome =
  
  location.pathname === "/assessment";

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleProfilePage = () => {

    navigate('/profile')

  }

  const handleLogout = () => {
    localStorage.clear();
      navigate("/login")
    };

    const handleHome = () => {
     
        navigate("/")
      };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1, borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <Select
           defaultValue={"EN"}
            value={language}
            onChange={handleChange}
            sx={{ minWidth: 60, marginRight: 2, '& .MuiSelect-select': { padding: '8px 32px 8px 8px' } }}
            variant="outlined"
          >
            <MenuItem value="EN">EN</MenuItem>
            
          </Select> */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Pratham Logo" style={{ height: 45, marginRight: 8 }} onClick={handleHome}/>
        
        </Box>
        </Box>
        {!isHome && (
        <Box>
          {/* <IconButton edge="end" color="inherit" onClick={handleProfilePage}>
            <AccountCircle style={{ color: 'black' }} />
          </IconButton> */}
        
          <Button
          variant='outlined'
            sx={{
       
                color:'black',
              bgcolor: "#fdbe16", // Grayed out background color
            }}
            onClick={handleLogout}
         
          >
             {t("LOGOUT")}
           </Button>
        </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
