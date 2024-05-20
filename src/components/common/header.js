// Header.js
import React from 'react';
import { AppBar, Toolbar    , Select, MenuItem, IconButton, Box, InputLabel } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/logoPratham.png'; // Update the path to your logo image

const Header = () => {
  const [language, setLanguage] = React.useState();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Select
           defaultValue={"EN"}
            value={language}
            onChange={handleChange}
            sx={{ minWidth: 60, marginRight: 2, '& .MuiSelect-select': { padding: '8px 32px 8px 8px' } }}
            variant="outlined"
          >
            <MenuItem value="EN">EN</MenuItem>
            {/* Add more language options here if needed */}
          </Select>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Pratham Logo" style={{ height: 45, marginRight: 8 }} />
        
        </Box>
        <Box>
          <IconButton edge="end" color="inherit">
            <AccountCircle style={{ color: 'black' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
