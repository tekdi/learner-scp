import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
  IconButton,
  InputAdornment,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../assets/logoPratham.png";
import { cohortSearch, loginApi, userIdApi } from "../apis/loginApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await loginApi(data.username, data.password);
      console.log("Login successful");
      localStorage.setItem("authToken", result.access_token);
      localStorage.setItem("refreshToken", result.refresh_token);
      const token = result.access_token;
      const userID = await userIdApi(token);
      await cohortSearch(userID.result.userId);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f5",
        padding: 2,
      }}
    >
      <img src={logo} alt="Pratham Logo" width={350} />
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              mt: 1,
              height: "30px",
            }}
          >
            <Controller
              name="language"
              control={control}
              defaultValue="English"
              render={({ field }) => (
                <Select
                  {...field}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="English">English</MenuItem>
                  {/* Add more language options here if needed */}
                </Select>
              )}
            />
          </Box>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <OutlinedInput {...field} id="username" label="Username" />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              mt: 1,
            }}
          >
            <Button variant="text">Forgot Password?</Button>
          </Box>
          <FormControlLabel
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              mt: 1,
            }}
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              borderRadius: "50px",
              mt: 2,
              bgcolor: "#fdbe16", // Background color
              "&:hover": {
                bgcolor: "#dca10f", // Darker shade for hover state
              },
              color: "black", // Text color
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginScreen;
